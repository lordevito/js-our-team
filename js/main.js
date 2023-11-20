`use strict`;

/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/


//Creiamo l'array di oggetti coi dati in nostro possesso
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

//Creo un ciclo per stampare in console il nome, ruolo e la stringa della foto di ognuno dei componenti dello staff

for (let i = 0; i < staff.length; i++) {
    console.log(staff[i].nome);
    console.log(staff[i].ruolo);
    console.log(staff[i].img);
}