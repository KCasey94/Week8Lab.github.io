const game=() => {
    const play = () => {
        const rockB =document.querySelector('.rock');
        const paperB =document.querySelector('.paper');
        const scissorsB =document.querySelector('.scissors');
        const userOps = [rockB, paperB, scissorsB];
        const gameOps = ['rock', 'paper', 'scissors']

        userOps.forEach(option => {
            option.addEventListener('click',function(){
                const pickNum = Math.random()*3;
                const compPick = gameOps[pickNum];

                winner(this.innerText, compPick)
            })
        })
    }

    const winner = (user, game) => {
        const result = document.querySelector('.result');
        if(user === game){
            result='Tie';
        }
        else if(user =='rock'){
            if(game =='paper'){
                result='The game chose paper. You lose!'; 
            }else{
                result='The game chose scissors. You won!';
            }
        }
        else if(user =='paper'){
            if(game =='scissors'){
                result='The game chose scissors. You lose!'; 
            }else{
                result='The game chose rock. You won!';
            }
        }
        else if(user =='scissors'){
            if(game =='rock'){
                result='The game chose rock. You lose!'; 
            }else{
                result='The game chose paper. You won!';
            }
        }

    }
    const result=document.querySelector('result');
    userOps.forEach(option =>{
        option.style.display='none';
    })
    play();
}
game();