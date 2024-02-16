const { startCase, upperCase } = require("lodash");

const name = "ifeanyi ogbonnaya";

const capitalName = startCase(upperCase(name));

console.log(capitalName);
