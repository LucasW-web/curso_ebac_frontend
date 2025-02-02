$(document).ready(function() {
    carregarTarefas()

    $('header').click(function(){
        $('div,button,input,ul').slideDown()
    })

    // Adicionar tarefa
    $('#addTarefaBtn').on('click', function () {
        var tarefaText = $('#tarefaInput').val()
        if (tarefaText.length > 0) {
            addTarefa(tarefaText)
            salvarTarefas()
            $('#tarefaInput').val('')
        }
    })

    // Função para adicionar tarefa
    function addTarefa(text) {
        $('#tarefaList').append('<li>'+ text + '</li>')
    }

    // Marcar e desmarcar tarefa como concluída
    $(document).on('click','li', function() {
        $(this).toggleClass('completed')
        salvarTarefas()
    })

    // Remover tarefa
    $('#delTarefaBtn').click(function() {
        $('li').slideUp();
    })

    // Função para salvar tarefa localmente
    function salvarTarefas() {
        var tarefas = $('#tarefaList').html()
        localStorage.setItem('tarefas', tarefas)
    }

    // Função para carregar tarefas salvas localmente
    function carregarTarefas() {
        // Recupera os dados armazenados na chave 'tarefas' do localStorage
        var tarefas = localStorage.getItem('tarefas')
        // Verifica se existem dados armazenados
        if (tarefas) {
            $('#tarefaList').html(tarefas)
        }
    }
})