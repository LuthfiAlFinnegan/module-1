const tryPromise = new Promise((resolve, reject) => {
  let isError = false;
  if (isError) reject("Error");
  else resolve("Success");
});

const asyncAwait = async () => {
  console.log("satu ");
  await tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"));
  console.log("dua");
};

// asyncAwait();
const tryAndCatch = async () => {
  try {
    let age = 15;
    if (age < 17) {
      throw new Error("Belum cukup umur");
    }
    let result = await tryPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

tryAndCatch();
