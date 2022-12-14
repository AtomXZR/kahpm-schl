import { GEOLOCAPI, REQINIT } from "./cfg";
import {stationData} from "./interfaces";

// const USEHIGHACCURACY = (new URL(String(document.location))).searchParams.has("nogeoha")?false:true; console.log("ha "+ USEHIGHACCURACY);

const getGeo = async ():Promise<{s:boolean, d?:{lat:number,lon:number}}> => {
    return new Promise((res, rej) => {
        fetch(GEOLOCAPI, REQINIT).then(x => x.json()).then(x => res({s:true,d:x})).catch((r) => {rej({s:false});alert(r);});
    });
};

const calcDistance = async (sd:stationData[]) => {
    const geon = await getGeo();
    if (geon.s === false) {
        const saad:stationData[] = [];
        for (let x = 0; x < sd.length; x++) {
            const e = sd[x];
            e.distance = "1";
            saad.push(e);
        }
        return saad;
    }

    const narf:stationData[] = [];

    for (let x = 0; x < sd.length; x++) {
        if (!geon.d) throw new Error("d is undefined.");
        const e = sd[x];
        // console.log(e);
        const elat = Number(e.lat);
        const elon = Number(e.long);
        const curRadLat = Math.PI * (geon.d.lat/180);
        // const curRadLon = Math.PI * geon.d.lon/180;
        const staRadLat = Math.PI * (elat/180);
        // const staRadLon = Math.PI * elon/180;
        const theta = geon.d.lon-elon;
        const radtheta = Math.PI * (theta/180);
        const dst = Math.sin(curRadLat) * Math.sin(staRadLat) + Math.cos(curRadLat) * Math.cos(staRadLat) * Math.cos(radtheta);
        const distn = Math.acos(dst);
        const disto = distn * (180 / Math.PI);
        const distp = disto * (60 * 1.1515);

        //const xasn = Math.pow((elat - geon.d.lat), 2) + Math.pow((elon - geon.d.lon), 2);
        //const xoan = xasn; //Math.sqrt(xasn);
        
        const distancy = distp * 1.609344;
        if (isNaN(distancy)) console.warn("DISTANCY is NAN");

        e.distance = String(distancy);
        narf.push(e);
    }

    console.log(narf);
    
    return narf;
};

const sortre = async (sd:stationData[]) => {
    return sd.sort((a, b) => {
        if (!("distance" in a) || !("distance" in b)) return 1;
        return Number(a.distance) - Number(b.distance);
    });
};

export {sortre, calcDistance};