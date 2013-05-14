var resolutions = [ [1360,768],[1280,960],
                    [1280,800],[1280,720],
                    [1152,864],[1024,780],
                    [800 ,600],[640 ,480]
                   ];

$(document).ready(function(){
    $(":radio").change(function(){
        if($(this).is(':checked')){
            $index = $('input[name=radio]:checked').index('input[name=radio]');
            console.log($index);
            
            $('#frame').css({'width':resolutions[$index][0], 'height':resolutions[$index][1]});
        }
    });
    
    $('#urlform').submit(function(e){
        $("#frame").attr("src", geturl());
        $('#url').val(geturl());
    });
});

function geturl()
{
    var url = $('#url').val();
    var mch1 = /http:\/\//;
    var res = mch1.test(url);
    if(res==false)
        return 'http://'+url;
    else
        return url;
}