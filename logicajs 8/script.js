const patients = [
    {
        name: "Neymar",
        age: 32,
        weight: 80,
        height: 177,
    },
{
        name: "Cr7",
        age: 39,
        weight: 83,
        height: 187,
    },
{
        name: "Beligol",
        age: 20,
        weight: 82,
        height: 190,
    },
]
 const patientNames = []
 for (const patient of patients) {
    patientNames.push((` ${patient.name} 

        tem a idade ${patient.age} anos, 
        altura de ${patient.height}
         peso atual de : ${patient.weight} `))
   }

   function IMC(weight, height){
    return (weight / ((height/100) **2)).toFixed(2)
   }
   function printPatientImc (patient){
    return `Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}`
   }

   for (const patient of patients) {
         let IMCmessage = printPatientImc(patient)
        alert(IMCmessage) 
    }





   //    function imc(patient){
//     return`
//     Paciente ${patient.name} possui o IMC de ${(patient.weight/((patient.height /100) **2)).toFixed(2)}
//     `
//    }

// for (const patient of patients) {
//     let IMCmessage = imc(patient)
//     alert(IMCmessage)
    
// }










