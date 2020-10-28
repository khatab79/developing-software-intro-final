[Return to list](./readme.md) 

## Usage
takes width and length as parameters
and returns the number of sheets of drywall for a house, to completely cover the interior walls of the house, and the ceiling

The smallest wall he will build is 4 feet in length.
The largest wall he will build is 60 feet in length.
4x8 sheets of drywall

width and length as number

and return wood calculation

## Code of the function: 

```javascript
export function calcDrywall(widthInInches: number, lengthInInches: number) {
    
    //calculate drywall for the interiorWall (2 sides)
    const draywallForInteriorWall =
        (widthInInches - BEAM_WIDTH * 2) /
            convertFeetToInches(SHEET_DRYWALL_width) 
      + (lengthInInches - BEAM_WIDTH * 2) /
            convertFeetToInches(SHEET_DRYWALL_width);

    //calculate drywall for ceiling 2* (Width + Length), consider rectangle
    const draywallForCeiling =
        2 * (widthInInches + lengthInInches) /
        convertFeetToInches(SHEET_DRYWALL_width * SHEET_DRYWALL_long);

    // return calculation
    return Math.ceil(2 * draywallForInteriorWall + draywallForCeiling);
}
```

## test

```Javascript
import { expect } from "chai";
import "mocha";

import { calcDrywall } from ".././src/calculator/index";

describe("Calculator", () => {
    describe("calcDrywall", () => {
        it("Drywall for width 103, length 103 inches", () => {
            const result = calcDrywall(103, 103);
            expect(result).to.equal(10);
        });

        it("Drywall for width 100, length 200 inches", () => {
            const result = calcDrywall(100, 200);
            expect(result).to.equal(14);
        });

        it("Drywall for width 800, length 900 inches", () => {
            const result = calcDrywall(800, 900);
            expect(result).to.equal(80);
        });
    });
});

```
