import { USERLANG } from "./cfg";
interface klgcd {
    num: number,
    data: string,
}

const createCard = (cd:klgcd) => {
    const cardBody = document.createElement("div");
    const hone = document.createElement("h1");
    const para = document.createElement("p");
    cardBody.classList.add("klgcard");
    hone.textContent = String(cd.num);
    para.textContent = String(cd.data);
    cardBody.appendChild(hone);
    cardBody.appendChild(para);
    return cardBody;
};



///////////////////////////////////////////////////////////////////

const procKlg = () => {
    const dataEN:string[] = [
        "Close the window to prevent small dust particles.",
        "Avoid leaving the house unnecessarily.",
        "Wear a mask that can protect against PM 2.5",
        "Refrain from exercising or working hard outdoors.",
        "Risk groups should avoid inhaling fine dust.",
    ];
    const dataTH:string[] = [
        "ปิดประตูหน้าต่าง เพื่อป้องกันฝุ่นละอองขนาดเล็ก",
        "หลีกเลี่ยงการออกจากบ้านโดยไม่จำเป็น",
        "สวมหน้ากากอนามัยที่สามารถป้องกัน PM 2.5 ได้",
        "งดออกกำลังกายหรือทำงานหนักกลางแจ้ง",
        "กลุ่มเสี่ยงควรหลีกเลี่ยงการสูดฝุ่นละอองขนาดเล็ก",
    ];
    const klgcardcon = document.querySelector("#klg_spd");
    if (!klgcardcon) return;
    while (klgcardcon.hasChildNodes()) {
        if (!klgcardcon.lastChild) return;
        klgcardcon.removeChild(klgcardcon.lastChild);
    }
    let data = dataEN;
    if (USERLANG === "th") data = dataTH;
    for (let x = 0; x < data.length; x++) {
        const e = data[x];
        const c = createCard({num: x+1, data: e});
        klgcardcon.appendChild(c);
    }
};

const procKlgRDS = () => {
    const dataEN:string[] = [
        "Avoid burning garbage, incense, and switch to electric incense.",
        "Use an air purifier.",
        "Plant trees.",
        "Reduce the use of personal cars.",
        "Always check the condition of the car. to reduce black smoke.",
        "Keep the house clean.",
    ];
    const dataTH:string[] = [
        "งดเผาขยะ งดจุดธูป เปลี่ยนมาใช้ธูปไฟฟ้า",
        "ติดตั้งเครื่องฟอกอากาศ",
        "ปลูกต้นไม้ฟอกอากาศ",
        "ลดการใช้รถยนต์ส่วนบุคคล",
        "หมั่นเช็คสภาพรถ เพื่อลดควันดำ",
        "หมั่นทำความสะอาดบ้าน",
    ];
    const klgcardcon = document.querySelector("#klg_rds");
    if (!klgcardcon) return;
    while (klgcardcon.hasChildNodes()) {
        if (!klgcardcon.lastChild) return;
        klgcardcon.removeChild(klgcardcon.lastChild);
    }
    let data = dataEN;
    if (USERLANG === "th") data = dataTH;
    for (let x = 0; x < data.length; x++) {
        const e = data[x];
        const c = createCard({num: x+1, data: e});
        klgcardcon.appendChild(c);
    }
};

const procABU = () => {
    const dataEN:string[] = [
        "This site is developed as a school projekt.",
        "This site relies on IP-API and Air4Thai API.",
        "This site uses GeoLocation to find the nearest station. (may not be accurate.)"
    ];
    const dataTH:string[] = [
        "เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นโครงการของโรงเรียน",
        "เว็บไซต์นี้ใช้ IP-API และ Air4Thai API",
        "ไซต์นี้ใช้ GeoLocation เพื่อค้นหาสถานีที่ใกล้ที่สุด (อาจไม่ถูกต้อง)"
    ];
    const klgcardcon = document.querySelector("#dat_abu");
    if (!klgcardcon) return;
    while (klgcardcon.hasChildNodes()) {
        if (!klgcardcon.lastChild) return;
        klgcardcon.removeChild(klgcardcon.lastChild);
    }
    let data = dataEN;
    if (USERLANG === "th") data = dataTH;
    for (let x = 0; x < data.length; x++) {
        const e = data[x];
        const c = createCard({num: x+1, data: e});
        klgcardcon.appendChild(c);
    }
};



const bakeKlg = async () => {
    procKlg();
    procKlgRDS();
    procABU();
};
export { bakeKlg };