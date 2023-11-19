function acc(a) {
  return function () {
    console.log(++a);
  };
}
const res = acc(0);
res(); //1
res(); //2
