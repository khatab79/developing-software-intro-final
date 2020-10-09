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
    outsideWallArea: number;

    // inside wall area
    insideWallArea: number;

    // ceiling area
    ceilingArea: number;

    // 2x4's (for studs and plates)
    twoByFour: number;
    fourByFour: number;

    // Plywood (for exterior of house)
    plywood: number;

    // Drywall (for interior of house)
    drywall: number;

    // 2x4's (for studs and plates)
    twoByFourWaste: number;
    fourByFourWaste: number;

    // Plywood (for exterior of house)
    plywoodWaste: number;

    // Drywall (for interior of house)
    drywallWaste: number;

    // 2x4's (for studs and plates)
    twoByFourPurchase: number;
    fourByFourPurchase: number;

    // Plywood (for exterior of house)
    plywoodPurchase: number;

    // Drywall (for interior of house)
    drywallPurchase: number;
}
