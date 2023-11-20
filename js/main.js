`use strict`;

/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/


//Creiamo una funzione
function generateTemplate() {
    //Creaiamo un array.
    const staff = [{
            nome: "Wayne",
            cognome: "Barnett",
            ruolo: "Founder & CEO",
            img: "wayne-barnett-founder-ceo.jpg",

        },

        {
            nome: "Angela",
            cognome: "Caroll",
            ruolo: "Chief Editor",
            img: "angela-caroll-chief-editor.jpg",

        },

        {
            nome: "Walter",
            cognome: "Gordon",
            ruolo: "Office Manager",
            img: "walter-gordon-office-manager.jpg",

        },

        {
            nome: "Angela",
            cognome: "Lopez",
            ruolo: "Social Media Manager",
            img: "angela-lopez-social-media-manager.jpg",

        },

        {
            nome: "Scott",
            cognome: "Estrada",
            ruolo: "Developer",
            img: "scott-estrada-developer.jpg",

        },

        {
            nome: "Barbara",
            cognome: "Ramos",
            ruolo: "Graphic Designer",
            img: "barbara-ramos-graphic-designer.jpg",

        },
    ];

    //Dichiariamo le variabili per il DOM, creiamo gli elementi,
    //li appendiamo e aggiungiamo le classi

    const container = document.getElementById("maincontent");
    const row = document.createElement("div");
    const col = document.createElement("div");
    const card = document.createElement("div");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    row.classList.add("row");
    col.classList.add("col-12", "col-lg-4", "col-md-6", "d-flex", "justify-content-center", "pb-3");
    card.classList.add("card");
    img.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title", "fs-4");
    cardText.classList.add("card-text");

    //Creiamo un ciclo per stampare i dati nel DOM

    for (i = 0; i < staff.length; i++) {
        const member = staff[i];
        cardTitle.textContent = `${member.nome + " "}`
        cardText.textContent = `${member.ruolo}`;
        img.src = `img/${member.img}`;
        row.appendChild(col.cloneNode(true));
    }

    container.appendChild(row);

}

//Eseguiamo la funziona creata

generateTemplate();

//Creo un ciclo per stampare in console il nome, ruolo e la stringa della foto di ognuno dei componenti dello staff


// for (let i = 0; i < staff.length; i++) {
//     console.log(staff[i].nome);
//     console.log(staff[i].ruolo);
//     console.log(staff[i].img);
// };