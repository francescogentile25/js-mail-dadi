const mailInput= prompt('Inserisci la tua mail')
// console.log (mailInput)

const dataBaseMail = ['me@gmail.com' , 'you@gmail.com', 'he@gmail.com']
// console.log (dataBaseMail)

dataBaseMail.push(mailInput)
// console.log (dataBaseMail)
// per ogni email (for) devo controllare se esiste (if) altrimenti (else) aggiungo all array l email
for (let i=0;  i<dataBaseMail.length; i++ ){
    if (!dataBaseMail[i] === mailInput){
        dataBaseMail.push(mailInput)
        console.log(dataBaseMail)
    }
}