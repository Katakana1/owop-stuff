// Input the code into your browser's console (Ctrl-Shift-I) on ourworldofpixels.com. This creates a random pixel pattern around where the mouse is.
setInterval(function(){
for(var j = 0; j < 16; j++){
for(var i = 0; i < 16; i++){
coordX = Math.floor(OWOP.mouse.worldX/16+(i-8));
coordY = Math.floor(OWOP.mouse.worldY/16+(j-8));
numr = Math.abs((coordX*coordY+69)**1.5*2550000)%255;
numg = Math.abs((coordX*coordY+420)**1.5*2550000)%255;
numb = Math.abs((coordX*coordY+1337)**1.5*2550000)%255;
OWOP.world.setPixel(coordX,coordY,[numr,numg,numb])}}},50);
