export default abstract class TerminalProcedure {
    areaCode?: string
    icaoCode?: string
    airportIdentifier?: string
    procedureIdentifier?: string
    routeType?: string
    transitionIdentifier?: string
    sequenceNumber?: number
    waypointIdentifier?: string
    waypointLatitude?: number
    waypointLongitude?: number
    waypointDescriptionCode?: string
    turnDirection?: string
    rnp?: number
    pathTermination?: string
    recommandedNavaid?: string
    recommandedNavaidLatitude?: number
    recommandedNavaidLongitude?: number
    arcRadius?: number
    theta?: number
    rho?: number
    magneticCourse?: number
    routeDistanceHoldingDistanceTime?: number
    distanceTime?: string
    altitudeDescription?: string
    altitude1?: number
    altitude2?: number
    transitionAltitude?: number
    speedLimitDescription?: string
    speedLimit?: number
    verticalAngle?: number
    centerWaypoint?: string
    centerWaypointLatitude?: number
    centerWaypointLongitude?: number

    constructor(data: any) {
        this.areaCode = data.area_code
        this.icaoCode = data.icao_code
        this.airportIdentifier = data.airport_identifier
        this.procedureIdentifier = data.procedure_identifier
        this.routeType = data.route_type
        this.transitionIdentifier = data.transition_identifier
        this.sequenceNumber = data.seqno
        this.waypointIdentifier = data.waypoint_identifier
        this.waypointLatitude = data.waypoint_latitude
        this.waypointLongitude = data.waypoint_longitude
        this.waypointDescriptionCode = data.waypoint_description_code
        this.turnDirection = data.turn_direction
        this.rnp = data.rnp
        this.pathTermination = data.path_termination
        this.recommandedNavaid = data.recommanded_navaid
        this.recommandedNavaidLatitude = data.recommanded_navaid_latitude
        this.recommandedNavaidLongitude = data.recommanded_navaid_longitude
        this.arcRadius = data.arc_radius
        this.theta = data.theta
        this.rho = data.rho
        this.magneticCourse = data.magnetic_course
        this.routeDistanceHoldingDistanceTime = data.route_distance_holding_distance_time
        this.distanceTime = data.distance_time
        this.altitudeDescription = data.altitude_description
        this.altitude1 = data.altitude1
        this.altitude2 = data.altitude2
        this.transitionAltitude = data.transition_altitude
        this.speedLimitDescription = data.speed_limit_description
        this.speedLimit = data.speed_limit
        this.verticalAngle = data.vertical_angle
        this.centerWaypoint = data.center_waypoint
        this.centerWaypointLatitude = data.center_waypoint_latitude
        this.centerWaypointLongitude = data.center_waypoint_longitude
    }
}