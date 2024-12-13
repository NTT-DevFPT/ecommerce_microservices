export const API_KEYS = {
    GOONG: "cbBgxHddstXdSMLBGahfAS9AeuYUnkHQL9zHKWBU",
    OPEN_CAGE: "YOUR_API_KEY",
};

export const API_URLS = {
    GOONG_GEOCODE: (latitude: number, longitude: number) =>
        `https://rsapi.goong.io/Geocode?latlng=${latitude},${longitude}&api_key=${API_KEYS.GOONG}`,
    PROVINCES: "https://provinces.open-api.vn/api/?depth=1",
    DISTRICTS: (provinceCode: string) =>
        `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`,
    WARDS: (districtCode: string) =>
        `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
    OPEN_CAGE_GEOCODE: (latitude: number, longitude: number) =>
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEYS.OPEN_CAGE}`,
};