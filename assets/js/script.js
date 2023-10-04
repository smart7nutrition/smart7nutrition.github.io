const arrayNum = {
    a: 1,
    b: 2,
    c: 4,
    d: 8,
    e: 16,
};

const buttonHitung = document.querySelector('#hitung');
const codeHuruf = document.querySelector('#codeHuruf');

buttonHitung.addEventListener('click', () => {
    // input dipecah, misal abc jadi ['a','b','c']
    let arrValue = [...codeHuruf.value];

    let total = 0;
    arrValue.forEach((element) => {
        total = total + arrayNum[element];
    });

    alert(`Kamu lahir pada tanggal: ${total}`);
});