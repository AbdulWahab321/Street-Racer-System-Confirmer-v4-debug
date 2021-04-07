var DETECTER=1;
var FIRSTBG=2;
var computerDownloadingInstructions
var com,mobile,mobile1,computer,nox,blueStacks,gam
var loading
function preload(){
first=loadImage("carBg.png");
bgmp=loadSound("bgmp.mp3");
insImg=loadImage("backGround.jpg");
}
function setup(){
 
  createCanvas(900, 500);

  gameState=FIRSTBG
  
  mobile=createButton("Mobile")
  mobile.position(150,150)
  mobile.size(200,50)
  com=createButton("PC")
  com.position(500,150)
  com.size(200,50);

  back=createButton("<< Back")
  back.position(20,440)
  back.size(100,40)
  back.hide();
  nox=createButton("Download NOX>")
  nox.position(40,40)
  nox.size(200,30)
  blueStacks=createButton("Download BlueStacks>")
  blueStacks.position(700,40)
  blueStacks.size(200,30)

  gam=createButton("Download Street Racer PC version>")
  gam.position(305,140)
  gam.size(300,50)

  blueStacks.hide();
  nox.hide();
  gam.hide();
  computer=createButton("Download PC version")
  mobile1=createButton("Download Mobile version")
  mobile1.position(150,300)
  mobile1.size(200,50)
  computer.position(500,300)
  computer.size(200,50);
  com.hide();
  mobile.hide();
  computer.hide();
  mobile1.hide();
  say()
}
function draw(){
  background(first);
  if(frameCount-84===0){
    bgmp.play()
    }

  

if(gameState===computerDownloadingInstructions){
  
  clear();
  
  resizeCanvas(1100,600)
  background(insImg);
  fill("white")
  textSize(30)
  text("First to download Street Racer Game for PC You will be needed Android Emulator",10,30)
  blueStacks.show();
  nox.show();
  gam.show();
  back.show();
  back.mousePressed(()=>{
    gameState=DETECTER
  })
  blueStacks.mousePressed(()=>{
    open("https://www.bluestacks.com/")
  })

  nox.mousePressed(()=>{
    open("https://www.bignox.com/")
  })
  text("After Downloading any of android Emulators Download The Game",75,100)
  textSize(40)
  fill("red")
  stroke("white")
  strokeWeight(3)
  text("Please Make sure you have any Android Emulators Installed..",10,240)
  textSize(60)
  fill("yellow")
  stroke("white")
  strokeWeight(3)
  text("**Thank You for Installing My Game**",60,320)

  gam.mousePressed(()=>{
    open("https://jyl9xt8j.r.us-east-1.awstrack.me/L0/https:%2F%2Fappsgeyser.com%2Fapi%2Ftrack%2Fredirect%3Furl=https%253A%252F%252Ffiles.appsgeyser.com%252FStreet%252520Racer%252520Game%252520v8%252520Computer_13524366.apk%253Fsrc%253Demail/1/01000178aa7a9069-a4483b38-18d6-4df6-ad70-85dc1e7b053a-000000/rgaVZgtvVh5CzyT_KGxuxGkDB_M=208")
 
    
  })
}
else{
  blueStacks.hide();
  nox.hide();
  gam.hide();
  back.hide();
}

if(gameState===DETECTER){
  resizeCanvas(900, 500);
  background(first)
  textSize(50)
  fill("yellow")
  stroke("white")
  strokeWeight(4)
  text("**Thank You for Playing My Game**",40,420)
  com.show();
  mobile.show();
  computer.show();
  mobile1.show();
  fill("white")
  textSize(40)
  noStroke();
  text("Which is your System PC or Mobile",120,50);
  fill("red")
text("____________________________________________________________",40,55)

  fill("blue")
  text("v Download Game v",280,250)

  computer.mousePressed(()=>{
     gameState=computerDownloadingInstructions
  })

 mobile.mousePressed(()=>{


  location.assign("https://abdulwahab321.github.io/Street-Racer-Mobile-Edition-v-8/")
 })

  
 com.mousePressed(()=>{


  location.assign("https://abdulwahab321.github.io/Street-Racer-v8/")

})

mobile1.mousePressed(()=>{
  location.assign("https://u6512343.ct.sendgrid.net/ls/click?upn=9JS-2F714wtrENuLalHfV-2BI9UsKKdIAuBCevyxZgAwUD9TRHF5DcdyX6mAzNKk-2Ffdc5tOk-2FAU6NIma7gwY6SDe1QDbrKMMpbr1k9OrvNA49S0TlIKdz7AG4hmQ1Tzf8Mh-2Fb-2FXP7S-2BPp0kmlHY6LmbhoWJXfy6pfib9ehLvGew4z1hQIuXwz9yggbzatyBBXylB5dTTqDGmDIBFn1-2Fia3d8a3ATte079ppQRf5pM-2FaTNEXQGg5JfsJeF3cHOS3suDbqeSui4QmfdjJMmJ5RdJqDhQ-3D-3DaFeA_-2FqHO02MTbX8WX06kR-2FYqMwcSu-2FUJVHYem3l-2Fhp6EqyF-2FCJYd1Vjv5WFKIzWrXzlVmSVUoPX7WNVWMKhGc55TsqV-2FlrSM0JcStpewovZ-2BOvOB4oskfno2kyQpfIytsTPth3q61vx6B-2BhM9MUSzSzI7-2FihLAsh3-2F0WaSoERBC6rIqTi1ri7EMyqpzIFVaH52koMZOGmUt8UbqAe24lZWS2uhEqP7nYqEjMnI9U1EyuMAExW-2BQEbPJOY-2B13k2XZVxcZZNJSno4Syx4C29ambNgVCUN3YterQtTSesYnSmhsc2YQB9njsNUts8-2BGLy0r-2F94WKZEaUkSj9xBX2KDbaBjh3Qk1HXCZu4PMabh1ZvcuKUUSPXN1kmMPp6m5-2B7dB2ul-2B")
})

 }
 else {
  com.hide();
  mobile.hide();
  computer.hide();
  mobile1.hide();
  
 }

  
  



  if(gameState===FIRSTBG){
   
 


    
    textSize(40)
    fill("white")
    text('Welcome To Street Racer Game System Cofirmer',10,50)
    textSize(30)
    text('Loading.........Please Wait',150,400)

  
  
  }





 

 


if(frameCount-50===0){
  gameState=DETECTER;
}


fill("red");
strokeWeight(2)
ellipse(mouseX,mouseY,15,15)
noCursor();
 
  
}
function say(){
  sp=new SpeechSynthesisUtterance();
  sp.text="Hai Welcome To street Racer Game System Cofirmer"
  window.speechSynthesis.speak(sp)
}
