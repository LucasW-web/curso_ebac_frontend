const form = document.getElementById('form-campos');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const valorA = Number(document.getElementById("campo A").value);
    const valorB = Number(document.getElementById("campo B").value);

    const campoA = document.getElementById("campo A");
    const campoB = document.getElementById("campo B");

    const Sucesso = `Parabéns o valor do Campo B: <b>${valorB}</b> é maior que o valor do Campo A: <b>${valorA}</b>`;
    const Erro = `Tente Novamente! O valor do campo B: <b>${valorB}</b> é menor que o valor do Campo A: <b>${valorA}</b>`;

    let calculo = false;

    function vValor(valorA, valorB) {
        return valorA < valorB;
    }

    const resultadoCerto = document.querySelector(".resultado_certo");
    const resultadoErrado = document.querySelector(".resultado_erro");

    calculo = vValor(valorA, valorB);

    if (calculo) {
        resultadoCerto.innerHTML = Sucesso;
        resultadoCerto.style.display = "block";
        resultadoErrado.style.display = "none";

        campoB.style.border = "solid green";
        resultadoErrado.innerHTML = "";

        campoA.value = "0";
        campoB.value = "10";
    } else {
        campoA.style.border = "solid red";
        resultadoErrado.innerHTML = Erro;
        resultadoErrado.style.display = "block";
        resultadoCerto.style.display = "none";

        campoB.value = "";
    }

});