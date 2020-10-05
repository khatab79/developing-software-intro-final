**Table of Contents**
  1. [Overview](./readme.md)
  2. [Scenario](./scenario.md)
  3. [Setup Instructions](./setup-instructions.md)
  4. [Software Instructions](./software-instructions.md)


---
<br/>
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


# Commands

## calc-house-materials
This command has a function calcHouseMaterial.

[Read More](./readme_commands/calc-house-materials.md)

## get-house-materials
This command has a function getHouseMaterials.

[Read More](./readme_commands/get-house-materials.md)

<br/>

--- 

<br/>

[Previous: Setup Instructions](./setup-instructions.md)| [Home: Overview](./readme.md) 


[yargs]: https://www.npmjs.com/package/yargs