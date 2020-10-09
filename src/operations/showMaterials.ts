export function outPut(
                    twoByFour  : number,
                    fourByFour : number,
                    plywood    : number,
                    drywall    : number) {
    //display the parameters on the command line
    const output = ` 
            "materials": {
                "lumber": {
                    "2x4": ${twoByFour},
                    "4x4": ${fourByFour}
                },
                "plywood": {
                    "4x8": ${plywood}
                },
                "drywall": {
                    "4x8": ${drywall}
                }`;

    return output;
}
