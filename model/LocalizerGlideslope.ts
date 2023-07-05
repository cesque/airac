export enum IlsMlsGlsCategory {
    ILS_LOCALIZER_ONLY_NO_GLIDESLOPE = '0',
    ILS_LOCALIZER_MLS_GLS_CATEGORY_I = '1',
    ILS_LOCALIZER_MLS_GLS_CATEGORY_II = '2',
    ILS_LOCALIZER_MLS_GLS_CATEGORY_III = '3',
    IGS_FACILITY = 'I',
    LDA_FACILITY_WITH_GLIDESLOPE = 'L',
    LDA_FACILITY_NO_GLIDESLOPE = 'A',
    SDF_FACILITY_WITH_GLIDESLOPE = 'S',
    SDF_FACILITY_NO_GLIDESLOPE = 'F',
}

export default class LocalizerGlideslope {
    areaCode?: string
    icaoCode?: string
    airportIdentifier: string
    runwayIdentifier: string
    llzIdentifier: string
    llzLatitude?: number
    llzLongitude?: number
    llzFrequency?: number
    llzBearing?: number
    llzWidth?: number
    ilsMlsGlsCategory?: IlsMlsGlsCategory
    gsLatitude?: number
    gsLongitude?: number
    gsAngle?: number
    gsElevation?: number
    stationDeclination?: number

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.airportIdentifier = data.airport_identifier
        this.runwayIdentifier = data.runway_identifier
        this.llzIdentifier = data.llz_identifier
        this.llzLatitude = data.llz_latitude
        this.llzLongitude = data.llz_longitude
        this.llzFrequency = data.llz_frequency
        this.llzBearing = data.llz_bearing
        this.llzWidth = data.llz_width
        this.ilsMlsGlsCategory = data.ils_mls_gls_category as IlsMlsGlsCategory
        this.gsLatitude = data.gs_latitude
        this.gsLongitude = data.gs_longitude
        this.gsAngle = data.gs_angle
        this.gsElevation = data.gs_elevation
        this.stationDeclination = data.station_declination
    }
}