"use strict";

const pwd = document.getElementById("password");

const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Inserisci il tuo cognome");
const colore = prompt("Inserisci il tuo colore preferito");

//numero a caso da 0 a 100
const numero = Math.floor(Math.random() * 101);

pwd.innerHTML += nome + cognome + colore + numero;

console.log(`nome: ${nome}
cognome: ${cognome}
colore preferito: ${colore}
numero random: ${numero}
password generata: ${nome + cognome + colore + numero}`);
