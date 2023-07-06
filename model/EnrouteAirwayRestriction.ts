export enum RestrictionType {
    ALTITUDE_EXCLUSION = 'AE',
    CRUISING_TABLE_REPLACEMENT = 'TC',
    SEASONAL_RESTRICTION = 'SC',
    NOTE_RESTRICTION = 'NR'
}

export enum UnitOfAltitude {
    HUNDREDS_OF_FEET = 'F',
    METRIC_FLIGHT_LEVEL = 'K',
    FEET_FLIGHT_LEVEL = 'L',
    TENS_OF_METERS = 'M',
}

export enum BlockIndicator {
    ALTITUDE_BLOCK = 'B',
    INDIVIDUAL_ALTITUDES_BLOCK = 'I',
}

export default class EnrouteAirwayRestriction {
    areaCode?: string
    routeIdentifier?: string
    restrictionIdentifier?: number
    restrictionType?: RestrictionType
    startWaypointIdentifier?: string
    startWaypointLatitude?: number
    startWaypointLongitude?: number
    endWaypointIdentifier?: string
    endWaypointLatitude?: number
    endWaypointLongitude?: number
    startDate?: string
    endDate?: string
    unitsOfAltitude?: UnitOfAltitude
    restrictionAltitude1?: number
    blockIndicator1?: BlockIndicator
    restrictionAltitude2?: number
    blockIndicator2?: BlockIndicator
    restrictionAltitude3?: number
    blockIndicator3?: BlockIndicator
    restrictionAltitude4?: number
    blockIndicator4?: BlockIndicator
    restrictionAltitude5?: number
    blockIndicator5?: BlockIndicator
    restrictionAltitude6?: number
    blockIndicator6?: BlockIndicator
    restrictionAltitude7?: number
    blockIndicator7?: BlockIndicator

    constructor(data: any) {
        this.areaCode = data.area_code
        this.routeIdentifier = data.route_identifier
        this.restrictionIdentifier = data.restriction_identifier
        this.restrictionType = data.restriction_type as RestrictionType
        this.startWaypointIdentifier = data.start_waypoint_identifier
        this.startWaypointLatitude = data.start_waypoint_latitude
        this.startWaypointLongitude = data.start_waypoint_longitude
        this.endWaypointIdentifier = data.end_waypoint_identifier
        this.endWaypointLatitude = data.end_waypoint_latitude
        this.endWaypointLongitude = data.end_waypoint_longitude
        this.startDate = data.start_date
        this.endDate = data.end_date
        this.unitsOfAltitude = data.units_of_altitude as UnitOfAltitude

        // todo: consider making an array?
        this.restrictionAltitude1 = data.restriction_altitude1
        this.blockIndicator1 = data.block_indicator1 as BlockIndicator
        this.restrictionAltitude2 = data.restriction_altitude2
        this.blockIndicator2 = data.block_indicator2 as BlockIndicator
        this.restrictionAltitude3 = data.restriction_altitude3
        this.blockIndicator3 = data.block_indicator3 as BlockIndicator
        this.restrictionAltitude4 = data.restriction_altitude4
        this.blockIndicator4 = data.block_indicator4 as BlockIndicator
        this.restrictionAltitude5 = data.restriction_altitude5
        this.blockIndicator5 = data.block_indicator5 as BlockIndicator
        this.restrictionAltitude6 = data.restriction_altitude6
        this.blockIndicator6 = data.block_indicator6 as BlockIndicator
        this.restrictionAltitude7 = data.restriction_altitude7
        this.blockIndicator7 = data.block_indicator7 as BlockIndicator

        if(this.startDate || this.endDate) {
            // todo: parse dates as actual dates (when i find one with data)
            console.log({
                startDate: this.startDate,
                endDate: this.endDate,
            })
        }
    }
}