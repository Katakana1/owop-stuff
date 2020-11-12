// Input the code into your browser's console (Ctrl-Shift-I) on ourworldofpixels.com. This creates a checker board pattern around where the mouse is.
setInterval(function(){
  for(var j = 0; j < 16; j++){
    for(var i = 0; i < 16; i++){
      coordX = Math.floor(OWOP.mouse.worldX/16+(i-8));
      coordY = Math.floor(OWOP.mouse.worldY/16+(j-8));
      num = (Math.abs(coordX+coordY)%2)*255;
      OWOP.world.setPixel(coordX,coordY,[num,num,num])
    }
  }
},50);
