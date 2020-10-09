import { Waste } from "../module/class-waste";

export function outPutWaste(waste: Waste) {
    //display the parameters on the command line
    const output = ` 
            "waste": {
                "lumber": {
                    "2x4": ${waste.twoByFour},
                    "4x4": ${waste.fourByFour}
                },
                "plywood": {
                    "4x8": ${waste.plywood}
                },
                "drywall": {
                    "4x8": ${waste.drywall}
                },`;

    return output;
}
