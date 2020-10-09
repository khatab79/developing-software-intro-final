[Return to Software Instructions](../software-instructions.md) 

[Return to list](../../src/calculator/readme.md) 

## Usage
takes width and length as parameters
and returns the number of sheets of plywood 

plywood to completely cover the exterior walls of the house.
4x8 foot sheets of plywood

width and length as number

and return wood calculation

## Code of the function: 

```javascript
export function calcPlywood(widthInInches: number, lengthInInches: number) {
    return Math.ceil(
        2 * (widthInInches / convertFeetToInches(SHEET_PLYWOOD_width) +
            lengthInInches / convertFeetToInches(SHEET_PLYWOOD_width)));
}
```

## test

```Javascript
    import { expect } from "chai";
import "mocha";

import { calcPlywood } from ".././src/calculator/index";

describe("Calculator", () => {
    describe("calcDrywall", () => {
        it("Plywood for width 103, length 103 inches", () => {
            const result = calcPlywood(103, 103);
            expect(result).to.equal(9);
        });

        it("Plywood for width 100, length 200 inches", () => {
            const result = calcPlywood(200, 400);
            expect(result).to.equal(25);
        });

        it("Plywood for width 800, length 900 inches", () => {
            const result = calcPlywood(500, 600);
            expect(result).to.equal(46);
        });
    });
});

```



<br/>
<br/>

[Return to Software Instructions](../software-instructions.md) 