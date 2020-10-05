
[Return to Software Instructions](../software-instructions.md) 

## Usage
This function takes Parameters ==> 

width  as number
length as number
isFeet as boolean
name   as string 

and console.log to output the parameters passed.

## Code of the function: 

```javascript
//import Arguments, Argv from yargs
import { Arguments, Argv } from "yargs";

export function calcHouseMaterials(yargs: Argv): void {
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
            // calculate rquired wood for a house, accept uites in inches or feet
            console.log(args.width, args.length, args.isFeet, args.name);
        }
    );
}

```
## Example of call 1
```
npm run start -- calc-house-materials -w 50 -l 90 -i feet -n khatab
```
## output

`50 90 true Gerald`

## Example of call 2
```
npm run start -- calc-house-materials -w 50 -l 90 -n khatab
```
## output

`50 90 false Gerald`

<br/>
<br/>

[Return to Software Instructions](../software-instructions.md) 