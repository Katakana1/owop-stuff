// Input the code into your browser's console (Ctrl-Shift-I) on ourworldofpixels.com. This creates a smooth pattern around where the mouse is.
function smoothColor(n,d,a){
  return (Math.sin((n+a)/d)+1)*128;
}
setInterval(function(){
  for(var j = 0; j < 16; j++){
    for(var i = 0; i < 16; i++){
      X = Math.floor(OWOP.mouse.worldX/16+(i-8));
      Y = Math.floor(OWOP.mouse.worldY/16+(j-8));
      num = [Math.floor(smoothColor(X*0.666+Y*0.333,64,420)),Math.floor(smoothColor(X*0.666+Y*0.333,192,69)),Math.floor(smoothColor(X*0.666+Y*0.333,128,1337))];
      OWOP.world.setPixel(coordX,coordY,num);
    }
  }
},50);
