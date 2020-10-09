[Return to Software Instructions](../software-instructions.md) 

[Return to list](../../src/calculator/readme.md) 

## Usage
takes a number as parameters
and returns the waste depending on a percentage


## Code of the function: 

```javascript
const WASTE_MULTIPLIER = 0.1;

export function calcWaste(items: number): number {
    const waste = Math.ceil(items * WASTE_MULTIPLIER);
    return waste;
}
```

## test

```Javascript
import { expect } from "chai";
import "mocha";

import { calcWaste } from ".././src/calculator/index";

describe("Calculator", () => {
    describe("waste", () => {
        it("twoByFour for (100) inches", () => {
            const result = calcWaste(100);
            expect(result).to.equal(10);
        });

        it("fourByFour for (50.5) inches", () => {
            const result = calcWaste(50.5);
            expect(result).to.equal(6);
        });

        it("plywood for (20) feet", () => {
            const result = calcWaste(20);
            expect(result).to.equal(2);
        });

        it("plywood for (103) feet", () => {
            const result = calcWaste(103);
            expect(result).to.equal(11);
        });
    });
});

```
for calcHouseMaterials function

```javascript
 // the following tests for waste
    describe("material calculation", () => {
        it("9. Should return nbr of wasted fourByFour", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false).waste
                .fourByFour;
            const output = 1;
            expect(output).to.equal(result);
        });

        it("10. Should return nbr of wasted fourByFour", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true).waste
                .fourByFour;
            const output = 2;
            expect(output).to.equal(result);
        });

        it("11. Should return nbr of wasted twoByFour", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false).waste
                .twoByFour;
            const output = 4;
            expect(output).to.equal(result);
        });

        it("12. Should return nbr of wasted twoByFour", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true).waste
                .twoByFour;
            const output = 171;
            expect(output).to.equal(result);
        });

        it("13. Should return nbr of wasted drywall ", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false).waste
                .drywall;
            const output = 1;
            expect(output).to.equal(result);
        });

        it("14. Should return nbr of wasted drywall ", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true).waste
                .drywall;
            const output = 12;
            expect(output).to.equal(result);
        });

        it("15. Should return nbr of wasted plywood", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false).waste
                .plywood;
            const output = 1;
            expect(output).to.equal(result);
        });

        it("16. Should return nbr of plywood ", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.plywood;
            const output = 103;
            expect(output).to.equal(result);
        });

```


<br/>
<br/>

[Return to Software Instructions](../software-instructions.md) 