const readline = require('readline');

const soal1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

soal1.question('Masukkan angka genap: ', (input) => {
  const x = parseInt(input);

  if (x < 0) {
    console.log('Tidak bisa input bilangan negatif');
  } else if (x % 2 !== 0) {
    console.log('Tidak bisa input bilangan ganjil');
  } else {
    const result = Math.sqrt(x).toFixed(3);
    console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
  }

  soal1.close();
});

