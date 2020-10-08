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
