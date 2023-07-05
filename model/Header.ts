type DateRange = {
    from: Date,
    to: Date,
}

function parseCycleDate(date: string): Date {
    let day = Number.parseInt(date.slice(0, 2))
    let month = Number.parseInt(date.slice(2, 4))
    let year = Number.parseInt('20' + date.slice(4, 6))

    let result = new Date()

    result.setUTCFullYear(year, month - 1, day)
    result.setUTCHours(0, 0, 0, 0)

    return result
}

function parseCycleDateRange(range: string): DateRange {
    return {
        from: parseCycleDate(range.slice(0, 6)),
        to: parseCycleDate(range.slice(6, 12)),
    }
}

export default class Header {
    version: string
    arincVersion: string
    recordSet: string
    currentCycle: number
    revision: number
    effectiveDates: DateRange
    previousCycle: number
    previousEffectiveDates: DateRange
    parsedAt: Date

    constructor(data: any) {
        this.version = data.version
        this.arincVersion = data.arincversion
        this.recordSet = data.record_set
        this.currentCycle = Number.parseInt(data.current_airac)
        this.revision = Number.parseInt(data.revision)
        this.effectiveDates = parseCycleDateRange(data.effective_fromto)
        this.previousCycle = Number.parseInt(data.previous_airac)
        this.previousEffectiveDates = parseCycleDateRange(data.previous_fromto)

        let parsedAtRegex = /^(\d+)\/(\d+)\/(\d+) - (\d+):(\d+):(\d+) UTC$/
        let parsedAtParts = data.parsed_at.match(parsedAtRegex)
        let parsedAtDate = new Date()

        parsedAtDate.setUTCFullYear(
            Number.parseInt(parsedAtParts[3]),
            Number.parseInt(parsedAtParts[2]) - 1,
            Number.parseInt(parsedAtParts[1])
        )
        parsedAtDate.setUTCHours(
            Number.parseInt(parsedAtParts[4]),
            Number.parseInt(parsedAtParts[5]),
            Number.parseInt(parsedAtParts[6]),
            0
        )

        this.parsedAt = parsedAtDate
    }
}