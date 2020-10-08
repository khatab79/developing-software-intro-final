// import yargs to re-use code from someone else that has already
import yargs = require("yargs");

//import funtion calcWoodNeeded
import { calcMaterials } from "./commands/calc-house-materials";

//import funtion findCustomerByName
import { getMaterials } from "./commands/get-house-materials";

//to calculate total wood required ( studs, posts, plates )
calcMaterials(yargs);

//to recall prior house builds without knowing their dimensions
getMaterials(yargs);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();
