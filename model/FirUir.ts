import { FirUirAddress } from './Communication/EnrouteCommunication.js'
import { BoundaryVia } from './ControlledAirspace.js'

export enum ReportingUnitsSpeed {
    NOT_SPECIFIED = 0,
    TAS_IN_KNOTS = 1,
    TAS_IN_MACH = 2,
    TAS_IN_KM_PER_HOUR = 3,
}

export enum ReportingUnitsAltitude {
    NOT_SPECIFIED = 0,
    ALTITUDE_IN_FLIGHT_LEVEL = 1,
    ALTITUDE_IN_METERS = 2,
    ALTITUDE_IN_FEET = 3,
}

export default class FirUir {
    areaCode?: string
    firUirIdentifier?: string
    firUirAddress?: FirUirAddress
    firUirName?: string
    firUirIndicator?: string
    sequenceNumber?: number
    boundaryVia?: BoundaryVia
    adjacentFirIdentifier?: string
    adjacentUirIdentifier?: string
    reportingUnitsSpeed?: ReportingUnitsSpeed
    reportingUnitsAltitude?: ReportingUnitsAltitude
    firUirLatitude?: number
    firUirLongitude?: number
    arcOriginLatitude?: number
    arcOriginLongitude?: number
    arcDistance?: number
    arcBearing?: number
    firUpperLimit?: string
    uirLowerLimit?: string
    uirUpperLimit?: string
    cruiseTableIdenfier?: string

    constructor(data: any) {
        this.areaCode = data.area_code
        this.firUirIdentifier = data.fir_uir_identifier
        this.firUirAddress = data.fir_uir_address as FirUirAddress
        this.firUirName = data.fir_uir_name
        this.firUirIndicator = data.fir_uir_indicator
        this.sequenceNumber = data.seqno
        this.boundaryVia = data.boundary_via ? new BoundaryVia(data.boundary_via) : undefined
        this.adjacentFirIdentifier = data.adjacent_fir_identifier
        this.adjacentUirIdentifier = data.adjacent_uir_identifier
        this.reportingUnitsSpeed = data.reporting_units_speed as ReportingUnitsSpeed
        this.reportingUnitsAltitude = data.reporting_units_altitude as ReportingUnitsAltitude
        this.firUirLatitude = data.fir_uir_latitude
        this.firUirLongitude = data.fir_uir_longitude
        this.arcOriginLatitude = data.arc_origin_latitude
        this.arcOriginLongitude = data.arc_origin_longitude
        this.arcDistance = data.arc_distance
        this.arcBearing = data.arc_bearing
        this.firUpperLimit = data.fir_upper_limit
        this.uirLowerLimit = data.uir_lower_limit
        this.uirUpperLimit = data.uir_upper_limit
        this.cruiseTableIdenfier = data.cruise_table_idenfier
    }

}