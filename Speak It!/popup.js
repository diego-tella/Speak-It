$(function(){
    $('#texto').keyup(function(){
        $('#div1').css("border-color", "black");
        $('#msg').text($('#texto').val());
    })
    var saying = false;
    $('#env').click(function(){
        if(saying){
            chrome.tts.stop();
            $('#env').val("Speak It!");
            saying = false;
        }
        else{
            saying = true;
            $('#env').val("Stop!");
            chrome.tts.speak($('#msg').text(),{'lang': 'en-US', 'rate': 1.0, onEvent: function(event) {
                if(event.type === 'end') {
                    $('#env').val("Speak It!");
                }}});

        }
    })
})