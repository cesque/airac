/* --- helper function to convert Navigraph DDL to a typescript class --- */

let input = `
[area_code] TEXT(3),
[airport_identifier] TEXT(4),
[icao_code] TEXT(2),
[gls_ref_path_identifier] TEXT(4),
[gls_category] TEXT(1),
[gls_channel] INT(5),
[runway_identifier] TEXT(5),
[gls_approach_bearing] REAL(5),
[station_latitude] REAL(9),
[station_longitude] REAL(10),
[gls_station_ident] TEXT(4),
[gls_approach_slope] REAL(4),
[magnetic_variation] REAL(6),
[station_elevation] INT(5),
[station_type] TEXT(3)
`

let lines = input
    .split(/\n/)
    .filter(x => x.trim().length)
    .map(x => x.trim())

let results = []

let regex = /\[(?<name>[\w ]+)] (?<type>[A-Z]+)\(\d+\)(?<notnull> NOT NULL)?/

function capitalise(s: string): string {
    return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase()
}

function camelCase(s: string): string {
    return s.split(/[ _]/)
        .map((part, index) => index == 0 ? part.toLowerCase() : capitalise(part) )
        .join('')
}

let jsTypeMap: { [key: string]: string } = {
    TEXT: 'string',
    REAL: 'number',
    INT: 'number',
}

let parsedParts = lines.map(line => {
    let parsed = regex.exec(line)!
    let { name, type, notnull } = parsed.groups!

    let isNullable = !notnull
    let jsType = jsTypeMap[type]

    return {
        name, jsName: camelCase(name), isNullable, type: jsType
    }
})

for(let line of parsedParts) {
    let { name, jsName, isNullable, type } = line
    let s = `${ jsName }${ isNullable ? '?' : '' }: ${ type }`
    console.log(s)
}

console.log()

console.log(`constructor(data: any) {`)

for(let line of parsedParts) {
    let { name, jsName, isNullable, type } = line
    let s = `    this.${ jsName } = data.${ name }`
    console.log(s)
}

console.log(`}`)