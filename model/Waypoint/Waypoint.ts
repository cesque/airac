export abstract class WaypointFix {}
export abstract class WaypointType {}

export enum WaypointProcedure {
    SID = 'D',
    STAR = 'E',
    APPROACH = 'F',
    MULTIPLE = 'Z',
}

export abstract class WaypointInformation {
    type!: WaypointType
    fix!: WaypointFix
    procedure: WaypointProcedure

    constructor(data: string) {
        this.procedure = data[2] as WaypointProcedure
    }
}

export default abstract class Waypoint {
    areaCode?: string
    icaoCode: string
    waypointIdentifier: string
    waypointName?: string
    waypointType?: WaypointInformation
    waypointLatitude?: number
    waypointLongitude?: number

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.waypointIdentifier = data.waypoint_identifier
        this.waypointName = data.waypoint_name
        this.waypointLatitude = data.waypoint_latitude
        this.waypointLongitude = data.waypoint_longitude
    }
}