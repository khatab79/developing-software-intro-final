**Table of Contents**
  1. [Overview](./readme.md)
  2. [Scenario](./scenario.md)
  3. [Setup Instructions](./setup-instructions.md)
  4. [Software Instructions](./software-instructions.md)


---
<br/>
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

[Previous: Scenario](./scenario.md) | [Next: Software Instructions](./software-instructions.md)




[npm]: https://www.npmjs.com/get-npm

[typescript]: https://www.typescriptlang.org/download

[ESLint]: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/