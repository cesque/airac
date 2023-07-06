export default class GridMora {
    startingLatitude?: number
    startingLongitude?: number
    moras?: number[] = []

    constructor(data: any) {
        this.startingLatitude = data.starting_latitude
        this.startingLongitude = data.starting_longitude

        if(data.mora01) {
            for(let i = 1; i <= 30; i++) {
                let key = i.toString().padStart(2, '0')

                if(!this.moras) this.moras = []

                this.moras.push(data[`mora${ key }`])
            }
        }
    }
}