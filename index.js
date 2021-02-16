const inquirer = require('inquirer');
const {questions, registering, petSearch} = require('./data');
const fs = require('fs');

//Método construtor

function animais(identificador, nomeDoPet, nomeDoDono, racaDoPet){
    this.identificador = identificador;
    this.nomeDoPet = nomeDoPet;
    this.racaDoPet = racaDoPet;
    this.nomeDoDono = nomeDoDono;
}

//Método para pesquisar pet pelo nome

function search(nomeDoPet, pets){
    for (pet in pets){
        if(nomeDoPet === pets[pet].nomeDoPet){
            console.log(pets[pet])
        }
    }

}

//Método Principal

//Primeiro lê o arquivo registeredPets.json
//Os dados contidos no arquivo são convertidos em um objeto literal e salvos na variável json;
//Por meio do inquirer, o software consulta se o usuário deseja cadastrar novo pet, listar os pets cadastrados ou pesquisar um pet pelo nome;

//Se o usuário escolher cadastrar novo pet, utilizando o inquirer, são solicitados do usuário os parâmetros "nomeDoPet", "racaDoPet" e "nomeDoDono".
//Para obter o identificador - quarto parâmetro necessário para o método construtor - o software verifica o tamanho do array de objetos literais que foram obtidos
//do arquivo registeredPets.json e acrescenta + 1. Dessa forma, o identificador não será repetido e os registros são organizados de forma crescente.
//O objeto cadastrado (novo pet) é incluído na lista de pets já existentes, convertido em formato json e sobrescrito no arquivo registeredPets.json

//se o usuário escolher listar os pets cadastrados, o software imprime na tela o conteudo do arquivo registeredPets.json, convertido para objeto literal.

//se o usuário escolher pesquisar pelo nome do pet, a função search percorre os objetos do array contido no arquivo registeredPets.json, convertido 
//em objeto literal até encontrar o nome do pet.

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





