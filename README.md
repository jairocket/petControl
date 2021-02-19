# petControl

# Desafio extra 01 - Digital House

O objetivo desse desafio é criar o controle de um Petshop.

1-Criar um método construtorpara criar novos pets (animais). Esse objeto deve conter os atributos: Identificador, Nome do PET, raça, nome do dono. (500 pontos).

2 - Solicitar ao usuário o que ele quer fazer (utilizando o inquirer). As opções são listadas abaixo (500 pontos):

  ● Cadastrar novo pet
  
  ● Listar todos os pets cadastrados
  
  ● Buscar pet por nome
 
3 - Os pets cadastrados devem ser salvos em um arquivo em formato JSON (1000 pontos).

4 - Não podem existir dois pets com o mesmo identificador (1000 pontos).

5 - Quando buscar o pet por nome, todos os dados do pet devem ser printados no terminal (Não pode usar pet.nome, pet.raca, pet.dono, pet.identificador, existem outras 
maneiras de pegar os dados de um pet). (1000 pontos).


Para solucionar o desafio, foram criadas quatro funções e um arquivo JSON intitulado registeredPets:

# foi incluído no arquivo json um array vazio.

# animais, que cria objetos literais que representam o cadastro de cada pet, com as propriedades "identificador", "nomeDoPet", "racaDoPet" e "nomeDoDono";

# register, que serve para cadastrar os pets. O primeiro passo foi ler o arquivo json e convertê-lo em objeto literal e guardá-lo em uma variável. Para solucionar a 
questão do impedimento de existência de dois pets com o mesmo identificador, decidi que o ID seria atribuído de forma automática e corresponderia ao length do array de objetos literais que foi obtido do arquivo json acrescido de 1.

Utilizando o inquirer o software solicita do usuário os inputs "nomeDoPet", "racaDoPet" e "nomeDoDono" e chama a função animais, para criar o novo cadastro. Esse cadastro é incluído no array de objetos literais obtido do arquivo registeredPets.json. Esse array, contendo o novo cadastro é convertido em formato json e sobrescrito no arquivo registeredPets.json.

# para atender a solicitação de listar todos os pets cadastrados, imprimir na tela a variável na qual foi salvo o array de cadastros convertidos em objetos literais, obtidos do arquivo json.

#a função search recebe como parâmetro uma string, equivalente ao nome do pet cujo cadastro se deseja visualizar e o array de objetos literais. A função percorre todos os objetos literais do array e imprime na tela aquele(s) que tenha a propriedade nomeDoPet igual à string passada como parâmetro.

# search, que imprime na tela o cadastro do pet pesquisado pelo "nomeDoPet". 

Foi utilizado o inquirer para que o usuário decida se deseja cadastrar pet, listar os pets ou pesquisar o pet pelo nome. Após atender à solicitação do usuário, a função main é chamada novamente, dando a oportunidade para o usuário realizar novos cadastros ou outra operação. Para evitar o loop eterno, foi criada a opção "sair do programa no inquirer, que imprime na tela uma mensagem de agradecimento e encerra a execução do script.

Foi criada uma opção extra chamada sair do programa. Assi

