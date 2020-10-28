[Return](../../README.md) 

## Usage
This function takes Parameters ==> 

width  as number
length as number
isFeet as boolean
name   as string 

and return output customer details.

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
npm run start -- calc-house-materials -w 100 -l 100 -i feet -n khatab
```

## Example of call 2
```
npm run start -- calc-house-materials -w 100 -l 100 -n khatab
```
## output

```Javascript
{
        name: "khatab",
            "house": {
                "width": 100,
                "length": 100,
                "outsideWallArea": 0,
                "insideWallArea": 0,
                "ceilingArea": 0
            },
            "materials": {
                "lumber": {
                    "2x4": 0,
                    "4x4": 0
                },
                "plywood": {
                    "4x8": 0
                },
                "drywall": {
                    "4x8": 0
                }
            },
            "waste": {
                "lumber": {
                    "2x4": 0,
                    "4x4": 0
                },
                "plywood": {
                    "4x8": 0
                },
                "drywall": {
                    "4x8": 0
                }
            },
            "purchase": {
                "lumber": {
                    "2x4": 0,
                    "4x4": 0
                },
                "plywood": {
                    "4x8": 0
                },
                "drywall": {
                    "4x8": 0
                }
            }
        }


```

 ## Integrate calcMaterials

 by adding the function calcMaterials to this function. we can get the nbr of required wood: the 2x4, 4x4, plywood, drywall. 

also the test class need to be modified to integrate the calcMaterials to add the unit flag boolean and have the option to calculate by feet or inches. as the following


```javascript 
import { calcHouseMaterials } from ".././src/calculator/index";

import { expect } from "chai";
import "mocha";

describe("calc house materials", () => {
    describe("material calculation", () => {
        it("Should return nbr of fourByFour inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .fourByFour;
            const output = 4;
            expect(output).to.equal(result);
        });

        it("Should return nbr of fourByFour feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .fourByFour;
            const output = 14;
            expect(output).to.equal(result);
        });

        it("Should return nbr of twoByFour inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .twoByFour;
            const output = 40;
            expect(output).to.equal(result);
        });

        it("Should return nbr of twoByFour feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .twoByFour;
            const output = 1706;
            expect(output).to.equal(result);
        });

        it("Should return nbr of drywall inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .drywall;
            const output = 10;
            expect(output).to.equal(result);
        });

        it("Should return nbr of drywall feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true).drywall;
            const output = 116;
            expect(output).to.equal(result);
        });

        it("Should return nbr of plywood inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .plywood;
            const output = 9;
            expect(output).to.equal(result);
        });

        it("Should return nbr of plywood feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true).plywood;
            const output = 103;
            expect(output).to.equal(result);
        });
    });
});

```

the output still not final version.

```javascript
// organise the output to meet the specification requirement,
                // twoByFour  : number,
                // fourByFour : number,
                // plywood    : number,
                // drywall    : number

                const output = outPut(
                    houseMaterials.twoByFour,
                    houseMaterials.fourByFour,
                    houseMaterials.plywood,
                    houseMaterials.drywall
                );
                console.log(output);
```


<br/>
<br/>