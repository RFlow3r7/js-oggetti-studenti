console.log('Milestone 1');

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