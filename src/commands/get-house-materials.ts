import { Arguments, Argv } from "yargs";
import { getHouseMaterials } from "../calculator/index";

export function getMaterials(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "get-house-materials",

        // describe the command so that the --help flag is helpful
        "get a house from saved houses by customer name",

        // define the parameters we need for our command
        {
            name: {
                type: "string",
                alias: "n",
                description: "customer name, -n",
            },
        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                name: any;
            }>
        ) {
            try {
                //get our customer's house material by name
                const houseMaterials = getHouseMaterials(args.name);
                console.log(houseMaterials);
            } catch (error) {
                console.error("error");
            }
        }
    );
}
