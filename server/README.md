npm init -y

- Prod dependecies

npm i express pg-promise

- Dev dependecies

npm i -D typescript ts-node
npm i -D @types/node @types/express @types/pg-promise

- Typescript

npm i -D typescript
npx tsc --init

- Jest configuration

npm i -D jest typescript
npm i -D ts-jest @types/jest
npx ts-jest config:init
npx jest