$(document).ready(function(){
    $("#chk1").change(function(){
        if(this.checked)
            $("#frame").attr("src", $('#url').val());
    });
    
    $('#urlform').submit(function(e){
        $("#frame").attr("src", geturl());
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