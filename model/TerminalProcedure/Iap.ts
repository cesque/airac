import TerminalProcedure from './TerminalProcedure.js'

export enum IapRouteType {
    APPROACH_TRANSITION = 'A',
    LOCALIZER_BACK_COURSE_APPROACH = 'B',
    VORDME_APPROACH = 'D',
    FMS_APPROACH = 'F',
    IGS_APPROACH = 'G',
    ILS_APPROACH = 'I',
    GLS_APPROACH = 'J',
    LOC_ONLY_APPROACH = 'L',
    MLS_APPROACH = 'M',
    NDB_APPROACH = 'N',
    GPS_APPROACH = 'P',
    NDB_DME_APPROACH = 'Q',
    RNAV_APPROACH = 'R',
    VOR_APPRAOCH_USING_VORDME_VORTAC = 'S',
    TACAN_APPROACH = 'T',
    SDF_APPROACH = 'U',
    VOR_APPROACH = 'V',
    MLS_TYPE_A_APPROACH = 'W',
    LDA_APPROACH = 'X',
    MLS_TYPE_B_AND_C_APPROACH = 'Y',
    MISSED_APPROACH = 'Z',
}

export default class Iap extends TerminalProcedure {
    routeType?: IapRouteType

    constructor(data: any) {
        super(data)
        this.routeType = data.route_type as IapRouteType
    }
}