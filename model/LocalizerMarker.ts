export enum MarkerType {
    INNER = 'I',
    MIDDLE = 'M',
    OUTER = 'O',
    BACK = 'B',
}

export default class LocalizerMarker {
    areaCode?: string
    icaoCode?: string
    airportIdentifier: string
    runwayIdentifier: string
    llzIdentifier: string
    markerIdentifier: string
    markerType?: string
    locatorAtMarker?: boolean
    markerLatitude?: number
    markerLongitude?: number

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.airportIdentifier = data.airport_identifier
        this.runwayIdentifier = data.runway_identifier
        this.llzIdentifier = data.llz_identifier
        this.markerIdentifier = data.marker_identifier
        this.markerType = data.marker_type[1] as MarkerType
        this.locatorAtMarker = data.marker_type[0] == 'L'
        this.markerLatitude = data.marker_latitude
        this.markerLongitude = data.marker_longitude
    }
}