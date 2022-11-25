import { USERLANG } from "./cfg";
import {stationData} from "./interfaces";
let GEOSUPPORT = false;
const USEHIGHACCURACY = (new URL(String(document.location))).searchParams.has("nogeoha")?false:true; console.log("ha "+ USEHIGHACCURACY);
if ("geolocation" in navigator) GEOSUPPORT = true;
const getGeo = async ():Promise<{s:boolean, d?:string,c?:GeolocationPosition}> => {
    return new Promise((res, rej) => {
        if (!GEOSUPPORT) rej({s:false,d:"Geo not supported"});
        navigator.geolocation.getCurrentPosition((x) => res({s:true,c:x}), (l) => {
            res({s:false,d:l.message});
            // if (USERLANG === "th") window.alert("เราใช้ GeoLocation เพื่อค้นหาข้อมูลที่อยู่ใกล้คุณที่สุด"); else window.alert("We used GeoLocation to find the information nearest to you.");
        }, {
            enableHighAccuracy: USEHIGHACCURACY,
        });
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
        if (!geon.c) throw new Error("c is undefined.");
        const e = sd[x];
        // console.log(e);
        const elat = Number(e.lat);
        const elon = Number(e.long);
        const curRadLat = Math.PI * (geon.c.coords.latitude/180);
        // const curRadLon = Math.PI * geon.c.coords.longitude/180;
        const staRadLat = Math.PI * (elat/180);
        // const staRadLon = Math.PI * elon/180;
        const theta = geon.c.coords.longitude-elon;
        const radtheta = Math.PI * (theta/180);
        const dst = Math.sin(curRadLat) * Math.sin(staRadLat) + Math.cos(curRadLat) * Math.cos(staRadLat) * Math.cos(radtheta);
        const distn = Math.acos(dst);
        const disto = distn * (180 / Math.PI);
        const distp = disto * (60 * 1.1515);

        
        const distancy = distp * 1.609344;
        if (isNaN(distancy)) console.warn("DISTANCY is NAN");

        e.distance = String(distancy);
        narf.push(e);
    }
    return narf;
};

const sortre = async (sd:stationData[]) => {
    return sd.sort((a, b) => {
        if (!("distance" in a) || !("distance" in b)) return 1;
        return Number(a.distance) - Number(b.distance);
    });
};

export {sortre, calcDistance};