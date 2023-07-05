import chalk from 'chalk'
import AIRAC from './model/AIRAC.js'

let data = await AIRAC.fromDb('./e_dfd_1903.s3db')
// console.log(data)

function printValue(p: string, v: any, isComputed: boolean) {
    let isArray = Array.isArray(v)

    let color = isComputed ? chalk.magenta : chalk.white

    let s = `    `
    s += color(p)

    if(isArray) {
        s += chalk.grey(' (')
        s += chalk.yellow(v.length)
        s += ' '
        s += chalk.grey('items')
        s += chalk.grey(')')
    }
    
    console.log(s)
}

console.log(chalk.grey(`AIRAC {`))

for(let property in Object.getOwnPropertyDescriptors(data)) {    
    let value = Object.getOwnPropertyDescriptor(data, property)!.value
    printValue(property, value, false)
}

console.log(chalk.gray.dim(`    --- computed properties --- `))

for(let property in Object.getOwnPropertyDescriptors(AIRAC.prototype)) {
    if(property == 'constructor') continue

    let value = data[property as keyof AIRAC]
    printValue(property, value, true)
}

console.log(chalk.grey(`}`))
