export enum RunwaySurface {
    HARD_SURFACE = 'H',
    SOFT_SURFACE = 'S',
    WATER_RUNWAY = 'W',
    UNDEFINED = 'U',
}

export enum IfrCapability {
    INSTRUMENT_APPROACH_PROCEDURE_PUBLISHED = 'Y',
    NO_INSTRUMENT_APPROACH_PROCEDURE_PUBLISHED = 'N',
}

export default class Airport {
    areaCode?: string
    icaoCode: string
    airportIdentifier: string
    airportIdentifier3Letter?: string
    airportName?: string
    airportRefLatitude?: number
    airportRefLongitude?: number
    ifrCapability?: IfrCapability
    longestRunwaySurface?: RunwaySurface
    elevation?: number
    transitionAltitude?: number
    speedLimit?: number
    speedLimitAltitude?: number
    iataAtaDesignator?: string

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.airportIdentifier = data.airport_identifier
        this.airportIdentifier3Letter = data.airport_identifier_3letter
        this.airportName = data.airport_name
        this.airportRefLatitude = data.airport_ref_latitude
        this.airportRefLongitude = data.airport_ref_longitude
        this.ifrCapability = data.ifr_capability as IfrCapability
        this.longestRunwaySurface = data.longest_runway_surface_code as RunwaySurface
        this.elevation = data.elevation
        this.transitionAltitude = data.transition_altitude
        this.speedLimit = data.speed_limit
        this.speedLimitAltitude = data.speed_limit_altitude
        this.iataAtaDesignator = data.iata_ata_designator
    }
}