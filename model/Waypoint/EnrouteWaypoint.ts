import Waypoint, { WaypointInformation } from './Waypoint.js';

export enum EnrouteWaypointType {
    COMBINED_NAMED_INTERSECTION_AND_RNAV = 'C',
    UNNAMED_CHARTED_INTERSECTION = 'I',
    NDB_NAVAID_AS_WAYPOINT = 'N',
    NAMED_INTERSECTION = 'R',
    UNCHARTED_AIRWAY_INTERSECTION = 'U',	
    VFR_WAYPOINT = 'V',
    RNAV_WAYPOINT = 'W',	
}

export enum EnrouteWaypointFix {
    FINAL_APPROACH_FIX = 'A',
    INITIAL_AND_FINAL_APPROACH_FIX = 'B',
    FINAL_APPROACH_COURSE_FIX = 'C',
    INTERMEDIATE_APPROACH_FIX = 'D',
    OFFROUTE_INTERSECTION_IN_THE_FAA_NATIONAL_REF_SYSTEM = 'E',
    OFFROUTE_INTERSECTION = 'F',
    INITIAL_APPROACH_FIX = 'I',	
    FINAL_APPROACH_COURSE_FIX_AT_INITIAL_APPROACH_FIX = 'K',
    FINAL_APPROACH_COURSE_FIX_AT_INTERMEDIATE_APPROACH_FIX = 'L',
    MISSED_APPROACH_FIX = 'M',
    INITIAL_APPROACH_FIX_AND_MISSED_APPROACH_FIX = 'N',
    OCEANIC_ENTRY_EXIT_WAYPOINT = 'O',
    PITCH_AND_CATCH_POINT_IN_THE_FAA_HIGH_ALTITUDE_REDESIGN = 'P',
    AACAA_AND_SUA_WAYPOINTS_IN_THE_FAA_HIGH_ALTITUDE_REDESIGN = 'S',
    FIR_UIR_OR_CONTROLLED_AIRSPACE_INTERSECTION = 'U',
    LATITUDE_LONGITUDE_INTERSECTION_FULL_DEGREE_OF_LATITUDE = 'V',
    LATITUDE_LONGITUDE_INTERSECTION_HALF_DEGREE_LATITUDE = 'W',
}


export class EnrouteWaypointInformation extends WaypointInformation {
    type: EnrouteWaypointType
    fix: EnrouteWaypointFix

    constructor(data: any) {
        super(data)

        this.type = data[0] as EnrouteWaypointType
        this.fix = data[1] as EnrouteWaypointFix
    }
}

export enum WaypointAltitude {
    HIGH_AND_LOW = 'B',
    HIGH_ONLY = 'H',
    LOW_ONLY = 'L',
    TERMINAL_ONLY = ' ',
}

export class WaypointUsage {
    isRNAV: boolean
    altitude: WaypointAltitude

    constructor(data: string) {
        let parts: string[] = data?.split('') ?? [' ', ' ']
        this.isRNAV = parts[0] == 'R'
        this.altitude = parts[1] as WaypointAltitude
    }
}

export default class EnrouteWaypoint extends Waypoint {
    waypointType: EnrouteWaypointInformation
    waypointUsage?: WaypointUsage

    constructor(data: any) {
        super(data)

        this.waypointType = new EnrouteWaypointInformation(data.waypoint_type)
        this.waypointUsage = new WaypointUsage(data.waypoint_usage)
    }
}