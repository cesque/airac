import TerminalProcedure from './TerminalProcedure.js'

export enum SidRouteType {
    ENGINE_OUT_SID = '0',
    SID_RUNWAY_TRANSITION = '1',
    SID_OR_SID_COMMON_ROUTE = '2',
    SID_ENROUTE_TRANSITION = '3',
    RNAV_SID_RUNWAY_TRANSITION = '4',
    RNAV_SID_OR_SID_COMMON_ROUTE = '5',
    RNA_SID_ENROUTE_TRANSITION = '6',
    FMS_SID_RUNWAY_TRANSITION = 'F',
    FMS_SID_OR_SID_COMMON_ROUTE = 'M',
    FMS_SID_ENROUTE_TRANSITION = 'S',
    VECTOR_SID_RUNWAY_TRANSITION = 'T',
    VECTOR_SID_ENROUTE_TRANSITION = 'V',
}

export default class Sid extends TerminalProcedure {
    routeType?: SidRouteType

    constructor(data: any) {
        super(data)
        this.routeType = data.route_type as SidRouteType
    }
}