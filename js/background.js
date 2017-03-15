function loadPic(){
	bkgImg = new Image();
	bkgImg.src = "./src/bj1.png";
}
function drawBackground(){
	ctx2.drawImage(bkgImg,0,0,canWidth,canHeight);
	volcano.draw();
}