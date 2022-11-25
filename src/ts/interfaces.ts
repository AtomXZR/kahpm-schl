interface _aqidata {
    color_id: string,
    aqi: string,
    value: string
}

interface stationData {
    stationID: string,

    distance?: string,

    nameTH: string,
    nameEN: string,
    areaTH: string,
    areaEN: string,

    lat: string,
    long: string,

    AQILast: {
        date: string,
        time: string,
        PM25: _aqidata,
        AQI: _aqidata,
    }
}

interface fetchresp {
    status: boolean,
    data: {
        stations: stationData[]
    }|undefined
}



interface cardData {
    area: string,
    aqi: string;
    color_c:string
}

export {fetchresp, stationData, _aqidata, cardData};