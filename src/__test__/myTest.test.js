const { Test } = require("tslint");

test('match password',()=> {
    const password ="azerty00";
    const confirm ="azerty00";
    const valid = password === confirm;
    expect(valid).toBe(true);
})

test('match password error', ()=> {
    const password ="Azerty00";
    const confirm ="azerty00";
    const valid = password === confirm;
    expect(valid).toBe(false);
})
test('match password error lenght', ()=> {
    const password ="Azerty00";
    const confirm ="azerty000";
    const valid = password === confirm;
    expect(valid).toBe(false);
})