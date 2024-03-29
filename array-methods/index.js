/* 
    ---------- Array-Methoden (Mit Callback Funktion) ----------
    Callback Funktionen (kurz Callbacks) sind Funktionen, 
    die als Parameter an andere Funktionen uebergeben werden
    und im Verlauf der empfangen Funktionen aufgerufen werden.
    Die empfangende und damit sozusagen "darueberliegende" Funktion
    wird als sog. "higher-order-function" bezeichnet.

    Es gibt eine ganze Reihe von Array-Methoden, die Callbacks annehmen,
    um ihre Verwendung so flexibel wie moeglich zu machen.
*/
// Array.every(callback) ueberprueft, ob jeder der Werte im Array einen Test, der im Callback definiert ist, besteht.
// Randfall: Bei leerem Array ist das Ergebnis per Definition immer true
const numbers = [2,4,6,8];
const allEven = numbers.every((element) => element % 2 === 0);
console.log(allEven); // true

// Array.some(callback) ueberprueft analog zu every, ob mindestens einer der Werte im Array den definierten Test besteht.
// Randfall: Bei leerem Array ist das Ergebnis per Definition immer false
const names = ['peter', 'gehardt', 'angela'];
const hasNameWithP = names.some((element) => element.toLowerCase().startsWith('p'));
console.log(hasNameWithP); // true

// Array.find(callback) liefert das erste Element, das den Test im Callback erfuellt, als Rueckgabewert zurueck.
// Folgewerte, die den Test erfuellen, werden ignoriert.
// Ist kein entsprechender Wert zu finden, gibt die Methode undefined zurueck.
const nameStartingWithP = names.find((element) => element.toLowerCase().startsWith('p'));
console.log(nameStartingWithP); // peter

// Array.findIndex(callback) liefert den Index des ersten Element, das den Test im Callback erfuellt, als Rueckgabewert zurueck.
// Folgewerte, die den Test erfuellen, werden ignoriert.
// Ist kein entsprechender Wert zu finden, gibt die Methode -1 als Index zurueck.
const indexNameStartingWithP = names.findIndex((element) => element.toLowerCase().startsWith('p'));
console.log(indexNameStartingWithP); // 0


// Array.filter(callback) liefert eine Arraykopie aller Werte, die den Test im Callback erfuellen, als Rueckgabewert zurueck.
// Ist kein entsprechender Wert zu finden, gibt die Methode ein leeres Array zurueck
const randomNums = [1,2,3,4,5,6,7];
const odds = randomNums.filter((element) => element % 2 !== 0);
console.log(odds); // [1,3,5,7]


// Array.forEach(callback) fuehrt fuer jedes der Elemente im Array die Callback Funktion aus.
// Das Callback erhaelt immer das aktuelle Element, des aktuellen Index und das Array selbst.
// forEach liefert KEINEN Rueckgabewert
randomNums.forEach((element, index) => {
    console.log('index, wert:', index, element);
});


// Array.map(callback) liefert ein neues Ergebnisarray, dass aus den Ergbnissen des Callbacks fuer jedes Element besteht.
// Das Callback erhaelt immer das aktuelle Element, des aktuellen Index und das Array selbst. 
// Und muss immer einen sinnvollen Wert zurueckgeben.
const uncapitalizedNames = ['peter', 'angela', 'matthias', 'tinkerbell'];
const capitalizedNames = uncapitalizedNames.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
});
// const capitalizedNames = uncapitalizedNames.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalizedNames);



/* 
    Array.reduce() wird immer dann verwendet, wenn aus einem Array ein Ergebnis eines einfacheren Datentyps entstehen soll.
    Uebliches Beispiel: Aus einem Array mit Zahlen soll eine Summe errechnet werden; Array(Zahlen) -> Zahl.
    Die Methode erhaelt zwei Parameter:
    - reducerCallback(accumulator, currentValue)
    - initialValue // Der optionale Startwert. Wird manchmal als Trick zum Einstellen des Ergebnisdatentyps verwendet.
*/
const someNumbers = [1,2,3,4,5];

