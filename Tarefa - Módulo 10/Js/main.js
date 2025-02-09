$(document).ready(function () {
    $('#carousel-imagens').slick({
    autoplay: true,
    arrows: false,
})
})

$('#telephone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
});

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
});

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
});


$('form').validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telephone: {
            required: true
        },
        adress: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    messages: {
        name: "Por favor, insira seu nome completo.",
        email: {
            required: "Por favor, insira um e-mail válido.",
            email: "O formato do e-mail está incorreto."
        },
        telefone: "Por favor, insira o número do telefone.",
        adress: "Por favor, insira o endereço completo.",
        cep: "Por favor, insira o CEP válido.",
        cpf: "Por favor, insira um CPF válido."
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})
