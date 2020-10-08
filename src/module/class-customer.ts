import { ICustomer } from "../calculator/interfaces";

export class Customer implements ICustomer {
    //customer name
    name: string;

    //house dimensions
    // width
    width: number;
    // length
    length: number;

    // out side wall area
    outsideWallArea?: number;

    // inside wall area
    insideWallArea?: number;

    // ceiling area
    ceilingArea?: number;

    // 2x4's (for studs and plates)
    studs: number;
    plates: number;

    // Plywood (for exterior of house)
    plywood: number;

    // Drywall (for interior of house)
    drywall: number;

    constructor(name: string, width: number, length: number) {
        this.name = name;
        this.width = width;
        this.length = length;
    }
}
