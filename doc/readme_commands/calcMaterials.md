[Return to Software Instructions](../software-instructions.md) 

[Return to list](../../src/calculator/readme.md) 

## Usage
takes width and length as parameters
and returns materials (2x4, 4x4 plywood, drywall) 

width and length as number

and return wood calculation

## Code of the function: 

```javascript
// takes the following parameters:
// width
// length
// calcWallLumber function --- plates, studs, and posts
// calcDrywall function    --- drywall
// calcPlywood function    --- plywood
// return the results in the format specified for the materials section of the interface
export function calcMaterials(widthInInches: number, lengthInInches: number) {
    const plates =
        calcWallLumber(widthInInches).plates +
        calcWallLumber(lengthInInches).plates;
    const studs =
        2 *
        (calcWallLumber(widthInInches).studs +
            calcWallLumber(lengthInInches).studs);
    const twoByFour = plates + studs;

    const fourByFour =
        4 +
        calcWallLumber(widthInInches).posts +
        calcWallLumber(widthInInches).posts;

    const drywall = calcDrywall(widthInInches, lengthInInches);
    const plywood = calcPlywood(widthInInches, lengthInInches);

    const materials: Materials = new Materials(
        twoByFour,
        fourByFour,
        plywood,
        drywall
    );

    return materials;
```

## test

```Javascript
import { expect } from "chai";
import "mocha";

import { calcMaterials } from ".././src/calculator/index";

describe("Calculator", () => {
    describe("calcMaterials", () => {
        it("twoByFour for (103,103) inches", () => {
            const result = calcMaterials(103, 103).twoByFour;
            expect(result).to.equal(40);
        });

        it("fourByFour for (103,103) inches", () => {
            const result = calcMaterials(103, 103).fourByFour;
            expect(result).to.equal(4);
        });

        it("plywood for (103,103) inches", () => {
            const result = calcMaterials(103, 103).plywood;
            expect(result).to.equal(9);
        });

        it("plywood for (103,103) inches", () => {
            const result = calcMaterials(103, 103).drywall;
            expect(result).to.equal(10);
        });
    });
});

```



<br/>
<br/>

[Return to Software Instructions](../software-instructions.md) 