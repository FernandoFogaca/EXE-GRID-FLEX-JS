

async function buscarDados(baseURL, identificador) {
    const url = baseURL + "/" + identificador

    const response = await fetch(url) // Fazendo GET na API
    const data = await response.json() // Pegando o corpo em objeto JS
    
    return data;
}

async function enviarDados(baseURL, dados) {
    const url = baseURL

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }

    const response = await fetch(url, options)
    const data = await response.json() // Pegando o corpo em objeto JS
    
    return data;
}