const mailInput= prompt('Inserisci la tua mail')
// console.log (mailInput)

const dataBaseMail = ['me@gmail.com' , 'you@gmail.com', 'he@gmail.com']
// console.log (dataBaseMail)

let emailFound = false;

for (let i = 0; i < dataBaseMail.length; i++) {
    if (dataBaseMail[i] === mailInput) {
        emailFound=true;
    }
}

if (emailFound === false){
    console.log('Email non trovata');
    dataBaseMail.push(mailInput);
    console.log('Email agigunta alla lista')
    console.log(dataBaseMail)}
    else{
        console.log('Email presente')
    }


    let  playerNumber= Math.floor(Math.random()* 6) +1
    let  pcNumber= Math.floor(Math.random()* 6) +1
    console.log(playerNumber, pcNumber)
    if (playerNumber> pcNumber){
        console.log('Hai vinto')
    }else if (playerNumber < pcNumber){
        console.log('Hai perso')
    } else{
        console.log('È un pareggio')
    }