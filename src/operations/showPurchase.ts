import { Purchase } from "../module/class-purchase";

export function outPutPurchase(purchase: Purchase) {
    //display the parameters on the command line
    const output = ` 
            "purchase": {
                "lumber": {
                    "2x4": ${purchase.twoByFour},
                    "4x4": ${purchase.fourByFour}
                },
                "plywood": {
                    "4x8": ${purchase.plywood}
                },
                "drywall": {
                    "4x8": ${purchase.drywall}
                },`;

    return output;
}
