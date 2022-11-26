const USERLANG = /^th\b/.test(navigator.language) ? "th":"en";

const GEOLOCAPI = "http://ip-api.com/json/";
// eslint-disable-next-line prefer-const
let apie = "https://air4thai.pcd.go.th/forappV2/getAQI_JSON.php";
if (document.location.protocol === "http:") apie = "http://air4thai.pcd.go.th/forappV2/getAQI_JSON.php";
const APIPIE = apie;

const _HEADERS = new Headers();
//_HEADERS.set("X-Requested-With", "XMLHttpRequest");
const REQINIT:RequestInit = {
    mode: "cors",
    method: "get",
    cache: "no-cache",
    headers: _HEADERS
};



export { USERLANG, APIPIE, REQINIT, GEOLOCAPI };