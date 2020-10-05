import { sayHello } from "../src/hello";
import { expect } from "chai";
import "mocha";

//here the test condtion either its pass pr not.
describe("sayHello function", () => {
    it("should return Hello khatab", () => {
        const result = sayHello("khatab");
        console.log(result);
        expect(result).to.equal("Hello khatab");
    });
});
