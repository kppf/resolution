var resolutions = [ [1360,768],[1280,960],
                    [1280,800],[1280,720],
                    [1152,864],[1024,780],
                    [800 ,600],[640 ,480]
                   ];

$(document).ready(function(){

    $('.reso .btn').click(function(e){
        console.log('clicked');
            $index = $(this).index();
            $('#frame').css({'width':resolutions[$index][0], 'height':resolutions[$index][1]});
    });

    $('#urlform').submit(function(e){
        $("#frame").attr("src", geturl());
        $('#url').val(geturl());
    });
    
    $('#customform').submit(function(e){
        $('#frame').css({'width':$('#width').val(), 'height':$('#height').val()});
    });
    
    /*CLIENT END CHECK TO PREVENT INPUT OF CHARACTERS ELSE THAN 0-9 IN THE CUSTOM RESOLUTION INPUTS*/
    $("#width, #height").keydown(function(event) {
        // Allow: backspace, delete, tab, escape, and enter
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
             // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) || 
             // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
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