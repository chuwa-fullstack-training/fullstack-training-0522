what is the result of ["1","2","3"].map(parseInt) ? Why [JS]


["1","2","3"].map((value, index)=> {
  return parseInt(value, index);
});

// parseInt(string, radix) -> map(parseInt(value, index))
/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN















