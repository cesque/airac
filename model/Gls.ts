import { IlsMlsGlsCategory } from "./LocalizerGlideslope.js"

export enum StationType {
    LAAS_GLS_GROUND_STATION = 'L',
    SCAT_1_STATION = 'C',
}

export default class Gls {
    areaCode?: string
    airportIdentifier?: string
    icaoCode?: string
    glsRefPathIdentifier?: string
    glsCategory?: IlsMlsGlsCategory
    glsChannel?: number
    runwayIdentifier?: string
    glsApproachBearing?: number
    stationLatitude?: number
    stationLongitude?: number
    glsStationIdent?: string
    glsApproachSlope?: number
    magneticVariation?: number
    stationElevation?: number
    stationType?: string

    constructor(data: any) {
        this.areaCode = data.area_code
        this.airportIdentifier = data.airport_identifier
        this.icaoCode = data.icao_code
        this.glsRefPathIdentifier = data.gls_ref_path_identifier
        this.glsCategory = data.gls_category as IlsMlsGlsCategory
        this.glsChannel = data.gls_channel
        this.runwayIdentifier = data.runway_identifier
        this.glsApproachBearing = data.gls_approach_bearing
        this.stationLatitude = data.station_latitude
        this.stationLongitude = data.station_longitude
        this.glsStationIdent = data.gls_station_ident
        this.glsApproachSlope = data.gls_approach_slope
        this.magneticVariation = data.magnetic_variation
        this.stationElevation = data.station_elevation
        this.stationType = data.station_type ? data.station_type[0] as StationType : undefined
    }

}