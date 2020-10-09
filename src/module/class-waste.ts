import { IWaste } from "../calculator/interfaces";

import { Materials } from "../module/class-materials";

import { calcWaste } from "../calculator/index";

export class Waste implements IWaste {
    // 2x4's (for studs and plates)
    // lumber:{
    twoByFour: number;
    fourByFour: number;

    // Plywood (for exterior of house)
    plywood: number;

    // Drywall (for interior of house)
    drywall: number;

    constructor(materials: Materials) {
        this.twoByFour = calcWaste(materials.twoByFour);
        this.fourByFour = calcWaste(materials.fourByFour);
        this.plywood = calcWaste(materials.plywood);
        this.drywall = calcWaste(materials.drywall);
    }
}
