# Focus College ACSD Final

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

![StarGazer]

Authur: `Khatab AL-DAGHISTANI` 

 **© 2020 StarGazer.**

<br/>

# Scenario

Gerlad, our favorite contractor, has asked for a new application; it's very similar to other applications that he has had written.

# Gerald's Needs

  Gerald would like an application that gives him his entire list of supplies needed to build a house. He has a specific list of supplies that he's resposible for purchasing.
  
  - Gerald must purchase:
    - 2x4's (for studs and plates)
    - 4x4's (for posts)
    - Plywood (for exterior of house)
    - Drywall (for interior of house)

  - Gerald will only purchase:
    - 8 foot long 2x4's
    - 8 foor long 4x4's
    - 4x8 foot sheets of plywood
    - 4x8 sheets of drywall.

  - He needs enough plywood to completely cover the exterior walls of the house.

  - He needs enough drywall to completely cover the interior walls of the house, and the ceiling.

  - He needs enough 2x4's and 4x4's to frame the walls. He would like the numbers of plates, studs, and posts to be returned seperately.

  - The smallest wall he will build is 4 feet in length.

  - The largest wall he will build is 60 feet in length.

  - He would like the program to default the wall length parameters to inches, but have an option to insert feet.

  - He would like to save houses by customer name

  - He would like to recall houses by customer name

# Output

Gerald has a specific output requirement, as he needs to feed this result into another application. He's given us a sample below:

```json
{
    "name": "Holbrook",
    "house": {
        "width": 103,
        "length": 103,
        "outsideWallArea": 39552,
        "insideWallArea": 36864,
        "ceilingArea": 9216
    },
    "materials": {
        "lumber": {
            "2x4": 40,
            "4x4": 4
        },
        "plywood": {
            "4x8": 9
        },
        "drywall": {
            "4x8": 10
        }
    },
    "waste": {
        "lumber": {
            "2x4": 4,
            "4x4": 1
        },
        "plywood": {
            "4x8": 1
        },
        "drywall": {
            "4x8": 1
        }
    },
    "purchase": {
        "lumber": {
            "2x4": 44,
            "4x4": 5
        },
        "plywood": {
            "4x8": 10
        },
        "drywall": {
            "4x8": 11
        }
    }
}
```

In this sample, you can see that Gerald needs the materials required seperate from the waste, and then a third section to total the purchase. There are also three attributes of the house added that can be calculated:
  - outsideWallArea
  - insideWallArea
  - ceilingArea
<br/>
--- 
<br/>

# Setup Instructions

### *TypeScript Project*

Make sure you have the latest version of node and npm.

```
node -v
v10.19.0
```
and
```
npm -v
6.14.4
```

* To install [npm] please, check this link [npm]

* To install [typescript] please, check this link [typescript]

---

## Running the Application

To **build** the application
```
tsc
```
To **run** the application using node

```
node dist/index.js 
```

Or by :

```
npm run start
```

To **compile & start** the application using npm

```
npm run start:dev
```
* This script will run:
    * `npm run  build:compile`
    * `npm run start`
  
<br/>

--- 

<br/>

### *Automate Linting*

* Run the following commands to setup [ESLint] in your *TypeScript project*.

```
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
* Create an .eslintrc file(either by touching command or by adding new file from your vitual studio). And add the following:

```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```
* Create an .eslintignore in order to prevent [ESLint] from linting stuff we don't want it by adding the following:

```
node_modules
dist
```

Adding a lint script in your project **package.json** by writing 

**_for further information about the installation and adding plugins please click [ESLint]_**

---


## Running the Application


To **build** the application
```
tsc
```
To **run** the application and only compile (without running [ESLint] ) 

```
npm run start notest
```
or

```
npm run start:dev:notest
```
- This script will run:
  - `npm run build`
  - `npm run start`



To **build & run** the application using npm and lint

```
npm run start:dev
```

- This script will run:
  - `npm run build:lint`
  - `npm run start`

<br/>

--- 

<br/>

### *Automate Linting*

#### *_Installation and setup_*

* Run the following commands to setup [prettier] in your *TypeScript project*.

```
npm install --save-dev --save-exact prettier
```

* Then, create an empty config file to let editors and other tooling know you are using Prettier:

```
echo {}> .prettierrc.json
```
adding the following script to new **.prettierrc.json**

```
{
    "tabWidth": 4,
    "bracketSpacing": true
}
```
* Next, create a .prettierignore file and add the following:
```
dist
node_modules
```

* finally update the package.json to let pritter running.



---


## Running the Application


To **build** the application
```
tsc
```
To **run** the application and only compile (without running [prettier] and  [ESLint] ) 

```
npm run start notest
```
or

```
npm run start:dev:notest
```
- This script will run:
  - `npm run build`
  - `npm run start`



To **build & run** the application using npm and lint

```
npm run start:dev
```

- This script will run:  
  - `npm run build:prettier`
  - `npm run build:lint`
  - `npm run start`

<br/>

--- 

<br/>


### *4. Adding [testing] (mocha and chai) to the project*

#### *_Installation and setup_*

* Run the following commands to setup [testing] in your *TypeScript project*.

```
npm install chai mocha ts-node @types/chai @types/mocha --save-dev
```

* add new folder to the project named **tests**
* add new file **hello.spec.ts** under folder **test**
* add new file for hello function under **src** 
* write the following to each files:

1. hello function
```
export function sayHello(name: string) {
    return `Hello ${name}`;
}
```

2. index

```
//basic function to console hello world
import { sayHello } from "./hello";


