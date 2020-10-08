// This function takes Parameters ==>
// width  as number
// length as number
// isFeet as boolean
// name   as string
// and console.log to output the parameters passed.

import { outPut } from "../operations/showCustomer";

export function calcHouseMaterials(
    name: string,
    width: number,
    length: number,
    units: boolean
) {
    //create a customer with minimum requirement (name and two dimensions) feet or inches

    //add the calculation to customer

    //calculate waste

    //calculate total purchase (woods required + waste)
    // Purchase =(calculation + waste);

    //organise the output to meet the specification requirement,
    //by parsing un object later
    const output = outPut(name, width, length);

    return output;
}
// This function takes Parameter ==> name as string
// and console.log to output the parameter passed.
export function getHouseMaterials(name: string) {
    //display the parameters on the command line

    //get a customer by name

    //organise the output to meet the specification requirement,
    //by parsing un object later
    const output = outPut(name, 0, 0);

    return output;
}
