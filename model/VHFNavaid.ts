export enum VHFNavaidFacility {
    // NONE = ' ', // not in docs :(

    DME = 'D',
    TACAN = 'T',
    MIL_TACAN = 'M',
    ILS_DME = 'I',
    ILS_TACAN = '_I',
    MLS_DME_N = 'N',
    MLS_DME_P = 'P',
}

export enum VHFNavaidRangePower {
    TERMINAL = 'T',
    LOW_ALTITUDE = 'L',
    HIGH_ALTITUDE = 'H',
    UNDEFINED = 'U',
    ILS_TACAN = 'C',
}

export enum VHFNavaidAdditionalInformation {
    BIAS_ILS_DME_OR_ILS_TACAN = 'D',
    AUTOMATIC_TRANSCRIBED_WEATHER_BROADCAST = 'A',
    SCHEDULED_WEATHER_BROADCAST = 'B',
    NO_VOICE_ON_FREQUENCY = 'W',
    VOICE_ON_FREQUENCY = ' ',
}

export enum VHFNavaidCollocation {
    COLLOCATED_NAVAID = ' ',
    NON_COLLOCATED_NAVAID = 'N',
}

export class NavaidClass {
    isVor: boolean
    facility: VHFNavaidFacility
    rangePower: VHFNavaidRangePower
    additionalInformation: VHFNavaidAdditionalInformation
    collocation: VHFNavaidCollocation

    constructor(data: string) {
        let elements = data.padEnd(5).split('')
        this.isVor = elements[0] == 'V'

        this.facility = elements[1] as VHFNavaidFacility
        this.rangePower = elements[2] as VHFNavaidRangePower
        this.additionalInformation = elements[3] as VHFNavaidAdditionalInformation
        this.collocation = elements[4] as VHFNavaidCollocation
    }
}

export default class VhfNavaid {
    areaCode?: string
    airportIdentifier?: string
    icaoCode: string
    vorIdentifier: string
    vorName?: string
    vorFrequency?: number
    navaidClass?: NavaidClass
    vorLatitude?: number
    vorLongitude?: number
    dmeIdent?: string
    dmeLatitude?: number
    dmeLongitude?: number
    dmeElevation?: number
    ilsDmeBias?: number
    range?: Number
    stationDeclination?: number

    constructor(data: any) {
        this.areaCode = data.area_code
        this.airportIdentifier = data.airport_identifier
        this.icaoCode = data.icaoCode
        this.vorIdentifier = data.vor_identifier
        this.vorName = data.vor_name
        this.vorFrequency = data.vor_frequency
        this.navaidClass = new NavaidClass(data.navaid_class)
        this.vorLatitude = data.vor_latitude
        this.vorLongitude = data.vor_longitude
        this.dmeIdent = data.dme_ident
        this.dmeLatitude = data.dme_latitude
        this.dmeLongitude = data.dme_longitude
        this.ilsDmeBias = data.ilsdme_bias
        this.range = data.range
        this.stationDeclination = data.station_declination
    }
}