# ts-mock-factory

Simple Mock factory so that you do not have to initialize each field of a class individually, in fact you can use classes like interfaces and just completely throw away the entire purpose of interfaces in typescript. 

### (Dev)Dependencies 
reflect-metadata
typescript

ts.config:
```json
    "strictPropertyInitialization": false,             /* Check for class properties that are declared but not set in the constructor. */
    "experimentalDecorators": true,                      /* Enable experimental support for legacy experimental decorators. */
```

### Usage
```ts
MockFactory.mock<YourClass>(YourClass);

or

MockFactory.mock<YourClass>(YourClass, IdGeneratorCallback(), CustomizerCallback());
