const apples = 20;
const oranges = 30;

const appleGleichOrange = apples === oranges;
const appleNichtGleich = apples !== oranges;
const appleGrosserhOrange = apples > oranges;
const appleKleineroderGleichOrange = apples <= oranges;
const orangeGrosserApples = apples > oranges;

console.log({ appleGleichOrange });
console.log({ appleNichtGleich });
console.log({ appleGrosserhOrange });
console.log({ appleKleineroderGleichOrange });
console.log({ orangeGrosserApples });

const mangoes = 5;

const aufgabe6 = mangoes * apples > mangoes + oranges;
console.log({ aufgabe6 });
const aufgabe7 = apples - mangoes < oranges / mangoes;
console.log({ aufgabe7 });
const aufgabe8 = (mangoes === apples) === oranges;
console.log({ aufgabe8 });
const aufgabe9 = apples % mangoes === oranges % mangoes;
console.log({ aufgabe9 });
const aufgabe10 = mangoes + apples > oranges - mangoes;
console.log(!aufgabe10);
