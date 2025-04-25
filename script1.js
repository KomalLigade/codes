var div = document.querySelectorAll('button[id]');
var display = 0;

function QuestionOfJava(){
    if(display == 1){
        div.style.display = 'block';
        display = 0;
    }
else{
    div.style.display = 'none';
    display = 1;
}
}

function QuestionOfHTML(){
    if(display == 1){
        div.style.display = 'block';
        display = 0;
    }
else{
    div.style.display = 'none';
    display = 1;
}
}