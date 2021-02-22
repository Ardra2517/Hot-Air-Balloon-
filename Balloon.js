class Balloon{
    constructor(){}

  function updateHeight(x,y){
    database.ref('balloon/height').set({
        'x':height.x + x,
        'y': height.y + y
    })
  }

  function readHeight(data){
    height = data.val();
    balloon.x = height.x;
    balloon.y = height.y;
  }

  function showError(){
   console.log("Error in writing to the database");
  }
}