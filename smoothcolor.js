// Input the code into your browser's console (Ctrl-Shift-I) on ourworldofpixels.com. This creates a smooth pattern around where the mouse is.
function smoothColor(n){
  return (Math.abs(n)**0.5)%1;
}
setInterval(function(){
  for(var j = 0; j < 16; j++){
    for(var i = 0; i < 16; i++){
      X = Math.floor(OWOP.mouse.worldX/16+(i-8));
      Y = Math.floor(OWOP.mouse.worldY/16+(j-8));
      num = [Math.abs(X*Y)%256,Math.abs(X*Y)%256,Math.abs(X*Y)%256];
      OWOP.world.setPixel(X,Y,num);
    }
  }
},50);
