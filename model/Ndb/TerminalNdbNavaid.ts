import NdbNavaid from './NdbNavaid.js'

export default class TerminalNdbNavaid extends NdbNavaid {
    airportIdentifier: string

    constructor(data: any) {
        super(data)
        this.airportIdentifier = data.airport_identifier
    }
}