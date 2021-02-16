export interface WeatherResponse {
    data:  Datum[];
    count?: number;
    flag?:  string[];
}

export interface Datum {
    rh?:             number;
    pod?:            string;
    lon?:            number;
    pres?:           number;
    timezone?:       string;
    ob_time?:        string;
    country_code?:   string;
    clouds?:         number;
    ts?:             number;
    solar_rad?:      number;
    state_code?:     string;
    city_name?:      string;
    wind_spd?:       number;
    wind_cdir_full?: string;
    wind_cdir?:      string;
    slp?:            number;
    vis?:            number;
    h_angle?:        number;
    sunset?:         string;
    dni?:            number;
    dewpt?:          number;
    snow?:           number;
    uv?:             number;
    precip?:         number;
    wind_dir?:       number;
    sunrise?:        string;
    ghi?:            number;
    dhi?:            number;
    aqi?:            number;
    lat?:            number;
    weather?:        Weather;
    datetime?:       string;
    temp?:           number;
    station?:        string;
    elev_angle?:     number;
    app_temp?:       number;
}

export interface Weather {
    icon:        string;
    code:        number;
    description: string;
}
