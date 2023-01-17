player_1_name=localStorage.getItem("player_1_name");
player_2_name=localStorage.getItem("player_2_name");
player_1_score=0;
player_2_score=0;
document.getElementById("player_1_name").innerHTML=player_1_name;
document.getElementById("player_2_name").innerHTML=player_2_name;
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML="Question Turn "+player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn "+player_2_name;
function send1(){
    number1=document.getElementById("1").value;
    number2=document.getElementById("2").value;
    actual_answer=parseInt(number1)* parseInt(number2);
    question_number="<h4>"+number1+"X"+ number2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn-btn-info' onclick='check()'>CHECK</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("1").value="";
    document.getElementById("2").value="";
    
}
question_turn="player1";
answer_turn="player2";
function check(){
    if(answer==answer){
        if(answer_turn=="player1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
        }   
        
       }
       if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn -"+player_2_name;
       }
       else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn -"+player_1_name;
       }
       if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn -"+player_2_name;
       }
       else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn -"+player_1_name;
       }
       document.getElementById("output").innerHTML="";
    
}