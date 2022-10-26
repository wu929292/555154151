function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+" Y:"+mouseY,50,50)
push()
   translate(width/2,height/2)
   fill('#FB9499')
   ellipse(0,0,400)
   fill(255)
   ellipse(0,0,200,100)

   ellipse(-40,0,40)//左鼻孔
   ellipse(40,0,40)//右鼻孔

   ellipse(-100,-100,60)
   ellipse(100,-100,60)

   fill(0)
   ellipse(-100+map(mouseX,0,width,-5,5),-100+map(mouseX,0,height,-5,5),20)//左眼珠
   ellipse(100+map(mouseX,0,width,-5,5),-100+map(mouseY,0,height,-5,5),20)//右眼珠

   if(mouseIsPressed){
    fill(255,0,0)
    arc(0,75,200,150,0,PI)
   }
   else{
    fill("#FB9499")
    arc(0,75,200,75,0,PI)
   }
   fill("#FB9499")
   arc(0,74,200,50,0,PI)
   pop()
  
}
