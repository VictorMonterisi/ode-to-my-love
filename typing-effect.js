window.addEventListener('load', (event) => { // Chama a função assim que a janela terminou de carregar
    let contador = 0
    let declaracao = "Eu te amo, Juh!"
    let duracao = 100
    let titulo = document.querySelector('h1')

    function digitador() {
        if(contador < declaracao.length) {
            titulo.innerHTML += declaracao.charAt(contador)
            contador++
            setTimeout(digitador, duracao)
        }
    } // A função digita letra por letra da declaração
    digitador()
})