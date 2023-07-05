import Communication from './Communication.js'

export enum FirUirAddress {
    RELATED_TO_IFR_FLIGHT = 'ZQZX',
    RELATED_TO_VFR_FLIGHT = 'ZFZX',
    RELATED_TO_OCEANIC_FIR_UIR = 'ZOZX',
    RELATED_TO_ALL_OTHER_FIR_UIR = 'ZRZX',
}

export default class EnrouteCommunication extends Communication {
    firRdoIdent?: string
    firUirIndicator?: string
    remoteName?: string

    constructor(data: any) {
        super(data)

        this.firRdoIdent = data.fir_rdo_ident
        this.firUirIndicator = data.fir_uir_indicator as FirUirAddress
        this.remoteName = data.remote_name
    }
}