import { USERLANG } from "./ts/cfg";
const createSecKlg = async () => {
    const _contx_info_klg = document.createElement("div");
    _contx_info_klg.classList.add("contx","info","klg");

    const title1 = document.createElement("h1");
    title1.classList.add("title");
    if (USERLANG === "th") title1.textContent = "การป้องกันตนเองจากฝุ่น PM 2.5"; else title1.textContent = "Self-protection from PM 2.5 dust";
    _contx_info_klg.appendChild(title1);

    const klgcardwrapp1 = document.createElement("div");klgcardwrapp1.classList.add("klgcardwrapp");
    const klgcardcon1 = document.createElement("div");klgcardcon1.classList.add("klgcardcon");klgcardcon1.id = "klg_spd";
    klgcardwrapp1.appendChild(klgcardcon1);
    _contx_info_klg.appendChild(klgcardwrapp1);

    const hr = document.createElement("hr");
    _contx_info_klg.appendChild(hr);

    const title2 = document.createElement("h1");
    title2.classList.add("title");
    if (USERLANG === "th") title2.textContent = "วิธีลดฝุ่น PM 2.5"; else title2.textContent = "Ways to reduce PM 2.5";
    _contx_info_klg.appendChild(title2);

    const klgcardwrapp2 = document.createElement("div");klgcardwrapp2.classList.add("klgcardwrapp");
    const klgcardcon2 = document.createElement("div");klgcardcon2.classList.add("klgcardcon");klgcardcon2.id = "klg_rds";
    klgcardwrapp2.appendChild(klgcardcon2);
    _contx_info_klg.appendChild(klgcardwrapp2);

    return _contx_info_klg;
};

const createSecDLT = async () => {
    const dlt_div = document.createElement("div");
    dlt_div.classList.add("contx","info","datalisty");

    const title1 = document.createElement("h1");
    title1.setAttribute("hide1", "");
    title1.setAttribute("titlee", "");
    if (USERLANG === "th") title1.textContent = "ค่าฝุ่น PM 2.5"; else title1.textContent = "PM 2.5 Levels";
    dlt_div.appendChild(title1);

    const hr1 = document.createElement("hr");hr1.setAttribute("hide1", "");
    dlt_div.appendChild(hr1);

    const intercwpr = document.createElement("div");intercwpr.classList.add("intercontentwrapper");
    const interctx = document.createElement("div");interctx.classList.add("intercontent");
    intercwpr.appendChild(interctx);
    dlt_div.appendChild(intercwpr);

    const hr2 = document.createElement("hr");hr2.setAttribute("hide1", "");
    dlt_div.appendChild(hr2);

    const paras = document.createElement("p");
    paras.setAttribute("hide1", "");
    paras.textContent = `${String.fromCharCode(169)} 2022 KNP | MIT License`;
    dlt_div.appendChild(paras);
    
    return dlt_div;
};



const createSecAbo = async () => {
    const hr = document.createElement("hr");
    const _abudiv = document.createElement("div");
    _abudiv.style.width = "100%";
    _abudiv.style.padding = "5px";
    _abudiv.appendChild(hr);

    const title1 = document.createElement("h1");
    title1.classList.add("title");
    if (USERLANG === "th") title1.textContent = "เกี่ยวกับ"; else title1.textContent = "About";
    _abudiv.appendChild(title1);

    const klgcardwrapp1 = document.createElement("div");klgcardwrapp1.classList.add("klgcardwrapp");
    const klgcardcon1 = document.createElement("div");klgcardcon1.classList.add("klgcardcon");klgcardcon1.id = "dat_abu";
    klgcardwrapp1.appendChild(klgcardcon1);
    _abudiv.appendChild(klgcardwrapp1);

    return _abudiv;
};



const create = async () => {
    const klg = await createSecKlg();
    const dlt = await createSecDLT();
    const abu = await createSecAbo();klg.appendChild(abu);
    document.querySelector("#app")?.appendChild(klg);
    document.querySelector("#app")?.appendChild(dlt);
};

export { create };