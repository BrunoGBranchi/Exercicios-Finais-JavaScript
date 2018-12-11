$(".problema").addClass("erro");    
        $(".ok").addClass("sucesso");
        $( "#div-filha span" ).removeClass( "erro" );


        var value = 4;

        $("#create-me-btn").click(function(){
    
            if(value < 10){
    
            value++;
    
            $("#create-me").append("<div>" + value + " - Elemento numero "+ value +"</div>")
            }

        });

        $('#copy-me-btn').click(function(event){
  
            $("#destino").text($("div#origem").text());
            $("#destino").addClass("sucesso");

            
        });

        var linhas = $('#tabela-totais tbody tr').length;
        for(let i=1; i <=linhas;i++){
            var qtd = 0;
            var uni = 0;
            qtd = parseFloat ($("#tabela-totais tbody tr:nth-child("+ i +") td:nth-child(2)").html());
            uni = parseFloat ($("#tabela-totais tbody tr:nth-child("+ i +") td:nth-child(3)").html());

            $('#tabela-totais tbody tr:nth-child('+ i +') td:nth-child(4)').html(qtd * uni);
        };

        var linhas = $('#tabela-totais-2 tbody tr').length;
            for(let i=1; i <=linhas;i++){
                var qtd = 0;
                var uni = 0;
                qtd = parseFloat ($("#tabela-totais-2 tbody tr:nth-child("+ i +") td:nth-child(2)").html());
                uni = parseFloat ($("#tabela-totais-2 tbody tr:nth-child("+ i +") td:nth-child(3)").html());

                $('#tabela-totais-2 tbody tr:nth-child('+ i +') td:nth-child(4)').html(qtd * uni);
        };