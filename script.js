const user = document.querySelector("#user");
const show = document.getElementById("show");
const again = document.querySelector(".again");
const rockpaperscissors = (user,cpu)=>{
    // returns 1 if user win, -1 if user lose , 0 if draw
    // conditions for draw
    if (user == cpu)
    {
        return 0;
    }
    // Non-Draw conditions
    // scissor and rock
    if (user = 'scissor' && cpu =='rock')
    {
        return -1;
    }
    else if (user = 'rock' && cpu == 'scissor')
    {
        return 1;
    }
    // paper and scissor
    if (user ='scissor' && cpu == 'paper')
    {
        return 1;
    }
    else if (user =='paper' && cpu == 'scissor')
    {
        return -1;
    }
    // rock and paper
    if (user ='rock' && cpu == 'paper')
    {
        return -1;
    }
    else if (user =='paper' && cpu == 'rock')
    {
        return 1;
    }
}
const cpuChance = ()=>{
    let number = Math.floor(Math.random() * 100) + 1;
    let cpu;
    if (number<33)
    {
        cpu = 'scissor';
    }
    else if (number>33 && number<66)
    {
        cpu = 'paper';
    }
    else
    {
        cpu = 'rock';
    }
    return cpu;
}
const playsound = (sound)=>{
    let audio = new Audio(`assets/${sound}`)
    audio.play();
}
user.addEventListener("click",(value)=>{
    let user = value.target.id;
    let cpu = cpuChance();
    let result = rockpaperscissors(user, cpu);
    if(result===0){
        show.innerHTML  = "<h2>Match Draw Try Again</h2>";
        playsound('click.mp3');
    }
    else if(result === -1){
        
        show.innerHTML = "<h2>You loose</h2>";
        playsound('loose.mp3');
    }
    else{
        show.innerHTML = `<img src="assets/youwin.png" >`;
        playsound('win.mp3');
    }
    console.log(result)
})
again.addEventListener("click",()=>{
    show.innerHTML = null;
})