import { calcHouseMaterials } from ".././src/calculator/index";

import { expect } from "chai";
import "mocha";

describe("calc house materials", () => {
    describe("customer calculation", () => {
        it("Should return customer name", () => {
            const result = calcHouseMaterials("khatab", 100, 100, true).name;
            const output = "khatab";
            expect(output).to.equal(result);
        });

        it("Should return customer width", () => {
            const result = calcHouseMaterials("khatab", 100, 100, true).width;
            const output = 100;
            expect(output).to.equal(result);
        });

        it("Should return customer length", () => {
            const result = calcHouseMaterials("khatab", 100, 100, true).length;
            const output = 100;
            expect(output).to.equal(result);
        });
    });
});
