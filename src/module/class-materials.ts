import { IMaterials } from "../calculator/interfaces";

export class Materials implements IMaterials {
    // 2x4's (for studs and plates)
    // lumber
    fourByFour: number;
    twoByFour: number;

    // Plywood (for exterior of house)
    plywood: number;

    // Drywall (for interior of house)
    drywall: number;

    constructor(
        twoByFour: number,
        fourByFour: number,
        plywood: number,
        drywall: number
    ) {
        this.twoByFour = twoByFour;
        this.fourByFour = fourByFour;
        this.plywood = plywood;
        this.drywall = drywall;
    }
}
