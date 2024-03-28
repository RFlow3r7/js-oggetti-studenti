console.log('Esercizio JS Studenti');

// Creazione Array Studenti
const studenti = [
    {
        name: 'Andrea',
        lastname: 'Fiore',
        age: 28
    },
    {
        name: 'Luigi',
        lastname: 'Rossi',
        age: 30
    },
    {
        name: 'Marco',
        lastname: 'Fizzo',
        age: 32
    }
];


studenti.forEach(studente => {
    console.log(`name: ${studente.name}`);
    console.log(`lastname: ${studente.lastname}`);
    console.log(`age: ${studente.age}`);
});

// Aggiunta nuovo studente nell'array
function aggiungiStudente(name, lastname, age) {
    const NuovoStudente = {
        name: name,
        lastname: lastname,
        age: age
    };
    studenti.push(NuovoStudente);
    aggiornaInterfaccia();
}

// Funzione per aggiornare l'interfaccia HTML
function aggiornaInterfaccia() {
    const studentlist = document.getElementById('student-list');
    studentlist.innerHTML = '';
    studenti.forEach(studente => {
        const row = `
            <tr>
                <td>${studente.name}</td>
                <td>${studente.lastname}</td>
                <td>${studente.age}</td>
            </tr>
        `;
        studentlist.innerHTML += row;
    });
}

// Invio del modulo per aggiungere uno studente

document.getElementById('form-add-members').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('last_name').value
    const age = document.getElementById('age').value
    aggiungiStudente(name, lastname, age);
    this.reset()
});
