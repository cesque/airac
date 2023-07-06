import sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite'
import Header from './Header.js'
import VhfNavaid from './VHFNavaid.js'
import EnrouteNdbNavaid from './Ndb/EnrouteNdbNavaid.js'
import TerminalNdbNavaid from './Ndb/TerminalNdbNavaid.js'
import NdbNavaid from './Ndb/NdbNavaid.js'
import EnrouteWaypoint from './Waypoint/EnrouteWaypoint.js'
import TerminalWaypoint from './Waypoint/TerminalWaypoint.js'
import Waypoint from './Waypoint/Waypoint.js'
import Holding from './Holding.js'
import EnrouteAirway from './EnrouteAirway.js'
import Airport from './Airport.js'
import Runway from './Runway.js'
import LocalizerGlideslope from './LocalizerGlideslope.js'
import LocalizerMarker from './LocalizerMarker.js'
import TerminalProcedure from './TerminalProcedure/TerminalProcedure.js'
import Sid from './TerminalProcedure/Sid.js'
import Star from './TerminalProcedure/Star.js'
import Iap from './TerminalProcedure/Iap.js'
import AirportCommunication from './Communication/AirportCommunication.js'
import EnrouteCommunication from './Communication/EnrouteCommunication.js'
import Communication from './Communication/Communication.js'
import GridMora from './GridMora.js'
import AirportMsa from './AirportMSA.js'
import EnrouteAirwayRestriction from './EnrouteAirwayRestriction.js'
import ControlledAirspace from './ControlledAirspace.js'
import CruisingTable from './CruisingTable.js'
import FirUir from './FirUir.js'
import RestrictiveAirspace from './RestrictiveAirspace.js'
import Gate from './Gate.js'
import Gls from './Gls.js'

async function fetchAll(db: Database, table: string) {
    return await db.all(`select * from tbl_${ table }`)
}

function getMappedItems<Type>(list: any[], classType: new (json: any) => Type): Type[] {
    return list.map(item => {
        return new classType(item)
    })
}

export default class AIRAC {
    // only tables with multiple rows -- header is deal with separately
    static tables: string[] = [
        'vhfnavaids',
        'enroute_ndbnavaids',
        'terminal_ndbnavaids',
        'enroute_waypoints',
        'terminal_waypoints',
        'holdings',
        'enroute_airways',
        'airports',
        'runways',
        'localizers_glideslopes',
        'localizer_marker',
        'sids',
        'stars',
        'iaps',
        'airport_communication',
        'enroute_communication',
        'grid_mora',
        'airport_msa',
        'enroute_airway_restriction',
        'controlled_airspace',
        'cruising_tables',
        'fir_uir',
        'restrictive_airspace',
        'gate',
        'gls',
    ]

    header: Header
    VHFNavaids: VhfNavaid[]
    EnrouteNDBNavaids: EnrouteNdbNavaid[]
    TerminalNDBNavaids: TerminalNdbNavaid[]
    EnrouteWaypoints: EnrouteWaypoint[]
    TerminalWaypoints: TerminalWaypoint[]
    Holdings: Holding[]
    EnrouteAirways: EnrouteAirway[]
    Airports: Airport[]
    Runways: Runway[]
    LocalizersGlideslopes: LocalizerGlideslope[]
    LocalizerMarkers: LocalizerMarker[]
    Sids: Sid[]
    Stars: Star[]
    Iaps: Iap[]
    AirportCommunications: AirportCommunication[]
    EnrouteCommunications: EnrouteCommunication[]
    GridMoras: GridMora[]
    AirportMsas: AirportMsa[]
    EnrouteAirwayRestrictions: EnrouteAirwayRestriction[]
    ControlledAirspaces: ControlledAirspace[]
    CruisingTables: CruisingTable[]
    FirUirs: FirUir[]
    RestrictiveAirspaces: RestrictiveAirspace[]
    Gates: Gate[]
    Glss: Gls[]

    get NDBNavaids(): NdbNavaid[] {
        let list: NdbNavaid[] = []

        return list
            .concat(this.EnrouteNDBNavaids)
            .concat(this.TerminalNDBNavaids)
    }

    get Waypoints(): Waypoint[] {
        let list: Waypoint[] = []

        return list
            .concat(this.EnrouteWaypoints)
            .concat(this.TerminalWaypoints)
    }

    get Procedures(): TerminalProcedure[] {
        let list: TerminalProcedure[] = []

        return list
            .concat(this.Sids)
            .concat(this.Stars)
            .concat(this.Iaps)
    }

    get Communications(): Communication[] {
        let list: Communication[] = []

        return list
            .concat(this.AirportCommunications)
            .concat(this.EnrouteCommunications)
    }

    constructor(json: any) {
        this.header = new Header(json.header)

        this.VHFNavaids = getMappedItems(json.vhfnavaids, VhfNavaid)
        this.EnrouteNDBNavaids = getMappedItems(json.enroute_ndbnavaids, EnrouteNdbNavaid)
        this.TerminalNDBNavaids = getMappedItems(json.terminal_ndbnavaids, TerminalNdbNavaid)
        this.EnrouteWaypoints = getMappedItems(json.enroute_waypoints, EnrouteWaypoint)
        this.TerminalWaypoints = getMappedItems(json.terminal_waypoints, TerminalWaypoint)
        this.Holdings = getMappedItems(json.holdings, Holding)
        this.EnrouteAirways = getMappedItems(json.enroute_airways, EnrouteAirway)
        this.Airports = getMappedItems(json.airports, Airport)
        this.Runways = getMappedItems(json.runways, Runway)
        this.LocalizersGlideslopes = getMappedItems(json.localizers_glideslopes, LocalizerGlideslope)
        this.LocalizerMarkers = getMappedItems(json.localizer_marker, LocalizerMarker)
        this.Sids = getMappedItems(json.sids, Sid)
        this.Stars = getMappedItems(json.stars, Star)
        this.Iaps = getMappedItems(json.iaps, Iap)
        this.AirportCommunications = getMappedItems(json.airport_communication, AirportCommunication)
        this.EnrouteCommunications = getMappedItems(json.enroute_communication, EnrouteCommunication)
        this.GridMoras = getMappedItems(json.grid_mora, GridMora)
        this.AirportMsas = getMappedItems(json.airport_msa, AirportMsa)
        this.EnrouteAirwayRestrictions = getMappedItems(json.enroute_airway_restriction, EnrouteAirwayRestriction)
        this.ControlledAirspaces = getMappedItems(json.controlled_airspace, ControlledAirspace)
        this.CruisingTables = getMappedItems(json.cruising_tables, CruisingTable)
        this.FirUirs = getMappedItems(json.fir_uir, FirUir)
        this.RestrictiveAirspaces = getMappedItems(json.restrictive_airspace, RestrictiveAirspace)
        this.Gates = getMappedItems(json.gate, Gate);
        this.Glss = getMappedItems(json.gls, Gls);

    }

    static async fromDb(file: string) {
        const db = await open({
            filename: file,
            driver: sqlite3.Database
        })

        // console.log(await db.all(`SELECT name FROM sqlite_schema WHERE type='table' ORDER BY name`))

        let result: any = {}

        for(let tableName of AIRAC.tables) {
            let results = await fetchAll(db, tableName)

            result[tableName] = results
        }

        result.header = (await fetchAll(db, 'header'))[0]

        return new AIRAC(result)
    }
}