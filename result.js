const restart = document.querySelector('.restart')
const response = document.querySelector('.response .text')
const score = Number(localStorage.getItem('CurrentScore'));
const heighestscore = Number(localStorage.getItem('HighestScore'));

localStorage.setItem('CurrentScore', '0')
localStorage.q1visited = localStorage.q2visited = localStorage.q3visited = localStorage.q4visited = localStorage.q5visited = localStorage.q6visited = localStorage.q7visited = localStorage.q8visited = localStorage.q9visited = localStorage.q10visited = 'false';
localStorage.setItem('pageno', '0')
localStorage.setItem('isplayed', 'true')

if(score >=9){
    response.innerHTML = `"Great"`
}else if((score >= 6)&&(score<=8)){
    response.innerHTML = `"You doing great, keep learning"`
}else if(score<=5){
    response.innerHTML = `"You have to work hard"`
}

if(score>heighestscore){
    localStorage.setItem('HighestScore', `${score}`)
}


// --------------------------- progressbar logic ----------------------


const progressbar = document.querySelector('#progressbar')

progressbar.style = `--value:${(score/10)*100}`
if(score==10){
    progressbar.innerHTML = `${score}/10`;
}
else{
    progressbar.innerHTML = `0${score}/10`;
}
