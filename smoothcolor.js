// Input the code into your browser's console (Ctrl-Shift-I) on ourworldofpixels.com. This creates a random pixel pattern around where the mouse is.
function coordTransform(x,y){
  return (2/3)*x+(1/3)*y;
}
function getColorFromCoords(x,y){
  return getColorFromNum(coordTransform(x,y));
}
function getColorFromNum(x){
  return [(sin((x+420)/64)+1)*128,(sin((x+69)/192)+1)*128,(sin((x+1337)/128)+1)*128];
}
setInterval(function(){
  for(var j = 0; j < 16; j++){
    for(var i = 0; i < 16; i++){
      coordX = Math.floor(OWOP.mouse.worldX/16+(i-8));
      coordY = Math.floor(OWOP.mouse.worldY/16+(j-8));
      num = getColorFromCoords(coordX,coordY);
      OWOP.world.setPixel(coordX,coordY,[Math.floor(num[0]),Math.floor(num[1]),Math.floor(num[2])]);
    }
  }
},50);
