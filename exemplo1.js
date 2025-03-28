async function buscarDados(id) {
    try {
        const url = "https://projeto-api-charada.vercel.app/charadas/id/"+id
        const resposta = await fetch(url)
        // Impressão de todos os dados da resposta da requisição
        console.log(resposta)
        //Conversão do conteúdo da resposta em formato JSON
        const dados = await resposta.json()
        console.log(dados)
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro)
    }
}

buscarDados(10)