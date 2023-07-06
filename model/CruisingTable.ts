export default class CruisingTable {
    cruiseTableIdentifier?: string
    sequenceNumber?: number
    courseFrom?: number
    courseTo?: number
    magTrue?: string
    cruiseLevelFrom1?: number
    verticalSeparation1?: number
    cruiseLevelTo1?: number
    cruiseLevelFrom2?: number
    verticalSeparation2?: number
    cruiseLevelTo2?: number
    cruiseLevelFrom3?: number
    verticalSeparation3?: number
    cruiseLevelTo3?: number
    cruiseLevelFrom4?: number
    verticalSeparation4?: number
    cruiseLevelTo4?: number

    constructor(data: any) {
        this.cruiseTableIdentifier = data.cruise_table_identifier
        this.sequenceNumber = data.seqno
        this.courseFrom = data.course_from
        this.courseTo = data.course_to
        this.magTrue = data.mag_true
        this.cruiseLevelFrom1 = data.cruise_level_from1
        this.verticalSeparation1 = data.vertical_separation1
        this.cruiseLevelTo1 = data.cruise_level_to1
        this.cruiseLevelFrom2 = data.cruise_level_from2
        this.verticalSeparation2 = data.vertical_separation2
        this.cruiseLevelTo2 = data.cruise_level_to2
        this.cruiseLevelFrom3 = data.cruise_level_from3
        this.verticalSeparation3 = data.vertical_separation3
        this.cruiseLevelTo3 = data.cruise_level_to3
        this.cruiseLevelFrom4 = data.cruise_level_from4
        this.verticalSeparation4 = data.vertical_separation4
        this.cruiseLevelTo4 = data.cruise_level_to4
    }

}