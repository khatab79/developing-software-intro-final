[Return to Software Instructions](../software-instructions.md) 

[Return to list](../../src/calculator/readme.md) 



## Usage
This function takes Parameter ==> name as string and console.log to output the parameter passed. 

## Code of the function: 

```javascript
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
            console.log(args.name);
        }
    );
}

```
## Example of call 1
```
npm run start:dev:notest -- get-house-materials -n Gerald
```
## output

`Gerald`

## Example of call 2
```
npm run start:dev:notest -- get-house-materials -name Gerald 
```
## output
`Gerald`

<br/>
<br/>

[Return to Software Instructions](../software-instructions.md) 