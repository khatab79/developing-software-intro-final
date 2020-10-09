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
