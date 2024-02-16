const { startCase, upperCase } = require("lodash")


const name = 'ifeanyi ogbonna'

const capitalName = startCase(upperCase(name));

console.log(capitalName)