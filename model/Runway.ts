import { IlsMlsGlsCategory } from './LocalizerGlideslope.js'


export default class Runway {
    areaCode?: string
    icaoCode?: string
    airportIdentifier: string
    runwayIdentifier: string
    runwayLatitude?: number
    runwayLongitude?: number
    runwayGradient?: number
    runwayMagneticBearing?: number
    runwayTrueBearing?: number
    landingThresholdElevation?: number
    displacedThresholdDistance?: number
    thresholdCrossingHeight?: number
    runwayLength?: number
    runwayWidth?: number
    llzIdentifier?: string
    llzMlsGlsCategory?: IlsMlsGlsCategory

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.airportIdentifier = data.airport_identifier
        this.runwayIdentifier = data.runway_identifier
        this.runwayLatitude = data.runway_latitude
        this.runwayLongitude = data.runway_longitude
        this.runwayGradient = data.runway_gradient
        this.runwayMagneticBearing = data.runway_magnetic_bearing
        this.runwayTrueBearing = data.runway_true_bearing
        this.landingThresholdElevation = data.landing_threshold_elevation
        this.displacedThresholdDistance = data.displaced_threshold_distance
        this.thresholdCrossingHeight = data.threshold_crossing_height
        this.runwayLength = data.runway_length
        this.runwayWidth = data.runway_width
        this.llzIdentifier = data.llz_identifier
        this.llzMlsGlsCategory = data.llz_mls_gls_category as IlsMlsGlsCategory
    }
}