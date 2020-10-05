// import yargs to re-use code from someone else that has already
import yargs = require("yargs");

//import funtion calcWoodNeeded
import { calcHouseMaterials } from "./commands/calc-house-materials";

//import funtion findCustomerByName
import { getHouseMaterials } from "./commands/get-house-materials";

//to calculate total wood required ( studs, posts, plates )
calcHouseMaterials(yargs);

//to recall prior house builds without knowing their dimensions
getHouseMaterials(yargs);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();
