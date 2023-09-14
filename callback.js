const calculator = (a, b, callback) => {
  callback(a + b);
};

const displayer = (something) => {
  console.log(something);
};
calculator(5, 10, displayer);
