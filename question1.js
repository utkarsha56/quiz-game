const options = document.querySelectorAll('.option')
const timebox = document.querySelector('.timer-box')

const correctaudio = document.querySelector('#correct-audio')
const wrongaudio = document.querySelector('#wrong-audio');
const bgaudio = document.querySelector('#bg-audio');
const speakerbtn = document.querySelector('.speaker-icon img')

const body = document.querySelector('body');
let ans;
let opportunity = 1;


// -------------------------------- audio ----------------

if(JSON.parse(localStorage.getItem('isMuted')))
    speakerbtn.src = 'mute.png'

speakerbtn.addEventListener('click', function(){
    if(!JSON.parse(localStorage.getItem('isMuted'))){
        localStorage.setItem('isMuted', 'true')
        speakerbtn.src = 'mute.png'
        bgaudio.pause()

    }else{
         speakerbtn.src = 'speaker-icon.png'
         localStorage.setItem('isMuted', 'false')
         bgaudio.play()
    }
})

if(!JSON.parse(localStorage.getItem('isMuted'))){
    bgaudio.play()
}





// --------------------------- countdown --------------------------

const startingtime = (new Date()).getTime() + 15000;

const countdown = setInterval(() => {

    // --------------------------- adding the timer in page
    const now = (new Date()).getTime();
    // console.log(Math.ceil((startingtime - now)/1000));
    const timer = Math.ceil((startingtime - now)/1000);

    if(timer<10){
        timebox.innerHTML = `00:0${timer}`;
    }
    else{
        timebox.innerHTML = `00:${timer}`;
    }
    // ------------------------------------ stoping the timer
    if(timer == 0){
        clearInterval(countdown)
        // stoptimer()
        console.log('time over');
        opportunity = 0;
    }

    // -------------------------------- changing the bg-c with time
    if(timer<=10){
        body.style.backgroundColor = "#E4E5C7";
    }
    if(timer<=5){
        body.style.backgroundColor = "#DBADAD";
    }


}, 1000);

function stoptimer(){
    clearInterval(countdown)
    console.log('stopped');
    
}


// ----------------------------- ans responses ------------------------

options.forEach((element) => {

    if(element.id == 2){
        ans = element;
    }
    
    element.addEventListener('click',(e)=>{
        
        if(opportunity){
            if(e.target.id == 2){
                e.target.style.borderColor = "#35BD3A";
                clearInterval(countdown)  
                opportunity = 0;
                if(localStorage.getItem('q1visited') == 'false'){
                    localStorage.setItem('CurrentScore', `${Number(JSON.parse(localStorage.CurrentScore)+1)}`)
                    localStorage.setItem('q1visited', 'true')
                    localStorage.setItem('pageno', '1')

                    if(!JSON.parse(localStorage.getItem('isMuted'))){
                        correctaudio.play();
                    }
                }
                else{
                    document.querySelector('.visited').style.display = 'block'
                }
            }
            else{
                e.target.style.borderColor = "#FF7A7A"
                ans.style.borderColor = '#35BD3A';
                clearInterval(countdown) 
                opportunity = 0;    
                if(localStorage.getItem('q1visited') == 'false'){
                    localStorage.setItem('q1visited', 'true')
                    localStorage.setItem('pageno', '1')

                    if(!JSON.parse(localStorage.getItem('isMuted'))){
                        wrongaudio.play()
                    }
                }
                else{
                    document.querySelector('.visited').style.display = 'block'

                }
            }
        }
    })
    
})


