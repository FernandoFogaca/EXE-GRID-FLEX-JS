






function processarSoma(){
    console.log("--- PROCESSAR SOMA ---")

    // Entrada de dados
    // Pegar os valores dos inputs da tela, com o DOM
    const numeroUm = Number(document.getElementById("inputNumeroUm").value)
    const numeroDois = Number(document.getElementById("inputNumeroDois").value)

    // Processamento
    // Chamar função que soma dois numeros
    const resultado = somaDoisNumeros(numeroUm, numeroDois)

    // Saída de dados
    // Mostrar o resultado na tela, com DOM
    document.getElementById("resultadoSoma").innerText = resultado
}

async function processarPokemon(){
    console.log("--- PROCESSAR POKEMON ---")

    // Entrada de dados
    // Pegar o valor do input da tela, com o DOM
    const idPokemon = document.getElementById("idPokemon").value

    // Processamento
    // Chamar função que busca dados em uma API
    const baseURL = "https://pokeapi.co/api/v2/pokemon"
    const pokemon = await buscarDados(baseURL, idPokemon)

    /
    // Mostrar o resultado na tela, com DOM
    document.getElementById("nomePokemon").innerText = pokemon.name
    document.getElementById("imagemPokemon").src = pokemon.sprites.front_default
}