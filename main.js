$(document).ready(function(){

    $ ('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const endereçonovaimagem = $('#endereço-imagem-nova').val();
        const novoitem = $('<li style="display:none"></li>')
        $(`<img src="${endereçonovaimagem}"/>`).appendTo(novoitem);
        $(`<div class= "overlay-imagem-link"> 
        <a href ="${endereçonovaimagem}" target="_blank" title= "Ver imagem em tamanho real">
            Ver imagem em tamanmho real
        </a>
        </div>`).appendTo(novoitem);
        $(novoitem).appendTo('ul');
        $(novoitem).fadeIn(2000);
        $('#endereço-imagem-nova').val('')
    })
})