// Errechne Summe der Zahlen in someNumbers klassisch mit einer For-Schleife
let sum = 0;
someNumbers.forEach(currentValue => sum += currentValue);
console.log(sum);

// Errechne Summe der Zahlen in someNumbers mithilfe von reduce()
const reducedSum = someNumbers.reduce((accumulator, currentValue) => {
    return accumulator+currentValue;
}, 0);
console.log(reducedSum);

/* 
    Moechten wir aus dem Array mit Zahlen einen String mit allen Zahlen als Ziffern zusammensetzen,
    bietet es sich an, den Parameter initialValue auf einen leeren String zu setzen,
    denn nun kann problemlos das erste Ergebnis des Callbacks daraufgerechnet werden.
*/
const allNumbersAsString = someNumbers.reduce((accumulator, currentValue) => accumulator.concat(currentValue), "");
console.log(allNumbersAsString);


/* 
    Javascript bietet eine eingebaute Array-Methode zum Sortieren der Elemente.
    Array.sort(compareFunc) nimmt als Parameter üblicherweise eine Vergleichsfunktion entgegen.
    Diese Vergleichsfunktion spezifiziert wie Wertepaare aus dem Array vergleichen werden sollen,
    um sie entsprechend des gewünschten Ergebnisses zu sortieren.

    ACHTUNG: array.sort() sortiert das Originalarray. Soll das nicht geschehen, muss eine Kopie verwendet werden!
*/
const nums = [6,4,4,8,1,12];

// Vergleichsfunktion für aufsteigende Reihenfolge
function compareNumsAsc(a,b) {
    // Wenn erster Wert VOR den zweiten Wert gehört,
    // gebe -1 zurück
    if (a < b) return -1;

    // Wenn erster Wert HINTER den zweiten gehört,
    // gebe 1 zurück
    if (a > b) return 1;

    // Ansonsten (beide gleichwertig) gebe 0 zurück
    return 0;
}

// Vergleichsfunktion für absteigende Reihenfolge
function compareNumsDesc(a,b) {
    // Wenn erster Wert HINTER den zweiten Wert gehört,
    // gebe -1 zurück
    if (a > b) return -1;

    // Wenn erster Wert VOR den zweiten gehört,
    // gebe 1 zurück
    if (a < b) return 1;

    // Ansonsten (beide gleichwertig) gebe 0 zurück
    return 0;
}

nums.sort(compareNumsDesc);
console.log(nums);


const people = [
    {
        name: 'karl',
        age: 32
    },
    {
        name: 'jochen',
        age: 28
    },
    {
        name: 'henriette',
        age: 28
    },
    {
        name: 'alfred',
        age: 28
    },
    {
        name: 'sabine',
        age: 64
    },
    {
        name: 'peter',
        age: 12
    },
    {
        name: 'helmut',
        age: 12
    },
];

const peopleCopy = structuredClone(people);


// Sortiere Personenobjekte nach Alter
peopleCopy.sort((personA, personB) => {
    if (personA.age < personB.age) return -1;
    if (personA.age > personB.age) return 1;
    return 0;
});

// Sortiere Personenobjekte nach Name
peopleCopy.sort((personA, personB) => {
    if (personA.name.toLocaleLowerCase() < personB.name.toLocaleLowerCase()) return -1;
    if (personA.name.toLocaleLowerCase() > personB.name.toLocaleLowerCase()) return 1;
    return 0;
});
console.log(peopleCopy);


/* 
    Möchten wir nach zwei Aspekten der Objekte sortieren (z.B. Alter und Name),
    müssen wir uns eine Gewichtung überlegen.
    Soll z.B. grundsätzlich nach Alter und innerhalb der Altersgruppen nach Name sortiert werden?
    Order anders herum?
*/