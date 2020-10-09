import { expect } from "chai";
import "mocha";

import { calcMaterials } from ".././src/calculator/index";

describe("Calculator", () => {
    describe("calcMaterials", () => {
        it("twoByFour for (103,103) inches", () => {
            const result = calcMaterials(103, 103).materials.twoByFour;
            expect(result).to.equal(40);
        });

        it("fourByFour for (103,103) inches", () => {
            const result = calcMaterials(103, 103).materials.fourByFour;
            expect(result).to.equal(4);
        });

        it("plywood for (103,103) inches", () => {
            const result = calcMaterials(103, 103).materials.plywood;
            expect(result).to.equal(9);
        });

        it("plywood for (103,103) inches", () => {
            const result = calcMaterials(103, 103).materials.drywall;
            expect(result).to.equal(10);
        });
    });
});
