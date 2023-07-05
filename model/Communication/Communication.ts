export enum CommicationFieldIdentifier {	
    ACC = 'ACC',
    ACP = 'ACP',
    AIR = 'AIR',
    APP = 'APP',
    ARR = 'ARR',
    ASO = 'ASO',
    ATI = 'ATI',
    AWI = 'AWI',
    AWO = 'AWO',
    AWS = 'AWS',
    CLD = 'CLD',
    CPT = 'CPT',
    CTA = 'CTA',
    CTL = 'CTL',
    DEP = 'DEP',
    DIR = 'DIR',
    EFS = 'EFS',
    EMR = 'EMR',
    FSS = 'FSS',
    GCO = 'GCO',
    GND = 'GND',
    GET = 'GET',
    HEL = 'HEL',
    INF = 'INF',
    MIL = 'MIL',
    MUL = 'MUL',
    OPS = 'OPS',
    PAL = 'PAL',
    RDO = 'RDO',
    RDR = 'RDR',
    RFS = 'RFS',
    RMP = 'RMP',
    RSA = 'RSA',
    TCA = 'TCA',
    TMA = 'TMA',
    TML = 'TML',
    TRS = 'TRS',
    TWE = 'TWE',
    TWR = 'TWR',
    UAC = 'UAC',
    UNI = 'UNI',
    VOL = 'VOL',
}

export type CommunicationType = {
    field: CommicationFieldIdentifier,
    description: string,
    communication: {
        airport: boolean,
        enroute: boolean,
    }
}

export const communicationTypes: CommunicationType[] = [
    {
        field: CommicationFieldIdentifier.ACC,
        description: 'Area Control Center',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.ACP,
        description: 'Airlift Command Post',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.AIR,
        description: 'Air to Air',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.APP,
        description: 'Approach Control',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.ARR,
        description: 'Arrival Control',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.ASO,
        description: 'Automatic Surface Oserving System (ASOS)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.ATI,
        description: 'Automatic Terminal Information Services (ATIS)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.AWI,
        description: 'Airport Weather Information Broadcast (AWIB)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.AWO,
        description: 'Automatic Weather Observing Service (AWOS)',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.AWS,
        description: 'Aerodrome Weather Information Service (AWIS)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.CLD,
        description: 'Clearance Delivery',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.CPT,
        description: 'Clearance, Pre-Taxi',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.CTA,
        description: 'Control Area (Terminal)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.CTL,
        description: 'Control',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.DEP,
        description: 'Departure Control',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.DIR,
        description: 'Director (Approach Control Radar)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.EFS,
        description: 'Enroute Flight Advisory Service (EFAS)',
        communication: {
            airport: false,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.EMR,
        description: 'Emergency',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.FSS,
        description: 'Flight Service Station',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.GCO,
        description: 'Ground Comm Outlet',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.GND,
        description: 'Ground Control',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.GET,
        description: 'Gate Control',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.HEL,
        description: 'Helicopter Frequency',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.INF,
        description: 'Information',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.MIL,
        description: 'Military Frequency',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.MUL,
        description: 'Multicom',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.OPS,
        description: 'Operations',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.PAL,
        description: 'Pilot Activated Lighting',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.RDO,
        description: 'Radio',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.RDR,
        description: 'Radar',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.RFS,
        description: 'Remote Flight Service Station (RFSS)',
        communication: {
            airport: true,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.RMP,
        description: 'Ramp/Taxi Control',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.RSA,
        description: 'Airport Radar Service Area (ARSA)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.TCA,
        description: 'Terminal Control Area (TCA)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.TMA,
        description: 'Terminal Control Area (TMA)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.TML,
        description: 'Terminal',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.TRS,
        description: 'Terminal Radar Service Area (TRSA)',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.TWE,
        description: 'Transcriber Weather Broadcast (TWEB)',
        communication: {
            airport: false,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.TWR,
        description: 'Tower, Air Traffic Control',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.UAC,
        description: 'Upper Area Control',
        communication: {
            airport: false,
            enroute: true,
        },
    },
    
    {
        field: CommicationFieldIdentifier.UNI,
        description: 'Unicom',
        communication: {
            airport: true,
            enroute: false,
        },
    },
    
    {
        field: CommicationFieldIdentifier.VOL,
        description: 'Volmet',
        communication: {
            airport: false,
            enroute: true,
        },
    },    
]

export enum FrequencyUnit {
    HIGH_FREQUENCY = 'H',
    VERY_HIGH_FREQUENCY = 'V',
    ULTRA_HIGH_FREQUENCY = 'U',
    COMMUNICATION_CHANNEL_FOR_8_33KHZ_SPACING = 'C',
}

export enum ServiceIndicationService {
    AIRPORT_ADVISORY_SERVICE = 'A',
    COMMUNITY_AERODROME_RADIO_STATION = 'C',
    DEPARTURE_SERVICE = 'D',
    FLIGHT_INFORMATION_SERVICE = 'F',
    INITIAL_CONTACT = 'I',
    ARRIVAL_SERVICE = 'L',
    PRE_DEPARTURE_CLEARANCE = 'P',
    AERODROME_FLIGHT_INFORMATION_SERVICE = 'S',
    TERMINAL_AREA_CONTROL = 'T',
}

export enum ServiceIndicationFrequency {
    AERODROME_TRAFFIC_FREQUENCY = 'A',
    COMMON_TRAFFIC_ADVISORY_FREQUENCY = 'C',
    MANDATORY_FREQUENCY = 'M',
    AIR_AIR = 'R',
    SECONDARY_FREQUENCY = 'S',
}

export enum ServiceIndicationOther {
        AIR_GROUND = 'A',
        VHF_DIRECTION_FINDING_SERVICE = 'D',
        REMOTE_COMMUNICATIONS_AIR_TO_GROUND = 'G',
        LANGUAGE_OTHER_THAN_ENGLISH = 'L',
        MILITARY_USE_FREQUENCY = 'M',
        PILOT_CONTROLLED_LIGHT = 'P',
        REMOTE_COMMUNICATIONS_OUTLET = 'R',
}

export class ServiceIndication {
    service: ServiceIndicationService
    frequency: ServiceIndicationFrequency
    other: ServiceIndicationOther

    constructor(data: string) {
        this.service = data[0] as ServiceIndicationService
        this.frequency = data[1] as ServiceIndicationFrequency
        this.other = data[2] as ServiceIndicationOther
    }
}

export default class Communication {
    areaCode?: string
    communicationType?: CommunicationType
    communicationFrequency?: number
    frequencyUnits?: FrequencyUnit
    serviceIndicator?: ServiceIndication
    callsign?: string
    latitude?: number
    longitude?: number

    constructor(data: any) {
        this.areaCode = data.area_code
        this.communicationType = communicationTypes.find(x => x.field == data.communication_type)
        this.communicationFrequency = data.communication_frequency
        this.frequencyUnits = data.frequency_units as FrequencyUnit
        this.serviceIndicator = data.service_indicator && new ServiceIndication(data.service_indicator)
        this.callsign = data.callsign
        this.latitude = data.latitude
        this.longitude = data.longitude
    }
}