[Return to Software Instructions](../software-instructions.md) 

[Return to list](../../src/calculator/readme.md) 

## Usage
takes materials and waste as parameters
and returns purchasr (2x4, 4x4 plywood, drywall) 


and return wood calculation

## Code of the function: 

```javascript
// this takes the result of the calcMaterials and calcWaste functions
// and results in the format specified for the purchase section of the interface
export function calcPurchase(materials: number, waste: number) {
    return materials + waste;
}
```

## test

```Javascript
import { IPurchase } from "../calculator/interfaces";

import { Materials } from "../module/class-materials";
import { Waste } from "../module/class-waste";
import { calcPurchase } from "../calculator/index";

export class Purchase implements IPurchase {
    // 2x4's (for studs and plates)
    // lumber:{
    twoByFour: number;
    fourByFour: number;

    // Plywood (for exterior of house)
    plywood: number;

    // Drywall (for interior of house)
    drywall: number;

    constructor(materials: Materials, waste: Waste) {
        this.twoByFour = calcPurchase(materials.twoByFour, waste.twoByFour);
        this.fourByFour = calcPurchase(materials.fourByFour, waste.fourByFour);
        this.plywood = calcPurchase(materials.plywood, waste.plywood);
        this.drywall = calcPurchase(materials.drywall, waste.drywall);
    }
}

```



<br/>
<br/>

[Return to Software Instructions](../software-instructions.md) 