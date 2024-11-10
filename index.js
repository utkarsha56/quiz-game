const scorebord = document.querySelector('.heighest-score .score')
const deletebtn = document.querySelector('.delete-data')
const deletenotification = document.querySelector('.delete-notification p')
const startbtn = document.querySelector('.start .text p')
const nextbtn = document.querySelector('.start a')
const pageno = Number(localStorage.getItem('pageno'))

function firststorage(){
    if(!localStorage.getItem('rememberme')){
        
        localStorage.setItem('rememberme', 'true')
        localStorage.setItem('CurrentScore', '0')
        localStorage.setItem('HighestScore', '0')
        localStorage.setItem('isMuted', 'false')
        localStorage.setItem('isplayed', 'false')
        localStorage.setItem('pageno', '0')
        localStorage.setItem('q1visited', 'false')
        localStorage.setItem('q2visited', 'false')
        localStorage.setItem('q3visited', 'false')
        localStorage.setItem('q4visited', 'false')
        localStorage.setItem('q5visited', 'false')
        localStorage.setItem('q6visited', 'false')
        localStorage.setItem('q7visited', 'false')
        localStorage.setItem('q8visited', 'false')
        localStorage.setItem('q9visited', 'false')
        localStorage.setItem('q10visited', 'false')
    
    }
}
firststorage()


const heighestscore = Number(localStorage.getItem('HighestScore'))
if(pageno){
    scorebord.innerHTML = 'Not completed the game'
    startbtn.innerHTML = `Question ${pageno} >>`
    nextbtn.href = `question${pageno}.html`

}
else if(heighestscore){
    scorebord.innerHTML = `${heighestscore}/10`
}
else{
    scorebord.innerHTML = 'New Player'
}

deletebtn.addEventListener('click', function(){
    localStorage.setItem('HighestScore', '0')
    localStorage.setItem('isplayed', 'false')
    localStorage.setItem('isMuted', 'false')
    localStorage.setItem('pageno', '0')
    localStorage.q1visited = localStorage.q2visited = localStorage.q3visited = localStorage.q4visited = localStorage.q5visited = localStorage.q6visited = localStorage.q7visited = localStorage.q8visited = localStorage.q9visited = localStorage.q10visited = 'false';
    deletenotification.style.display = "block"
    startbtn.innerHTML = `Start Now >>>`
    nextbtn.href = "question1.html"
    scorebord.innerHTML = 'New Player'
    firststorage()
    setTimeout(() => {
        deletenotification.style.display = "none"
    }, 1000);
})
