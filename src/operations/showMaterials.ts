import { Materials } from "../module/class-materials";

export function outPutMaterials(materials: Materials) {
    //display the parameters on the command line
    const output = ` 
            "materials": {
                "lumber": {
                    "2x4": ${materials.twoByFour},
                    "4x4": ${materials.fourByFour}
                },
                "plywood": {
                    "4x8": ${materials.plywood}
                },
                "drywall": {
                    "4x8": ${materials.drywall}
                },`;

    return output;
}
