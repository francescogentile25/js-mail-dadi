const mailInput= prompt('Inserisci la tua mail')
// console.log (mailInput)

const dataBaseMail = ['me@gmail.com' , 'you@gmail.com', 'he@gmail.com']
// console.log (dataBaseMail)

dataBaseMail.push(mailInput)
// console.log (dataBaseMail)
// per ogni email (for) devo controllare se esiste (if) altrimenti (else) aggiungo all array l email

// let emailCeck = false;
// for (let i = 0; i < dataBaseMail.length; i++) {
//     if (dataBaseMail[i] === mailInput) {
//         console.log('Email presente');
//     }else{
//         console.log('Email non trovata');
//         dataBaseMail.push(mailInput);
//         console.log('Email agigunta alla lista ');
//     }
// }    


let emailFound =false
for (let i = 0; i < dataBaseMail.length; i++) {
    if (dataBaseMail[i] === mailInput) {
        let emailFound=true
        console.log('Email presente');
    }
}

if (emailFound =true){
    console.log('Email non trovata');
    dataBaseMail.push(mailInput);
    console.log('Email agigunta alla lista')
    console.log(dataBaseMail)
}