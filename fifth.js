function show_result(){
    let Marati = document.querySelector("#Marati").value;
    let Hindi = document.querySelector("#Hindi").value;
    let English = document.querySelector("#English").value;
    let Math = document.querySelector("#Math").value;
    let DataScience = document.querySelector("#DataScience").value;
    let History = document.querySelector("#History").value;

    let to = parseFloat(Marati) +  parseFloat(Hindi) +  parseFloat(English) + parseFloat(Math) +  parseFloat(DataScience) +  parseFloat(History);
    let outof= (100);
    if(outof >= 35){
        document.querySelector("pass").innerHTML;
    }else if(outof <= 35){
        document.querySelector("Fail").innerHTML;
    }

    document.querySelector(".to").innerHTML = to;
    document.querySelector("outof").innerHTML = outof;

    if(outof > 35){
        document.querySelector(".Result h2").innerHTML = "you are pass";
    }else{
        document.querySelector(".Result h2").innerHTML = "you are fail";
    }
}