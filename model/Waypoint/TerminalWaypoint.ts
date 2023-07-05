import Waypoint, { WaypointInformation } from './Waypoint.js';

export enum TerminalWaypointType {
    ARC_CENTER_FIX_WAYPOINT = 'A',
    COMBINED_NAMED_INTERSECTION_AND_RNAV = 'C',
    UNNAMED_CHARTED_INTERSECTION = 'I',
    MIDDLE_MARKER_AS_WAYPOINT = 'M',
    TERMINAL_NDB_NAVAID_AS_WAYPOINT = 'N',
    OUTER_MARKER_AS_WAYPOINT = 'O',	
    NAMED_INTERSECTION = 'R',
    VFR_WAYPOINT = 'V',
    RNAV_WAYPOINT = 'W',
}

export enum TerminalWaypointFix {
    FINAL_APPROACH_FIX = 'A',
    INITIAL_AND_FINAL_APPROACH_FIX = 'B',
    FINAL_APPROACH_COURSE_FIX = 'C',
    INTERMEDIATE_APPROACH_FIX = 'D',
    INITIAL_APPROACH_FIX = 'I',	
    FINAL_APPROACH_COURSE_FIX_AT_INITIAL_APPROACH_FIX = 'K',
    FINAL_APPROACH_COURSE_FIX_AT_INTERMEDIATE_APPROACH_FIX = 'L',
    MISSED_APPROACH_FIX = 'M',
    INITIAL_APPROACH_FIX_AND_MISSED_APPROACH_FIX = 'N',
    UNNAMED_STEPDOWN_FIX = 'P',
    NAMED_STEPDOWN_FIX = 'S',
    FIR_UIR_OR_CONTROLLED_AIRSPACE_INTERSECTION = 'U',
}

export class TerminalWaypointInformation extends WaypointInformation {
    type: TerminalWaypointType
    fix: TerminalWaypointFix

    constructor(data: any) {
        super(data)

        this.type = data[0] as TerminalWaypointType
        this.fix = data[1] as TerminalWaypointFix
    }
}

export default class TerminalWaypoint extends Waypoint {
    waypointType: TerminalWaypointInformation

    constructor(data: any) {
        super(data)

        this.waypointType = new TerminalWaypointInformation(data.waypoint_type)
    }
}