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
