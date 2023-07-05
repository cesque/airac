import Communication from './Communication.js'

export default class AirportCommunication extends Communication {
    icaoCode?: string
    airportIdentifier?: string

    constructor(data: any) {
        super(data)

        this.icaoCode = data.icao_code
        this.airportIdentifier = data.airport_identifier

    }
}