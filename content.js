setTimeout(function(){

      
      document.addEventListener('keypress',(e)=>{
            if(e.key === "*" && document.getElementsByTagName("video")[0].playbackRate <=2.75){
                  document.getElementsByTagName("video")[0].playbackRate += 0.25;
            }
            if(e.key === "/" && document.getElementsByTagName("video")[0].playbackRate >=0.75){
                  document.getElementsByTagName("video")[0].playbackRate -= 0.25;
            }

            if(e.key ==="<"){
                  alert(document.getElementsByTagName("video")[0].playbackRate)
            }
      })  

    }
, 2000);






      



