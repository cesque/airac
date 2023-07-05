export enum WaypointDescriptionCode1 {
    AIRPORT_AS_WAYPOINT = 'A',
    ESSENTIAL_WAYPOINT = 'E',
    OFF_AIRWAY_WAYPOINT = 'F',		
    RUNWAY_AS_WAYPOINT = 'G',		
    HELIPORT_AS_WAYPOINT = 'H',
    NDB_NAVAID_AS_WAYPOINT = 'N',
    PHANTOM_WAYPOINT = 'P',
    NON_ESSENTIAL_WAYPOINT = 'R',
    TRANSITION_ESSENTIAL_WAYPOINT = 'T',
    VHF_NAVAID_AS_WAYPOINT = 'V',	
}

export enum WaypointDescriptionCode2 {
    END_OF_SID_STAR_IAP_ROUTE_TYPE = 'B',
    END_OF_ENROUTE_AIRWAY_OR_TERMINAL_PROCEDURE = 'E',
    UNCHARTED_AIRWAY_INTERSECTION = 'U',
    FLY_OVER_WAYPOINT = 'Y',
}

export enum WaypointDescriptionCode3 {
    UNNAMED_STEPDOWN_FIX_AFTER_FINAL_APPROACH_FIX = 'A',
    UNNAMED_STEPDOWN_FIX_BEFORE_FINAL_APPROACH_FIX = 'B',
    ATC_COMPULSORY_WAYPOINT = 'C',
    OCEANIC_GATEWAY_WAYPOINT = 'G',
    FIRST_LEG_OF_MISSED_APPROACH_PROCEDURE = 'M',
    PATH_POINT_FIX = 'P',
    NAMED_STEPDOWN_FIX = 'S',
}

export enum WaypointDescriptionCode4 {
    INITIAL_APPROACH_FIX = 'A',
    INTERMEDIATE_APPROACH_FIX = 'B',
    INITIAL_APPROACH_FIX_WITH_HOLDING = 'C',
    INITIAL_APPROACH_WITH_FINAL_APPROACH_COURSE_FIX = 'D',
    FINAL_END_POINT_FIX = 'E',
    PUBLISHED_FINAL_APPROACH_FIX_OR_DATABASE_FINAL_APPROACH_FIX = 'F',
    HOLDING_FIX = 'H',
    FINAL_APPROACH_COURSE_FIX = 'I',
    PUBLISHED_MISSED_APPROACH_POINT_FIX = 'M',
}

export class WaypointDescriptionCode {
    code1: WaypointDescriptionCode1
    code2: WaypointDescriptionCode2
    code3: WaypointDescriptionCode3
    code4: WaypointDescriptionCode4

    constructor(data: string) {
        this.code1 = data[0] as WaypointDescriptionCode1
        this.code2 = data[1] as WaypointDescriptionCode2
        this.code3 = data[2] as WaypointDescriptionCode3
        this.code4 = data[3] as WaypointDescriptionCode4
    }
}

export enum EnrouteAirwayRouteType {
    CONTROL = 'C',
    DIRECT_ROUTE = 'D',
    HELICOPTER_ROUTE = 'H',
    OFFICIAL_DESIGNATED_AIRWAYS_EXPECT_RNAV_AIRWAYS = 'O',
    RNAV_AIRWAYS = 'R',
    UNDESIGNATED_ATS_ROUTE = 'S',
}

export enum Level {
    ALL_ALTITUDES = 'B',
    HIGH_LEVEL_AIRWAYS = 'H',
    LOW_LEVEL_AIRWAYS = 'L',
}

export enum DIRECTIONAL_RESTRICTION {
    FORWARD = 'F',
    BACKWARD = 'B',
    NO_RESTRICTION = ' ',
}

export default class EnrouteAirway {
    areaCode?: string
    routeIdentifier?: string
    sequenceNumber?: number
    icaoCode?: string
    fixIdentifier?: string
    fixLatitude?: number
    fixLongitude?: number
    waypointDescriptionCode?: WaypointDescriptionCode
    routeType?: EnrouteAirwayRouteType
    flightLevel?: Level
    directionalRestriction?: string
    cruisingTableIdentifier?: string
    minimumAltitude1?: number
    minimumAltitude2?: number
    maximumAltitude?: number
    outboundCourse?: number
    inboundCourse?: number
    inboundDistance?: number

    get IsStandardICAOCruiseLevels(): boolean {
        return this.cruisingTableIdentifier == 'AA'
    }

    constructor(data: any) {
        this.areaCode = data.area_code
        this.routeIdentifier = data.route_identifier
        this.sequenceNumber = data.seqno
        this.icaoCode = data.icao_code
        this.fixIdentifier = data.fix_identifier
        this.fixLatitude = data.fix_latitude
        this.fixLongitude = data.fix_longitude
        this.waypointDescriptionCode = new WaypointDescriptionCode(data.waypoint_description_code)
        this.routeType = data.route_type as EnrouteAirwayRouteType
        this.flightLevel = data.flightlevel as Level
        this.directionalRestriction = data.directional_restriction
        this.cruisingTableIdentifier = data.crusing_table_identifier
        this.minimumAltitude1 = data.minimum_altitude1
        this.minimumAltitude2 = data.minimum_altitude2
        this.maximumAltitude = data.maximum_altitude
        this.outboundCourse = data.outbound_course
        this.inboundCourse = data.inbound_course
        this.inboundDistance = data.inbound_distance
    }
}