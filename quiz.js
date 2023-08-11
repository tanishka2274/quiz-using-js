var questions = ['Which animal is known as the Ship of the Desert?', 'What do you call a house made of ice?', 'Which festival is called the festival of light?', 'Which is the world’s largest flower?', 'How many bones does an adult human have?'];
var count = 0;
function func() {
    // console.log("working");
    var person = prompt("please enter your name", "harry potter");
    if (person != null && person != " ") {

        document.getElementById('para').innerHTML = "Hello " + person + " we will start quiZ as soon as you hit start";
        document.getElementById('star').style.display = "block";

    }
}

function func2() {
    document.getElementById('ques').innerHTML = questions[0];
    count = 0;
    document.getElementById('para').innerHTML = "";
    document.getElementById('skr').innerHTML = "";
    document.getElementById('bt').style.display = "none";
}
function bfunc(i) {
    var c = i + 1;
    document.getElementById('ques').innerHTML = questions[c];
    ans();
}
function Next() {
    document.getElementById("result").innerHTML = "";
    var i = 0;
    var c = questions.length;
    for (i = 0; i < c; i++) {
        if (document.getElementById("ques").innerHTML === questions[i]) {
            bfunc(i);
            break;
        }
    }
}
function score(){
    document.getElementById('skr').innerHTML="your score is"+ count + "out of 5";
}
function ans() {
    if (document.getElementById('ques').innerHTML === "Which animal is known as the Ship of the Desert?") {
        var opt1 = document.createElement("button");
        opt1.innerHTML = "Camel";
        document.body.appendChild(opt1);
        opt1.onclick = function opta() {
            document.getElementById("result").style.color = "green";
            document.getElementById('result').innerHTML = "Your answer is right";
            setTimeout(Next, 1000);
            count++;
            opt2.style.display = "none";
            opt1.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";


        }
        var opt2 = document.createElement("button");
        opt2.innerHTML = "Lion";
        document.body.appendChild(opt2);
        opt2.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt3 = document.createElement("button");
        opt3.innerHTML = "Tiger";
        document.body.appendChild(opt3);
        opt3.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
             opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt4 = document.createElement("button");
        opt4.innerHTML = "Elephant";
        document.body.appendChild(opt4);
        opt4.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000); //ans is right or wrong reach next ques now
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
    }
    else if( document.getElementById('ques').innerHTML === "What do you call a house made of ice?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "house";
        document.body.appendChild(opt1);
        opt1.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            
            
        }
        var opt2 = document.createElement("button");
        opt2.innerHTML = "hut";
        document.body.appendChild(opt2);
        opt2.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            
        }
        var opt3 = document.createElement("button");
        opt3.innerHTML = "igloo";
        document.body.appendChild(opt3);
        opt3.onclick = function opta() {
            document.getElementById("result").style.color = "green";
            document.getElementById('result').innerHTML = "Your answer is right";
            setTimeout(Next, 1000);
            count++;
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt4 = document.createElement("button");
        opt4.innerHTML = "plot";
        document.body.appendChild(opt4);
        opt4.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000); //ans is right or wrong reach next ques now
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }

    }
    else if( document.getElementById('ques').innerHTML === "Which is the world’s largest flower?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "sunflower";
        document.body.appendChild(opt1);
        opt1.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            
            
        }
        var opt2 = document.createElement("button");
        opt2.innerHTML = "rafflesia";
        document.body.appendChild(opt2);
        opt2.onclick = function opta() {
            document.getElementById("result").style.color = "green";
            document.getElementById('result').innerHTML = "Your answer is right";
            setTimeout(Next, 1000);
            count++;
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt3 = document.createElement("button");
        opt3.innerHTML = "rose";
        document.body.appendChild(opt3);
        opt3.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt4 = document.createElement("button");
        opt4.innerHTML = "lily";
        document.body.appendChild(opt4);
        opt4.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000); //ans is right or wrong reach next ques now
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }

    }
    else if( document.getElementById('ques').innerHTML === "How many bones does an adult human have?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "206";
        document.body.appendChild(opt1);
        opt1.onclick = function opta() {
            document.getElementById("result").style.color = "green";
            document.getElementById('result').innerHTML = "Your answer is right";
            setTimeout(Next, 1000);
            count++;
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";


        }
        var opt2 = document.createElement("button");
        opt2.innerHTML = "203";
        document.body.appendChild(opt2);
        opt2.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt3 = document.createElement("button");
        opt3.innerHTML = "204";
        document.body.appendChild(opt3);
        opt3.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt4 = document.createElement("button");
        opt4.innerHTML = "205";
        document.body.appendChild(opt4);
        opt4.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000); //ans is right or wrong reach next ques now
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }

    }
    else if( document.getElementById('ques').innerHTML === "Which festival is called the festival of light?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "rakshabandhan";
        document.body.appendChild(opt1);
        opt1.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";


        }
        var opt2 = document.createElement("button");
        opt2.innerHTML = "christmas";
        document.body.appendChild(opt2);
        opt2.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt3 = document.createElement("button");
        opt3.innerHTML = "holi";
        document.body.appendChild(opt3);
        opt3.onclick = function opta() {
            document.getElementById("result").style.color = "red";
            document.getElementById('result').innerHTML = "Your answer is wrong";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }
        var opt4 = document.createElement("button");
        opt4.innerHTML = "diwali";
        document.body.appendChild(opt4);
        opt4.onclick = function opta() {
            document.getElementById("result").style.color = "green";
            document.getElementById('result').innerHTML = "Your answer is right";
            setTimeout(Next, 1000); //ans is right or wrong reach next ques now
            count++;
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";

        }

    }


    else {
    document.getElementById('ques').innerHTML = "QUIZ ends here";
    score();
}
 
}
