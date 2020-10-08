// This function takes Parameters ==>
// width  as number
// length as number
// isFeet as boolean
// name   as string
// and console.log to output the parameters passed.

import { outPut } from "../operations/showCustomer";

const BEAM_WIDTH = 3.5;
const BOARD_LENGTH = 8 * 12;
const STUDS_OFFSET = 16;

// beams are required every 20 feet at minimum
const BEAMS_REQUIRED_EVERY_INCHES = 20 * 12;
const FULL_BOARDS_IN_SECTION = Math.floor(
    BEAMS_REQUIRED_EVERY_INCHES / BOARD_LENGTH
);
const FULL_BOARD_SECTION_SIZE = FULL_BOARDS_IN_SECTION * BOARD_LENGTH;

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

    console.log(calcWallLumber(width), calcWallLumber(length));

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

// any number of inches past BEAMS_REQUIRED_EVERY_INCHES will return 1
// any number of inches below or equal to BEAMS_REQUIRED_EVERY_INCHES return 0
function isBeamRequired(inches: number): number {
    // negative numbers are zero
    const wallLengthOverMinRequired = Math.max(
        inches - BEAMS_REQUIRED_EVERY_INCHES,
        0
    );

    // remove decimals
    const wholeNumber = Math.ceil(wallLengthOverMinRequired);

    // returns 1 (at least one beam required ) or 0 (no beams required)
    const isBeamRequired = Math.min(wholeNumber, 1);

    return isBeamRequired;
}

function getFullSections(inches: number, beams: number) {
    // how many inches will we remove from a section between beams to get to the last full board
    const inchesReducedPerSection =
        BEAMS_REQUIRED_EVERY_INCHES - FULL_BOARD_SECTION_SIZE;

    // how big is the last section if all beams are at BEAMS_REQUIRED_EVERY_INCHES
    const lastSectionSize =
        inches - beams * (BEAMS_REQUIRED_EVERY_INCHES + BEAM_WIDTH);

    // how many inches of boards can we add to the last section before it will add an additional beam to the structure
    const remainingBeforeNewBeam =
        BEAMS_REQUIRED_EVERY_INCHES - lastSectionSize;

    // how many complete portions of the inchesReducedPerSection can we move to the last section
    let fullSections = Math.floor(
        remainingBeforeNewBeam / inchesReducedPerSection
    );

    // even if we can FIT fullSections moved into the last portion, we might not HAVE them in our length
    fullSections = Math.min(fullSections, beams);

    // safeguard inches not requiring a beam and return value
    fullSections = fullSections * isBeamRequired(inches);

    return fullSections;
}

function getWallLengthOverMinimumRequiredBeforeBeam(inches: number): number {
    return Math.max(inches - BEAMS_REQUIRED_EVERY_INCHES, 0);
}

function getRequiredBeamsInLength(inches: number) {
    // for every 20 feet, we need one beam
    // we know our wall is at least 20 feet, so calculate the required beams for the REST of the wall
    // if our wall is under 20 feet, this will return zero
    const wallLengthOverMinRequired = getWallLengthOverMinimumRequiredBeforeBeam(
        inches
    );
    const wallLengthPlusBeam = BEAMS_REQUIRED_EVERY_INCHES + BEAM_WIDTH;
    const requiredBeams = Math.ceil(
        wallLengthOverMinRequired / wallLengthPlusBeam
    );

    return requiredBeams;
}

function getLastSectionSize(inches: number, beams: number) {
    const fullSections = getFullSections(inches, beams);
    const lastSectionSize =
        inches - beams * BEAM_WIDTH - fullSections * FULL_BOARD_SECTION_SIZE;

    return lastSectionSize;
}

function getPlatesInLength(inches: number) {
    // devide the length by 96 inches (8 feet) and round up
    // multiply by two because we're doing the top and bottom in one calculation
    return Math.ceil(inches / BOARD_LENGTH) * 3;
}

function getStudsInLength(inches: number) {
    // calculate the studs across
    // round up to account for the last one
    const studs = Math.ceil(inches / STUDS_OFFSET);

    // make sure we add an end piece if we have a perfect multiple of 16
    const isNotPerfectWidth = Math.min(inches % STUDS_OFFSET, 1);
    const perfectWidthExtension = isNotPerfectWidth * -1 + 1;
    return studs + perfectWidthExtension;
}

//function calcWallLumber takes inches as a parameter
//and returns the number of plates, studs, and posts required for a single wall
export function calcWallLumber(inches: number) {
    // get required beams
    const posts = getRequiredBeamsInLength(inches);
    const fullSections = getFullSections(inches, posts);
    const lastSectionSize = getLastSectionSize(inches, posts);

    const plates =
        getPlatesInLength(inches) * fullSections +
        getPlatesInLength(lastSectionSize);
    const studs =
        getStudsInLength(inches) * fullSections +
        getStudsInLength(lastSectionSize);

    return {
        plates,
        studs,
        posts,
    };
}
