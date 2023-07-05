import TerminalProcedure from './TerminalProcedure.js'

export enum StarRouteType {
    STAR_ENROUTE_TRANSITION = '1',
    STAR_OR_STAR_COMMON_ROUTE = '2',
    STAR_RUNWAY_TRANSITION = '3',
    RNAV_STAR_ENROUTE_TRANSITION = '4',
    RNAV_STAR_OR_STAR_COMMON_ROUTE = '5',
    RNAV_STAR_RUNWAY_TRANSITION = '6',
    PROFILE_DESCENT_ENROUTE_TRANSITION = '7',
    PROFILE_DESCENT_COMMON_ROUTE = '8',
    PROFILE_DESCENT_RUNWAY_TRANSITION = '9',
    FMS_STAR_ENROUTE_TRANSITION = 'F',
    FMS_STAR_OR_STAR_COMMON_ROUTE = 'M',
    FMS_STAR_RUNWAY_TRANSITION = 'S',
}

export default class Star extends TerminalProcedure {
    routeType?: StarRouteType

    constructor(data: any) {
        super(data)
        this.routeType = data.route_type as StarRouteType
    }
}