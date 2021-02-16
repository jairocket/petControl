const questions = [
    {
        type: 'list',
        name: 'question',
        message: 'O que deseja fazer?',
        choices: [
            {
                name: 'Cadastrar novo pet',
                value: 0,
            },
            {
                name: 'Listar todos os pets cadastrados',
                value: 1,
            },
            {
                name: 'Buscar pet pelo nome',
                value: 2,
            }
        ]
    }
]

const registering = [
    {
        type: 'input',
        name: 'petName',
        message: 'Informe o nome do pet',
    },
    {
        type: 'input',
        name: 'petRace',
        message: 'Informe a raça do pet',
    },
    {
        type: 'input',
        name: 'petOwner',
        message: 'Informe o nome do dono do pet'
    }
]

const petSearch = [
    {
        type: 'input',
        name: 'search',
        message: 'Informe o pet que deseja pesquisar'
    }
]
module.exports = {
    questions,
    registering,
    petSearch,
}