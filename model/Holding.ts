export enum TurnDirection {
    LEFT = 'L',
    RIGHT = 'R',
}

export default class Holding {
    // [area_code] TEXT(3),
    areaCode?: string
    // [region_code] TEXT(4),
    regionCode?: string
    // [icao_code] TEXT(2),
    icaoCode?: string
    // [fix_identifier] TEXT(5),
    fixIdentifier?: string
    // [holding_name] TEXT(25),
    holdingName?: string
    // [fix_latitude] REAL(9),
    fixLatitude?: number
    // [fix_longitude] REAL(10),
    fixLongitude?: number
    // [duplicate_identifier] INT(2),
    duplicateIdentifier?: number
    // [inbound_holding_course]REAL(5),
    inboundHoldingCourse?: number
    // [turn_direction] TEXT(1),
    turnDirection?: TurnDirection
    // [leg_length] REAL(3),
    legLength?: number
    // [leg_time] REAL(2),
    legTime?: number
    // [minimum_altitude] INT(5),
    minimumAltitude?: number
    // [maximum_altitude] INT(5),
    maximumAltitude?: number
    // [holding_speed] INT(3)

    constructor(data: any) {
        this.areaCode = data.area_code
        this.regionCode = data.region_code
        this.icaoCode = data.icao_code
        this.fixIdentifier = data.fix_identifier
        this.holdingName = data.holding_name
        this.fixLatitude = data.fix_latitude
        this.fixLongitude = data.fix_longitude
        this.duplicateIdentifier = data.duplicate_identifier
        this.inboundHoldingCourse = data.inbound_holding_course
        this.turnDirection = data.turn_direction as TurnDirection
        this.legLength = data.leg_length
        this.legTime = data.leg_time
        this.minimumAltitude = data.minimum_altitude
        this.maximumAltitude = data.maximum_altitude
    }
}