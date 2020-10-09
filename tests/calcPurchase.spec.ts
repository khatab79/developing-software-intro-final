import { expect } from "chai";
import "mocha";

import { calcPurchase } from ".././src/calculator/index";

describe("Calculator", () => {
    describe("calcPurchase", () => {
        it("twoByFour for 40 + waste 4", () => {
            const result = calcPurchase(40, 4);
            expect(result).to.equal(44);
        });

        it("fourByFour 50 + wast 5", () => {
            const result = calcPurchase(50, 5);
            expect(result).to.equal(55);
        });

        it("plywood for 9 + wast 1", () => {
            const result = calcPurchase(9, 1);
            expect(result).to.equal(10);
        });

        it("dryWall for 20 + wast 2", () => {
            const result = calcPurchase(20, 2);
            expect(result).to.equal(22);
        });
    });
});
