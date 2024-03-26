console.log('Esercizio JS Studenti');

// Milestone 1 //
//Creazione Array Studenti//

let studenti = [
    {
        Nome: 'Andrea',
        Cognome: 'Fiore',
        Eta: 28
    },

    {
        Nome: 'Luigi',
        Cognome: 'Rossi',
        Eta: 30
    },

    {
        Nome: 'Marco',
        Cognome: 'Fizzo',
        Eta: 32
    },
]

// Milestone 2 //
// Chiedi all'utente di inserire nome, cognome ed età del nuovo studente
let nuovoNome = prompt("Inserisci nome del nuovo studente: ");
let nuovoCognome = prompt("Inserisci cognome del nuovo studente: ");
let nuovoEta = parseInt(prompt("inserisci l'età del nuovo studente: "));

// Creazione nuovo oggetto studente in base a cosa inserisce l'utente //

let nuovoStudente =
{
    Nome: nuovoNome,
    Cognome: nuovoCognome,
    Eta: nuovoEta
};


// Aggiunta studente nell'array già esistente //
studenti.push(nuovoStudente);

//Ciclo For per ciclare//

// for (let i = 0; i < studenti.length; i++) {
// console.log(`Nome: ${studenti[i].Nome}`);
// console.log(`Cognome: ${studenti[i].Cognome}`);
// console.log(`Età: ${studenti[i].Eta}`);
// }


studenti.forEach(studente => {
    console.log(`Nome: ${studente.Nome}`);
    console.log(`Cognome: ${studente.Cognome}`);
    console.log(`Età: ${studente.Eta}`);
});