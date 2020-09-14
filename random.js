// Input the code into your browser's console (Ctrl-Shift-I) on ourworldofpixels.com. This creates a checker board pattern around where the mouse is.
function random(x){
(sin(x)*10000)%1;
}
setInterval(function(){
for(var j = 0; j < 16; j++){
for(var i = 0; i < 16; i++){
coordX = Math.floor(OWOP.mouse.worldX/16+(i-8));
coordY = Math.floor(OWOP.mouse.worldY/16+(j-8));
num = [random(coordX*coordY+69)*255,random(coordX*coordY+420)*255,random(coordX*coordY+1337)*255];
OWOP.world.setPixel(coordX,coordY,[num[0],num[1],num[2]])}}},50);
