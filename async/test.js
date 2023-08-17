const test = () => {
  console.time("test");
  for (let i = 0; i < 1000000000; i++) {
    //
  }
  console.log("이것이다다아아");

  console.timeEnd("test");
};
test();

console.log("====================================");

const test2 = () => {
  console.time("test");
  setTimeout(() => {
    for (let i = 0; i < 1000000000; i++) {
      //
    }
    console.log("이것이다다아아");
  }, 0);
  console.timeEnd("test");
};
test2();
