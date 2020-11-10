// Input the code into your browser's console (Ctrl-Shift-I) on ourworldofpixels.com. This creates a relatively smooth pattern around where the mouse is.
function getColor(x){
  return [(Math.sin((x+420)/64)+1)*128,(Math.sin((x+69)/192)+1)*128,(Math.sin((x+1337)/128)+1)*128];
}
setInterval(function(){
  for(var j = 0; j < 16; j++){
    for(var i = 0; i < 16; i++){
      coordX = Math.floor(OWOP.mouse.worldX/16+(i-8));
      coordY = Math.floor(OWOP.mouse.worldY/16+(j-8));
      a = (2/3)*coordX+(1/3)*coordY;
      num = getColor(a);
      OWOP.world.setPixel(coordX,coordY,[Math.floor(num[0]),Math.floor(num[1]),Math.floor(num[2])]);
    }
  }
},50);
