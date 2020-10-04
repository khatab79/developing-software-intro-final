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

[Previous: Scenario](./scenario.md) | [Next: Software Instructions](./software-instructions.md)




[npm]: https://www.npmjs.com/get-npm

[typescript]: https://www.typescriptlang.org/download