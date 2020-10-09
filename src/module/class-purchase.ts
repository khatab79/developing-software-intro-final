import { IPurchase } from "../calculator/interfaces";

export class Purchase implements IPurchase {
    // 2x4's (for studs and plates)
    // lumber:{
    twoByFour: number;
    fourByFour: number;

    // Plywood (for exterior of house)
    plywood: number;

    // Drywall (for interior of house)
    drywall: number;
}
