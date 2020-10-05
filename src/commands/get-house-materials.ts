import { Arguments, Argv } from "yargs";

export function getHouseMaterials(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "get-house-materials",

        // describe the command so that the --help flag is helpful
        "get a house from saved houses by customer name",

        // define the parameters we need for our command
        {
            search: {
                type: "string",
                alias: "n",
                description: "customer name, -n",
            },
        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                search: any;
            }>
        ) {
            console.log(args.search);
        }
    );
}
