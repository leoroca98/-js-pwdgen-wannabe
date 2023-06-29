let nameUser = prompt("inserisci il tuo nome");

let username = prompt("inserisci il tuo cognome");

let preferitecolor = prompt("inserisci il tuo colore preferito");

let paswordSimple=nameUser+username+preferitecolor+21;

console.log(`

la pasword semplice è

${paswordSimple}`

);


let bigliettoDaVisita = `^.^---___---___---Biglietto da visita---___---___---^.^

-Nome: ${nameUser}

-Cognome: ${username}

-Colore Preferito: ${preferitecolor}


`

console.log(bigliettoDaVisita);





     document.getElementById("UserNome").innerHTML = nameUser; 
     document.getElementById("UserSurname").innerHTML = username;
     document.getElementById("UserPreferiteColor").innerHTML = preferiteColor;





























