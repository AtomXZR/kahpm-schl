import { APIPIE, REQINIT, USERLANG } from "./cfg";
import * as geo from "./geo";
import { fetchresp, stationData, cardData } from "./interfaces";


const get = async ():Promise<fetchresp> => {
    let stat = true;
    try {
        const x = await fetch(APIPIE, REQINIT);
        if (!x.ok) stat = false;
        const s = await x.json();
        const n:fetchresp = {
            status: stat,
            data: s,
        };
        return n;
    } catch (e) {
        stat = false;
        alert("Error: "+e);
        const n:fetchresp = {
            status: stat,
            data: undefined,
        };
        return n;
    }
};



const writeCard = async (d:cardData) => {
    const cardBody = document.createElement("div");
    cardBody.classList.add("card");
    cardBody.setAttribute("color", d.color_c);

    const areaP = document.createElement("p");
    areaP.textContent = d.area;
    cardBody.appendChild(areaP);

    const txtwrp = document.createElement("div");
    txtwrp.classList.add("txtwrp");

    const aqinum = document.createElement("h1");
    aqinum.setAttribute("tnum", "");
    aqinum.textContent = d.aqi;
    txtwrp.appendChild(aqinum);

    const aqitxt = document.createElement("h1");
    aqitxt.textContent = "AQI";
    txtwrp.appendChild(aqitxt);

    cardBody.appendChild(txtwrp);
    return cardBody;
};

const procData = async (data:stationData[]) => {
    const interc = document.querySelector(".intercontent");
    if (!interc) return;
    while (interc.hasChildNodes()) {
        if (!interc.lastChild) return;
        interc.removeChild(interc.lastChild);
    }

    for (let x = 0; x < data.length; x++) {
        const e = data[x];
        const Area = USERLANG === "th" ? e.areaTH : e.areaEN;
        const card = await writeCard({area: Area, aqi: e.AQILast.PM25.aqi, color_c: e.AQILast.PM25.color_id});
        interc.appendChild(card);
    }
};

const loadData = async () => {
    const d = await get();
    if (d.status === false || !d.data) return;
    const disted = await geo.calcDistance(d.data.stations);
    const soort = await geo.sortre(disted);
    await procData(soort);
};

export { loadData };