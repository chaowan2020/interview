const buildPath = (curr, val, keysArr, res) => {
    const key = keysArr.shift();
    if(!keysArr.length) {
        curr[key] = val;
        return res; // base case
    }
    if(!curr[key]) curr[key] = {}; // new an object
    return buildPath(curr[key], val, keysArr, res);
}
const changeStructure = obj => Object.keys(obj).reduce((res, item) => buildPath(res, obj[item], item.split('.'), res), {});


console.log(changeStructure({ 'A': 1, 'B.A': 2, 'B.B': 3, 'CC.D.E': 4, 'CC.D.F': 5}));
// { A: 1, B: { A: 2, B: 3 }, CC: { D: { E: 4, F: 5 } } }