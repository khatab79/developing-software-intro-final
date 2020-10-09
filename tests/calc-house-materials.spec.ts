import { calcHouseMaterials } from ".././src/calculator/index";

import { expect } from "chai";
import "mocha";

describe("calc house materials", () => {
    describe("material calculation", () => {
        it("Should return nbr of fourByFour inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .fourByFour;
            const output = 4;
            expect(output).to.equal(result);
        });

        it("Should return nbr of fourByFour feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .fourByFour;
            const output = 14;
            expect(output).to.equal(result);
        });

        it("Should return nbr of twoByFour inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .twoByFour;
            const output = 40;
            expect(output).to.equal(result);
        });

        it("Should return nbr of twoByFour feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .twoByFour;
            const output = 1706;
            expect(output).to.equal(result);
        });

        it("Should return nbr of drywall inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .drywall;
            const output = 10;
            expect(output).to.equal(result);
        });

        it("Should return nbr of drywall feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true).drywall;
            const output = 116;
            expect(output).to.equal(result);
        });

        it("Should return nbr of plywood inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .plywood;
            const output = 9;
            expect(output).to.equal(result);
        });

        it("Should return nbr of plywood feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true).plywood;
            const output = 103;
            expect(output).to.equal(result);
        });
    });
});
