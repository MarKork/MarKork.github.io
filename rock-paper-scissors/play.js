    let wins=0
    let losses=0
    let draws=0
    let myChoise=""
    function toGame(){
        document.getElementById("result").innerHTML = ""
        document.getElementById("wins").innerHTML = ""
        document.getElementById("losses").innerHTML = ""
        document.getElementById("draws").innerHTML = ""
        setTimeout(play, 100);
    }
    function play(){
        let appChoise=Math.floor(Math.random()*3)
    
        if(appChoise==0){
            appChoise="rock"
            document.getElementById("rock2").style.border="2px solid red";
        }else if(appChoise==1){
            appChoise="paper"
            document.getElementById("paper2").style.border="2px solid red";
        }else{
            appChoise="scissors"
            document.getElementById("scissors2").style.border="2px solid red";
        }
        document.getElementById("button").disabled=true

        if((myChoise=="rock")&&(appChoise=="scissors")||(myChoise=="paper")&&(appChoise=="rock")||(myChoise=="scissors")&&(appChoise=="paper")){
            document.getElementById("result").innerHTML = "🙂"+'<br/>'+'<strong>'+"You won!"+'</strong>'+'<br/>'+myChoise+" <> "+appChoise;
            wins++
            update()
        }else if((myChoise=="scissors")&&(appChoise=="rock")||(myChoise=="rock")&&(appChoise=="paper")||(myChoise=="paper")&&(appChoise=="scissors")){
            losses++
            update()
            document.getElementById("result").innerHTML = "😟"+'<br/>'+'<strong>'+"You lost!"+'</strong>'+'<br/>'+myChoise+" <> "+appChoise;
        }else if((myChoise=="scissors")&&(appChoise=="scissors")||(myChoise=="paper")&&(appChoise=="paper")||(myChoise=="rock")&&(appChoise=="rock")){
            draws++
            update()
            document.getElementById("result").innerHTML = "😐"+ '<br/>'+'<strong>'+"It's a draw!"+'</strong>'+'<br/>'+myChoise+" <> "+appChoise;
        }
    }
    function update(){
        document.getElementById("wins").innerHTML = "your wins: "+wins
        document.getElementById("losses").innerHTML = "your losses: "+losses
        document.getElementById("draws").innerHTML = "draws: "+draws
        setTimeout(removeBorder, 2000);
        
    }
    function removeBorder(){
        const array = document.getElementsByClassName("img2");
        for(j = 0; j < array.length ; j++) {
            array[j].style.border="none";
        }
        document.getElementById("button").disabled=false
    }
    function choose(elem){
        const array = document.getElementsByClassName("img");
        for(j = 0; j < array.length ; j++) {
            array[j].style.border="none";
        }
        let id=elem.id
        document.getElementById(id).style.border="2px solid orange";
        myChoise=id
        document.getElementById("button").disabled=false
    }