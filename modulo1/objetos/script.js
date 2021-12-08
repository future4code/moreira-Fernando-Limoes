/*   
        OBJETOS
*/

  // EXEMPLOS DO SLIDE

    //SINTAXE
  const instrutora = {
    nome: "Tayanne",
    idade: 26,
    backender: true,
    tarefas: ["Dar aula", "Dar Plantao", "Tirar duvidas"],

    ensinar: (assunto) => {
      return `Eu ensino ${assunto}`
    }
    //chave: valor
  }

  // ACESSANDO AS PROPRIEDADES
      // ANOTAÇÃO DE PONTO
  const nomeInstrutora = instrutora.nome
  // console.log(nomeInstrutora)

  // CHAMANDO O MÉTODO DO ARRAY
  console.log(instrutora.ensinar("JavaScript"))

      // ANOTAÇÃO DE COLCHETE
  const nome2 = instrutora["nome"]
  // console.log(nome2)

  // REDEFININDO VALORES
  instrutora.nome = "Mazzi"
  instrutora["backender"] = false
  // console.log(instrutora.nome)
  // console.log( instrutora["backender"])


  // ACESSANDO OBJETOS DENTRO DE OBJETOS

  const paiDePet = {
    nome: "Caio Teixeira",
    pet: {
      nome: "Lupin",
      raca: "Salsicha",
      idade: 1
    }
  }

  //FORMA PASSO A PASSO
  const pet = paiDePet.pet
  // console.log(pet)

  const nomePet = pet.nome
  // console.log(nomePet)

  // FORMA MAIS DIRETA
  const nomePet2 = paiDePet.pet.nome
  // console.log(nomePet2)

  //ACESSANDO ARRAYS DENTRO DE OBJETOS
  const curso1 = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
  }
  // PRIMEIRA LINGUAGEM DO MEU ARRAY
  // FORMA MAIS DIRETA
  const primeiraLinguagem = curso.linguagens[0]
  // console.log(primeiraLinguagem)

  // FORMA PASSO A PASSO
  const linguagens = curso.linguagens
  // console.log(linguagens)

  const segundaLinguagem = linguagens[1]
  console.log(segundaLinguagem)

  // ARRAYS DE OBJETOS
  const instrutoras = [
    {
      nome: "Lais",
      modulo: 1,
      assunto: ["JavaScript", "Html"]
    },
    { nome: "Amanda", modulo: 2 },
    { nome: "Chijo", modulo: 3 }
  ]

    // FORMA DIRETA
  const primeiroAssuntoObjeto = instrutoras[0].assunto[0]
  console.log(primeiroAssuntoObjeto)

    // FORMA PASSO A PASSO
  const firstInstrutora = instrutoras[0]
  // console.log(firstInstrutora)

  const nomeFirstInstrutora = firstInstrutora.nome
  // console.log(nomeFirstInstrutora)

    // ADICIONANDO PROPRIEDADES
  const curso2 = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
  }

  curso2.numeroEstudantes = 50

// console.log(curso2)


  // SPREAD OPERATOR
      //OBJETOS
  const usuaria = {
    nome: "Tayanne",
    backender: true,
    linda: true
  }

  const novaUsuaria = {
    frontender: true,
    ...usuaria,
    nome: "Mazzi",

  }
  // console.log(novaUsuaria)

      //ARRAYS
  const listaDeNomes = ["Pedro", "Chijo", "Amanda"]
  const copiaListaDeNomes = [...listaDeNomes, "Tayanne"]
  // console.log(copiaListaDeNomes)



// EXERCICIO 01

  const filme = {
    // chave: valor
    diretor: "Wagner Moura",
    titulo: "Marighella",
    lancamento: 2021,
    elenco: ["Bella Carnero", "Seu Jorge", "Humberto Carrão", "Bruno Gagliasso"],
    visto: false
  }

  // console.log(`Diretor: ${filme.diretor}`)
  // console.log(`Titulo: ${filme.titulo}`)
  // console.log(`Lançamento: ${filme.lancamento}`)

  // console.log(`Elenco: ${filme["elenco"]}`)
  // console.log(`Assistido: ${filme["visto"]}`)

  // console.log(filme)

//concatenação: " " + filme
// template string: ` ${filme} `

    // EXERCICIO 02
  const pessoa = {
    //chave: valor
    nome: "Tayanne",
    sobrenome: "Novais",
    idade: 26,
    genero_musical: "Red Hot Chili Peppers"
  }

  // console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa["idade"]} anos, sua banda favorita é ${pessoa.genero_musical}`)


    // EXERCICIO 03
    // personagens = Bela, Martighella, Humberto, Lucio
  filme.personagens = ["Bela", "Martighella", "Humberto", "Lucio"]

  // console.log(`Atriz ${filme.elenco[0]} interpreta ${filme.personagens[0]}`)
  // console.log(`Ator ${filme.elenco[1]} interpreta ${filme.personagens[1]}`)
  // console.log(`Ator ${filme.elenco[2]} interpreta ${filme.personagens[2]}`)
  // console.log(`Ator ${filme.elenco[3]} interpreta ${filme.personagens[3]}`)
  // console.log(`Ator ${filme.elenco[4]} interpreta ${filme.personagens[4]}`)

  // console.log("")

  filme.elenco[0] = "Paulo Gustavo"

  // console.log(`O nome do filme é ${filme.titulo}. E seus personagens são: ${filme.personagens[0]}, ${filme.personagens[1]}, ${filme.personagens[2]}`)


// EXERCICIO 04

  function novaPessoa(Pessoa) {
    const novaPessoa = {
      ...Pessoa, // SPREAD OPERATOR
      comidaFavorita: ["Tudo que eu não cozinho", "batata frita", "brocolis"],
      pet: {
        nome: "Salem",
        cor: "preto"
      }
    }

    console.log(`A pessoa é ${novaPessoa.nome}, e suas comidas favoritas são ${novaPessoa.comidaFavorita[0]}, ${novaPessoa.comidaFavorita[1]}, ${novaPessoa.comidaFavorita[2]}. Seu pet se chama ${novaPessoa.pet.nome}, e é um gato ${novaPessoa.pet.cor}`)
  }

  // novaPessoa(pessoa)



/* 
    SE TEMOS UM ARRAY SENDO PASSADO COMO VALOR EM UM OBJETO

    COMO ADICIONAMOS ELEMENTOS NO ARRAY?
*/

  const cantora = {
    nome: "Seu Jorge",
    musicas: ["Burguesinha", "Felicidade"]
  }

  cantora.musicas.push("Tive Razão") // adiciona no final do array
  cantora.musicas[2] = "Carolina"// adiciona/altera na posição escolhida

  // console.log(cantora.musicas)


/*
    Material por @Lbn_Tayanne
    Fique a vontade para tirar dúvidas!
*/

