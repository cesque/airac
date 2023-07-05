export enum NdbFacility {
    NDB = 'H',
    SABH = 'S',
    MARINE_BEACON = 'M',
}

export enum NdbMarker {
    // NONE = ' ', // not in docs :(

    INNER = 'I',
    MIDDLE = 'M',
    OUTSIDE = 'O',
    BACK = 'C',
}

export enum NdbRadarPower {
    OVER_200W = 'H',
    FROM_50W_TO_200W = ' ',
    FROM_25W_TO_50W = 'M',
    BELOW_25W = 'L',
}

export enum NdbAdditionalInformation {
    AUTOMATIC_TRANSCRIBED_WEATHER_BROADCAST = 'A',
    SCHEDULED_WEATHER_BROADCAST = 'B',
    NO_VOICE_ON_FREQUENCY = 'W',
    VOICE_ON_FREQUENCY = ' ',
}

export enum NdbCollocation {
    // COLLOCATED_NAVAID = ' ', // not in docs :(
    BFO_OPERATION = 'B',
}

export class NdbClass {
    facility: NdbFacility
    marker: NdbMarker
    radarPower: NdbRadarPower
    additionalInfo: NdbAdditionalInformation
    collocation: NdbCollocation

    constructor(data: string) {
        let elements = data.padEnd(5).split('')

        this.facility = elements[0] as NdbFacility
        this.marker = elements[1] as NdbMarker
        this.radarPower = elements[2] as NdbRadarPower
        this.additionalInfo = elements[3] as NdbAdditionalInformation
        this.collocation = elements[4] as NdbCollocation
    }
}

export default class NdbNavaid {
    areaCode?: string
    icaoCode: string
    ndbIdentifier: string
    ndbName?: string
    ndbFrequency?: number
    navaidClass?: NdbClass
    ndbLatitude?: number
    ndbLongitude?: number

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.ndbIdentifier = data.ndb_identifier
        this.ndbName = data.ndb_name
        this.ndbFrequency = data.ndb_frequency
        this.navaidClass = new NdbClass(data.navaid_class)
        this.ndbLatitude = data.ndb_latitude
        this.ndbLongitude = data.ndb_longitude  
    }
}