import { BoundaryVia } from "./ControlledAirspace.js"
import { Level } from "./EnrouteAirway.js"

export enum RestrictiveAirspaceType {
    ALERT = 'A',
    CAUTION = 'C',
    DANGER = 'D',
    MILITARY_OPERATIONS_AREA = 'M',
    PROHIBITED = 'P',
    RESTRICTED = 'R',
    TRAINING = 'T',
    WARNING = 'W',
    UNKNOWN = 'U',
}

export default class RestrictiveAirspace {
    areaCode?: string
    icaoCode?: string
    restrictiveAirspaceDesignation?: string
    restrictiveAirspaceName?: string
    restrictiveType?: RestrictiveAirspaceType
    multipleCode?: string
    sequenceNumber?: number
    boundaryVia?: BoundaryVia
    flightLevel?: Level
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
        this.restrictiveAirspaceDesignation = data.restrictive_airspace_designation
        this.restrictiveAirspaceName = data.restrictive_airspace_name
        this.restrictiveType = data.restrictive_type as RestrictiveAirspaceType
        this.multipleCode = data.multiple_code
        this.sequenceNumber = data.seqno
        this.boundaryVia = data.boundary_via ? new BoundaryVia(data.boundary_via) : undefined
        this.flightLevel = data.flightlevel as Level
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