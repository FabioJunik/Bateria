document.body.addEventListener('keyup',event=>{
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value;

    if(song !== '')
    {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);

    let keyElement = document.querySelector(`div[data-key="${sound}"`);

    if(!audioElement)return
        
    audioElement.currentTime = 0;
    audioElement.play();
    
    keyElement.classList.add('active');
    setTimeout(()=>keyElement.classList.remove('active'),300);

}

function playComposition(songArray){
    let weit=0;

    songArray.forEach(songItem => {
        setTimeout(()=> playSound(`key${songItem}`),weit); 
        weit += 250;
    });
}   