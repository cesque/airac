export default class AirportMsa {
    areaCode?: string
    icaoCode?: string
    airportIdentifier?: string
    msaCenter?: string
    msaCenterLatitude?: number
    msaCenterLongitude?: number
    magneticTrueIndicator?: string
    multipleCode?: string
    radiusLimit?: number
    sectorBearing1?: number
    sectorAltitude1?: number
    sectorBearing2?: number
    sectorAltitude2?: number
    sectorBearing3?: number
    sectorAltitude3?: number
    sectorBearing4?: number
    sectorAltitude4?: number
    sectorBearing5?: number
    sectorAltitude5?: number

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.airportIdentifier = data.airport_identifier
        this.msaCenter = data.msa_center
        this.msaCenterLatitude = data.msa_center_latitude
        this.msaCenterLongitude = data.msa_center_longitude
        this.magneticTrueIndicator = data.magnetic_true_indicator
        this.multipleCode = data.multiple_code
        this.radiusLimit = data.radius_limit

        // todo: consider making an array?
        this.sectorBearing1 = data.sector_bearing_1
        this.sectorAltitude1 = data.sector_altitude_1
        this.sectorBearing2 = data.sector_bearing_2
        this.sectorAltitude2 = data.sector_altitude_2
        this.sectorBearing3 = data.sector_bearing_3
        this.sectorAltitude3 = data.sector_altitude_3
        this.sectorBearing4 = data.sector_bearing_4
        this.sectorAltitude4 = data.sector_altitude_4
        this.sectorBearing5 = data.sector_bearing_5
        this.sectorAltitude5 = data.sector_altitude_5
    }
}