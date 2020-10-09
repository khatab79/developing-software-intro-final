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
