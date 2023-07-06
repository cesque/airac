export default class Gate {
    areaCode?: string
    airportIdentifier?: string
    icaoCode?: string
    gateIdentifier?: string
    gateLatitude?: number
    gateLongitude?: number
    name?: string

    constructor(data: any) {
        this.areaCode = data.area_code
        this.airportIdentifier = data.airport_identifier
        this.icaoCode = data.icao_code
        this.gateIdentifier = data.gate_identifier
        this.gateLatitude = data.gate_latitude
        this.gateLongitude = data.gate_longitude
        this.name = data.name
    }
}