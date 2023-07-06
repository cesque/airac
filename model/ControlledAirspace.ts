import { Level } from "./EnrouteAirway.js"

export enum AirspaceType {
    // A	Class C Airspace (USA)
    CLASS_C = 'A',
    // C	Control Area, ICAO Designation (CTA)
    CONTROL_AREA_ICAO_DESIGNATION_C = 'C',
    // K	Control Area, ICAO Designation (CTA)
    CONTROL_AREA_ICAO_DESIGNATION_K = 'K',
    // M	Terminal Control Area, ICAO Designation (TMA or TCA)
    TERMINAL_CONTROL_AREA_ICAO_DESIGNATION = 'M',
    // Q	Military Control Zone (MCTR)
    MILITARY_CONTROL_ZONE = 'Q',
    // R	Radar Zone or Radar Area (USA)
    RADAR_ZONE_OR_RADAR_AREA = 'R',
    // T	Class B Airspace (USA)
    CLASS_B = 'T',
    // W	Terminal Control Area (TCA)
    TERMINAL_CONTROL_AREA = 'W',
    // X	Terminal Area (TMA)
    TERMINAL_AREA = 'X',
    // Y	Terminal Radar Service Area (TRSA)
    TERMINAL_RADAR_SERVICE_AREA = 'Y',
    // Z	Class D Airspace, ICAO Designation (CTR)
    CLASS_D = 'Z',
}

export enum TimeCode {
    ACTIVE_CONTINUOUSLY_INCLUDING_HOLIDAYS = 'C',
    ACTIVE_CONTINUOUSLY_EXCLUDING_HOLIDAYS = 'H',
    ACTIVE_NON_CONTINUOUSLY_REFER_TO_CONTINUATION_RECORDS = 'N',
    ACTIVE_TIMES_ANNOUNCED_BY_NOTAMS = ' ',
}

export enum BoundaryViaPath {
    CIRCLE = 'C',
    GREAT_CIRCLE = 'G',
    RHUMB_LINE = 'H',
    COUNTER_CLOCKWISE_ARC = 'L',
    CLOCKWISE_ARC = 'R',
}

export class BoundaryVia {
    path: BoundaryViaPath
    isEndOfDescriptionReturnToOrigin: boolean

    constructor(data: string) {
        this.path = data[0] as BoundaryViaPath
        this.isEndOfDescriptionReturnToOrigin = data[1] == 'E'
    }
}

export default class ControlledAirspace {
    areaCode?: string
    icaoCode?: string
    airspaceCenter?: string
    controlledAirspaceName?: string
    airspaceType?: AirspaceType
    airspaceClassification?: string
    multipleCode?: string
    timeCode?: TimeCode
    sequenceNumber?: number
    flightLevel?: Level
    boundaryVia?: BoundaryVia
    latitude?: number
    longitude?: number
    arcOriginLatitude?: number
    arcOriginLongitude?: number
    arcDistance?: number
    arcBearing?: number
    unitIndicatorLowerLimit?: string
    lowerLimit?: string
    unitIndicatorUpperLimit?: string
    upperLimit?: string

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.airspaceCenter = data.airspace_center
        this.controlledAirspaceName = data.controlled_airspace_name
        this.airspaceType = data.airspace_type as AirspaceType
        this.airspaceClassification = data.airspace_classification
        this.multipleCode = data.multiple_code
        this.timeCode = data.time_code as TimeCode
        this.sequenceNumber = data.seqno
        this.flightLevel = data.flightlevel as Level
        this.boundaryVia = data.boundary_via ? new BoundaryVia(data.boundary_via) : undefined
        this.latitude = data.latitude
        this.longitude = data.longitude
        this.arcOriginLatitude = data.arc_origin_latitude
        this.arcOriginLongitude = data.arc_origin_longitude
        this.arcDistance = data.arc_distance
        this.arcBearing = data.arc_bearing
        this.unitIndicatorLowerLimit = data.unit_indicator_lower_limit
        this.lowerLimit = data.lower_limit
        this.unitIndicatorUpperLimit = data.unit_indicator_upper_limit
        this.upperLimit = data.upper_limit
    }
}