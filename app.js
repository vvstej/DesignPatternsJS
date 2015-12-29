(function(win,$){
  var RedCircle = function(){

  }

  RedCircle.prototype.create = function(top, left) {
    return $("<div class='circle'></div>").css("top",top).css("left",left);
  }

  var RandomCircle = function() {

  }

  RandomCircle.prototype.create = function(top,left) {
    var red = Math.floor(Math.random()*255+1);
    var blue = Math.floor(Math.random()*255+1);
    var green = Math.floor(Math.random()*255+1);
    var rgbValue = "rgb("+red+","+blue+","+green+")";
    return $("<div class='circle'></div>").css("top",top).css("left",left).css("background-color", rgbValue);
  }
  var CircleCreationFactory = (function(){
     var instance = null;
     function init(){
       return {
           createCircle : function(type, top, left) {
             if(type==='red'){
               return new RedCircle().create(top, left);
             }else{
               return new RandomCircle().create(top, left);
             }
           }
         }
     }
     return {
       getInstance : function(){
         if(!instance){
           instance = init();
         }
         return instance;
       }
     }

  })();
  $(win.document).click(function(e){
    var newCircle = CircleCreationFactory.getInstance().createCircle('red', e.pageY, e.pageX);
    $("#outerContainer").append(newCircle);
  });
  $(win.document).keypress(function(e){
    var newCircle = CircleCreationFactory.getInstance().createCircle('random', Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));
    $("#outerContainer").append(newCircle);
  })
})(window,$);
