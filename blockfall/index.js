$(document).ready(function(){
    // Populate
    for(var i = 1; i < 30; i++){
      $(".fall-block:first-child").clone().appendTo(".fall-holder").attr("id", i);
    }
    
    // Drop
    var blockID = 30
    var row;
    var target = 0;
    setInterval(function(){
      if(blockID >= 0){
        
        // odd-even row math
        row = Math.ceil(blockID / 5);
        
        $("#"+ blockID).css({"animation-name":"blockfall", "opacity":"1"});
        
        console.log(blockID);
        blockID--;
        
        /*if(row%2 != 0 && blockID % 5 == 0){
          $("#"+ blockID).css("background-color", "red");
            target = blockID;
            blockID -= 5;
        }
        
        if(row%2 == 0 ){
          blockID--;
        }else{
          blockID++;
        }*/
        
      }else{
        return;
      }
    }, 100);
  });