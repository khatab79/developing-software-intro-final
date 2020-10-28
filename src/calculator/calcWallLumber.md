[Return to list](./readme.md) 

## Usage
calcWallLumber that takes inches as a parameter and
returns the number of plates, studs, and posts required for a single wall

width  as number

and return wood calculation

## Code of the function: 

```javascript
//function calcWallLumber takes inches as a parameter
//and returns the number of plates, studs, and posts required for a single wall
export function calcWallLumber(inches: number) {
    // get required beams
    const posts = getRequiredBeamsInLength(inches);
    const fullSections = getFullSections(inches, posts);
    const lastSectionSize = getLastSectionSize(inches, posts);

    const plates =
        getPlatesInLength(inches) * fullSections +
        getPlatesInLength(lastSectionSize);
    const studs =
        getStudsInLength(inches) * fullSections +
        getStudsInLength(lastSectionSize);

    return {
        plates,
        studs,
        posts,
    };
}
```

## test

```Javascript
    import { expect } from "chai";
    import "mocha";

    import { calcWallLumber } from ".././src/calculator/index";

    describe("Calculator", () => {
        describe("calcWallLumber", () => {
            it("plates for 900 inches", () => {
                const result = calcWallLumber(900).plates;
                expect(result).to.equal(54);
            });

            it("studs for 900 inches", () => {
                const result = calcWallLumber(900).studs;
                expect(result).to.equal(101);
            });

            it("posts for 900 inches", () => {
                const result = calcWallLumber(900).posts;
                expect(result).to.equal(3);
            });
        });
    });
