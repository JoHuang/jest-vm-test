# jest-vm-test

## Run in node v12.13.1
1. `yarn` to install packages
2. `npx jest` to test

### Result

```
 PASS  __tests__/test.test.js
  ✓ VM Filename: path.resolve (10 ms)
  ✓ VM Filename: relative to test.js (4 ms)
  ✓ VM Filename: relative to project (3 ms)

  console.log
    hi33

      at Object.<anonymous> (testInRequire.js:4:9)

  console.log
    hi33

      at testInVm.js:4:9

  console.log
    hi33

      at ../testInVm.js:4:9

  console.log
    hi33

      at testInVm.js:4:9

------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |      20 |    33.33 |       0 |      20 |                   
 jest.config.js   |       0 |        0 |       0 |       0 | 1-12              
 testInRequire.js |     100 |      100 |     100 |     100 |                   
 testInVm.js      |       0 |        0 |       0 |       0 | 1-4               
------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.937 s, estimated 2 s
```

#### There is no coverage report of testInVm.js.


# C8 works

However, it works with C8.

```
c8 node runnerForC8.js
```
### Result

```
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |    85.71 |     100 |     100 |                   
 runnerForC8.js   |     100 |      100 |     100 |     100 |                   
 testInRequire.js |     100 |      100 |     100 |     100 |                   
 testInVm.js      |     100 |       50 |     100 |     100 | 2                 
------------------|---------|----------|---------|---------|-------------------
```
