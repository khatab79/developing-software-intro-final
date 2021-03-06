export interface IHouse {
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
}

export interface IMaterials {
    // 2x4's (for studs and plates)
    // lumber
    fourByFour: number;
    twoByFour: number;

    // Plywood (for exterior of house)
    plywood: number;

    // Drywall (for interior of house)
    drywall: number;
}
//waste interface for Gerald's output
export type IWaste = IMaterials;

//purchase interface for Gerald's output
export type IPurchase = IMaterials;

//customer interface for Gerald's output
export interface ICustomer extends IHouse, IMaterials {}
