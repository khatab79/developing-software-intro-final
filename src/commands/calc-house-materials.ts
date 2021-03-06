//import Arguments, Argv from yargs
import { Arguments, Argv } from "yargs";
import { calcHouseMaterials } from "../calculator/index";
import { outPutMaterials } from "../operations/showMaterials";
import { outPutWaste } from "../operations/showWaste";
import { outPutPurchase } from "../operations/showPurchase";
import { outPutHouse } from "../operations/showHouse";
import { Customer } from "../module/class-customer";

export function calcMaterials(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "calc-house-materials",

        // describe the command so that the --help flag is helpful
        "Calculate the required materials to build a house for Gerald",

        // define the parameters we need for our command
        {
            width: {
                type: "number",
                alias: "w",
                description: "The width of the house, -w",
            },

            length: {
                type: "number",
                alias: "l",
                description: "The length of the house, -l",
            },
            //using a flag for having the calculation in inches unite
            // or by feet
            isFeet: {
                type: "boolean",
                alias: "i",
                description: "length unites in feet, -i",
            },
            name: {
                type: "string",
                alias: "n",
                description: "customer name of a house, -n",
            },
        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                width: number;
                length: number;
                isFeet: boolean;
                name: string;
            }>
        ) {
            try {
                // calculate rquired wood for a house, accept uites in inches or feet
                const houseMaterials = calcHouseMaterials(
                    args.name,
                    args.width,
                    args.length,
                    args.isFeet
                );

                const outputHouse = outPutHouse(houseMaterials.house);
                console.log(outputHouse);

                const outputMaterials = outPutMaterials(
                    houseMaterials.materials.materials
                );
                console.log(outputMaterials);

                const outputWaste = outPutWaste(houseMaterials.materials.waste);
                console.log(outputWaste);

                const outputPurchase = outPutPurchase(
                    houseMaterials.materials.purchase
                );
                console.log(outputPurchase);

                // const customer :Customer = new (houseMaterials.house,
                //                                 houseMaterials.materials.materials,
                //                                 houseMaterials.materials.waste,
                //                                 houseMaterials.materials.purchase )
                //     )
                // Customer.save;
            } catch (error) {
                console.error("error");
            }
        }
    );
}
