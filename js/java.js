$(function)()
{
    $('bd-desde').on('change', function()
    {
        var desde = $('#bd-desde').val();
        var hasta = $('#bd-hasta').val();
        $.ajax({
            type:'GET',
            url:url,
            data:'+desde='+desde+'&hasta='+hasta,
            success: function(datos){
                $('#agrega-registros').html(datos);
            }
        });
        return false;
    });


    $('bd-hasta').on('change', function()
    {
        var desde = $('#bd-desde').val();
        var hasta = $('#bd-hasta').val();
        $.ajax({
            type:'GET',
            url:url,
            data:'+desde='+desde+'&hasta='+hasta,
            success: function(datos){
                $('#agrega-registros').html(datos);
            }
        });
        return false;
    });
}