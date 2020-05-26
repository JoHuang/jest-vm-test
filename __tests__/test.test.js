require('../testInRequire');
const vm  = require('vm');
const path = require('path');
const fs = require('fs');
const filePath = path.resolve("testInVm.js");
const content = fs.readFileSync(filePath, {encoding: 'utf8'});

test("VM Filename: path.resolve", () => {
    var c = {c : 0};
    vm.runInNewContext(content,{c,console}, {filename: filePath});
    expect(c.c).toBe(3);
});

test("VM Filename: relative to test.js", () => {
    var c = {c : 0};
    vm.runInNewContext(content,{c,console}, {filename: '../testInVm.js'});
    expect(c.c).toBe(3);
});

test("VM Filename: relative to project", () => {
    var c = {c : 0};
    vm.runInNewContext(content,{c,console}, {filename: 'testInVm.js'});
    expect(c.c).toBe(3);
});