//call sayHello
const world = "world";
sayHello(world);

```
3. hello.spec.ts

```
import { sayHello } from "../src/hello";
import { expect } from "chai";
import "mocha";

//here the test condtion either its pass pr not.
describe("sayHello function", () => {
    it("should return Hello khatab", () => {
        const result = sayHello("khatab");
        console.log(result);
        expect(result).to.equal("Hello khatab");
    });
});

```

* finally update the package.json to let test running.




---


## Running the Application


To **build** the application
```
tsc
```
To **run** the application and only compile (without running [testing], [prettier] and  [ESLint] ) 

```
npm run start notest
```
or

```
npm run start:dev:notest
```
- This script will run:
  - `npm run build`
  - `npm run start`



To **build & run** the application using npm and lint

```
npm run start:dev
```

- This script will run:  
  - `npm run build:test`
  - `npm run build:prettier`
  - `npm run build:lint`
  - `npm run start`


<br/>

--- 

<br/>


### *5. Adding [nyc]  (Istanbul) to the project*

#### *_Installation and setup_*

* Run the following commands to setup [nyc] in your *TypeScript project*.

```
npm i -D nyc
```
then for istanbul 
```
npm install @istanbuljs/nyc-config-typescript
```

* create .nycrc.json :
```
{
    "extends": "@istanbuljs/nyc-config-typescript",
    "all": true,
    "check-coverage": true,
    "reporter": ["text","html"],
    "branches": 30,
    "lines": 30,
    "functions": 30,
    "statements": 30,
    "include": ["src/**/*.ts"],
    "exclude": ["src/index.ts"]

}

```

* add `.nyc_output` and `
coverage` to all ignore files.

* finally update the package.json to let test nyc running.

---
## Running the Application


To **build** the application
```
tsc
```
To **run** the application and only compile (without running [nyc] istanbul testing, [prettier] and  [ESLint] ) 

```
npm run start notest
```
or

```
npm run start:dev:notest
```
- This script will run:
  - `npm run build`
  - `npm run start`



To **build & run** the application using npm and lint

```
npm run start:dev
```

- This script will run:  
  - `npm run build:test`
  - `npm run build:prettier`
  - `npm run build:lint`
  - `npm run start`


<br/>

--- 

<br/>

# Software Instructions

"Gerald's Construction Calculator"

<br/>

--- 

<br/>

### *Adding [yargs] to the project*

#### *_Installation and setup_*

* Run the following commands to setup [yargs] in your *TypeScript project*.

```
npm i yargs

```
yargs has type definitions at @types/yargs
```
npm i @types/yargs --save-dev
```

---


## Running the Application


To **build** the application
```
tsc
```
To **run** the application and only compile (without running [yargs], [nyc] istanbul testing, [prettier] and  [ESLint] ) 

**_NOTE: There are no tests for Yargs, pls dont use  ~~npm run start:dev~~_**. only `npm run start` or `npm run start:dev:notest`

<br/>

# functions

## calc-house-materials
This command has a function calcHouseMaterial.

[Read More](./src/commands/calc-house-materials.md)

## get-house-materials
This command has a function getHouseMaterials.

[Read More](./src/commands/get-house-materials.md)


## calcHouseMaterials(
    name   : string,
    width  : number,
    length : number,
    units  : boolean,
)
This function takes two numbers (width, length),  string (name), boolean (units). And return to output.

[Read More](./src/commands/calc-house-materials.md)



## getHouseMaterials( name: string)
This function take string(name) and return output. 

[Read More](./src/commands/get-house-materials.md)


## calcWallLumber(inches: number)
This function take number(inches) and return studs, plates and posts for one wall. 

[Read More](./calculator/calcWallLumber.md)


## calcDrywall(widthInInches: number, lengthInInches: number)
This function take number(widthInInches, lengthInInches) and return total number of draywall. 

[Read More](././calculator/calcDrywall.md)


## calcPlywood(widthInInches: number, lengthInInches: number)
This function take number(widthInInches, lengthInInches) and return total number of Plywood. 

[Read More](./calculator/calcPlywood.md)

calcPlywood(widthInInches: number, lengthInInches: number)

## calcMaterials(widthInInches: number, lengthInInches: number)
This function take number(widthInInches, lengthInInches) and return total number of Materials. 

[Read More](./calculator/calcMaterials.md)


## calcWaste(item: number)
This function take number(item) and return total return. 

[Read More](./calculator/calcWaste.md)


## calcWaste(item: number)
This function take number(item) and return total return. 

[Read More](./calculator/calcPurchase.md)



[Gerald_Img]: https://www.safetyandhealthmagazine.com/ext/resources/images/2016/04-april/construction-safety.jpg?1458739490

[StarGazer]: https://steamcdn-a.akamaihd.net/steam/apps/828250/capsule_616x353.jpg?t=1527113772

[npm]: https://www.npmjs.com/get-npm

[typescript]: https://www.typescriptlang.org/download

[ESLint]: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/

[prettier]: https://prettier.io/docs/en/install.html

[testing]: https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2

[nyc]: https://www.npmjs.com/package/nyc

[yargs]: https://www.npmjs.com/package/yargs