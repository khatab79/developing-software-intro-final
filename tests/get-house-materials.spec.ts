import { getHouseMaterials } from ".././src/calculator/index";

import { expect } from "chai";
import "mocha";

describe("get house materials", () => {
    describe("customer name", () => {
        it("Should return customer name output", () => {
            const result = getHouseMaterials("khatab");
            const output = "khatab";
            expect(output).to.equal(result);
        });
    });
});
