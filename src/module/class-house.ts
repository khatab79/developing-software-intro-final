import { IHouse } from "../calculator/interfaces";

export class House implements IHouse {
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

    constructor(
        name: string,
        width: number,
        length: number,
        outsideWallArea: number,
        insideWallArea: number,
        ceilingArea: number
    ) {
        this.name = name;
        this.width = width;
        this.length = length;
        this.outsideWallArea = outsideWallArea;
        this.insideWallArea = insideWallArea;
        this.ceilingArea = ceilingArea;
    }
}
