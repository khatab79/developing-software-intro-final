import { expect } from "chai";
import "mocha";

import { calcWaste } from ".././src/calculator/index";

describe("Calculator", () => {
    describe("waste", () => {
        it("twoByFour for (100) inches", () => {
            const result = calcWaste(100);
            expect(result).to.equal(10);
        });

        it("fourByFour for (50.5) inches", () => {
            const result = calcWaste(50.5);
            expect(result).to.equal(6);
        });

        it("plywood for (20) feet", () => {
            const result = calcWaste(20);
            expect(result).to.equal(2);
        });

        it("plywood for (103) feet", () => {
            const result = calcWaste(103);
            expect(result).to.equal(11);
        });
    });
});
