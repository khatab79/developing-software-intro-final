import { House } from "../module/class-house";

export function outPutHouse(house: House) {
    //display the parameters on the command line
    const output = ` 
    {
        name: "${house.name}",
            "house": {
                "width": ${house.width},
                "length": ${house.length},
                "outsideWallArea": ${house.outsideWallArea},
                "insideWallArea": ${house.insideWallArea},
                "ceilingArea": ${house.ceilingArea}
            },`;

    return output;
}
