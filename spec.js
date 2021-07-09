

describe('moving all postive integers to the left and negative integers to the right', function() {

  it('move correctly', function() {
    expect(moveElement([6, 4, -3, 5, -2, -1, 0, 1, -9])).toEqual([6, 4, 1, 5, 0, -1, -2, -3, -9]);
    expect(moveElement([-6, 4, -3, 5, -2, 1, -9])).toEqual([1, 4, 5, -3, -2, -6, -9 ]);
    expect(moveElement([6, -5, 4])).toEqual([6, 4, -5]);
    expect(moveElement([-1, -2, -3, -4 , -5, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, -5, -4, -3, -2, -1]);
  });

  it('empty array', function() {
    expect(moveElement([])).toEqual([]);
  });


  it('nothing changes', function() {
    expect(moveElement([1,2,3,4,5,6,7,8,9])).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(moveElement([0,0,0,0,0,0,0,0,0])).toEqual([0,0,0,0,0,0,0,0,0]);
    expect(moveElement([-1,-1,-1])).toEqual([-1,-1,-1]);
  });
});


describe('test if transforming from flatten to nested object successfully', function() {
  it('transform successfully', function() {
    expect(changeStructure({ 'A': 1, 'B.A': 2, 'B.B': 3, 'CC.D.E': 4, 'CC.D.F': 5})).toEqual({ A: 1, B: { A: 2, B: 3 }, CC: { D: { E: 4, F: 5 } } });
  });
});