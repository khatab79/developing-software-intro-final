import { calcHouseMaterials } from ".././src/calculator/index";

import { expect } from "chai";
import "mocha";

describe("calc house materials", () => {
    // the following tests for materials
    describe("material calculation", () => {
        it("1. Should return nbr of fourByFour inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .materials.materials.fourByFour;
            const output = 4;
            expect(output).to.equal(result);
        });

        it("2. Should return nbr of fourByFour feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.materials.fourByFour;
            const output = 14;
            expect(output).to.equal(result);
        });

        it("3. Should return nbr of twoByFour inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .materials.materials.twoByFour;
            const output = 40;
            expect(output).to.equal(result);
        });

        it("4. Should return nbr of twoByFour feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.materials.twoByFour;
            const output = 1706;
            expect(output).to.equal(result);
        });

        it("5. Should return nbr of drywall inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .materials.materials.drywall;
            const output = 10;
            expect(output).to.equal(result);
        });

        it("6. Should return nbr of drywall feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.materials.drywall;
            const output = 116;
            expect(output).to.equal(result);
        });

        it("7. Should return nbr of plywood inches", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .materials.materials.plywood;
            const output = 9;
            expect(output).to.equal(result);
        });

        it("8. Should return nbr of plywood feet", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.materials.plywood;
            const output = 103;
            expect(output).to.equal(result);
        });
    });

    // the following tests for waste
    describe("material calculation", () => {
        it("9. Should return nbr of wasted fourByFour", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .materials.waste.fourByFour;
            const output = 1;
            expect(output).to.equal(result);
        });

        it("10. Should return nbr of wasted fourByFour", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.waste.fourByFour;
            const output = 2;
            expect(output).to.equal(result);
        });

        it("11. Should return nbr of wasted twoByFour", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .materials.waste.twoByFour;
            const output = 4;
            expect(output).to.equal(result);
        });

        it("12. Should return nbr of wasted twoByFour", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.waste.twoByFour;
            const output = 171;
            expect(output).to.equal(result);
        });

        it("13. Should return nbr of wasted drywall ", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .materials.waste.drywall;
            const output = 1;
            expect(output).to.equal(result);
        });

        it("14. Should return nbr of wasted drywall ", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.waste.drywall;
            const output = 12;
            expect(output).to.equal(result);
        });

        it("15. Should return nbr of wasted plywood", () => {
            const result = calcHouseMaterials("khatab", 103, 103, false)
                .materials.waste.plywood;
            const output = 1;
            expect(output).to.equal(result);
        });

        it("16. Should return nbr of plywood ", () => {
            const result = calcHouseMaterials("khatab", 103, 103, true)
                .materials.materials.plywood;
            const output = 103;
            expect(output).to.equal(result);

            // tests for purchase
            it("17. Should return purchase of drywall ", () => {
                const result = calcHouseMaterials("khatab", 103, 103, false)
                    .materials.purchase.drywall;
                const output = 10;
                expect(output).to.equal(result);
            });

            it("18. Should return purchase of plywood", () => {
                const result = calcHouseMaterials("khatab", 103, 103, false)
                    .materials.purchase.plywood;
                const output = 9;
                expect(output).to.equal(result);
            });

            it("19. Should return  purchase of plywood ", () => {
                const result = calcHouseMaterials("khatab", 103, 103, true)
                    .materials.purchase.twoByFour;
                const output = 44;
                expect(output).to.equal(result);
            });
        });
    });
});
