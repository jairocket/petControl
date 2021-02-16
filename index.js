const inquirer = require('inquirer');
const {questions, registering, petSearch} = require('./data');
const fs = require('fs');



function animais(identificador, nomeDoPet, nomeDoDono, racaDoPet){
    this.identificador = identificador;
    this.nomeDoPet = nomeDoPet;
    this.racaDoPet = racaDoPet;
    this.nomeDoDono = nomeDoDono;
}

function search(nomeDoPet, pets){
    for (pet in pets){
        if(nomeDoPet === pets[pet].nomeDoPet){
            console.log(pets[pet])
        }
    }

}

function main(){
    
    fs.readFile('./registeredPets.json', 'utf8', (err, jsonString) =>{
        if (err){
            console.log ('File read failed', err)
            return
        } else {
            let json = (JSON.parse(jsonString))
            let id = (JSON.parse(jsonString).length + 1);
            inquirer.prompt(questions).then(answer => {
                if (answer.question === 0){
                    inquirer.prompt(registering).then(answer => {
                        let newPet = new animais(id, answer.petName, answer.petOwner, answer.petRace);
                        json.push(newPet);
                        let newRegister = () => JSON.stringify(json);
                        fs.writeFile('./registeredPets.json', newRegister(), err =>{
                            if (err){
                                console.log('Erro ao registrar o novo pet', err)
                            }else{
                                console.log('Pet registrado com sucesso!')
                            }
                        })  
                    }
                    )
                } else if (answer.question === 1){
                    console.log(json);
                } else if (answer.question === 2){
                    inquirer.prompt(petSearch).then(answer => {
                        search(answer.search, json);
                    })
                } 
        })      
    }
})
}

main();





