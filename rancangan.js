class Queue {
  constructor(name) {
    this.name = name;
  }

  timeRandom() {
    return Math.ceil(Math.random() * 10) * 1000;
  }

  start() {
    let i = 0;
    while (i < this.name.length) {
      let janji = new Promise((resolve) => resolve(this.name[i]));

      let eksekusiJanji = async () => {
        try {
          let nama = await janji;
          console.log(
            `bang ${nama} sudah selesai memesan di waktu ${
              this.timeRandom() / 1000
            } menit`
          );
        } catch (err) {
          console.log(err);
        }
      };
      eksekusiJanji();
      i++;
    }
  }
}
module.exports = Queue;
