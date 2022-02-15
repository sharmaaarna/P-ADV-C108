function Ready(){
    navigator.mediaDevices.getUserMedia({
      audio:true  
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Sl90KvhXk/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        Random_R=Math.floor(Math.random()*255);
        Random_G=Math.floor(Math.random()*255);
        Random_B=Math.floor(Math.random()*255);
        document.getElementById("sound").innerHTML=result[0].label;
        document.getElementById("con").innerHTML=result[0].confidence.toFixed(3);
        document.getElementById("sound").style.color="rgb("+Random_R+","+Random_G+","+Random_B+")";
        document.getElementById("con").style.color="rgb("+Random_R+","+Random_G+","+Random_B+")";
        img1=document.getElementById("wolf");
        img2=document.getElementById("Cow");
        img3=document.getElementById("Dog");
        img4=document.getElementById("Bee");
    }
if(result[0].label=="Bee"){
    img4.src="Bee2.gif";
    img3.src="Dog2.gif";
    img3.src="Dog2.gif";
    img3.src="Dog2.gif";
}
else if(result[0].label=="Dog"){
    img3.src="Dog2.gif";
    img4.src="";
    img2.src="";
    img1.src="";
}
    else if(result[0].label=="Wolf"){
    img1.src="wolf2.gif";
    img2.src="";
    img3.src="";
    img4.src="";
}
    else{(result[0].label=="Cow")
    img2.src="Cow3.gif";
    img4.src="";
    img3.src="";
    img1.src="";
}
}