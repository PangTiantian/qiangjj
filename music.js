
        window.onload=function(){
            var audio=document.getElementById("yinyue");
            audio.pause();
        }
        function play(){
            var audio=document.getElementById("yinyue");
            if(audio.paused){
                audio.play();
                document.getElementById("music").style.backgroundImage="url('image/YinyueKai.gif')";
            }else{
                audio.pause();
                document.getElementById("music").style.backgroundImage="url('image/YinYueGuan.gif')";
            }
        }
