document.addEventListener('DOMContentLoaded',function (){
    const grid=document.querySelector('.grid');
    const flagsLeft=document.querySelector('#flags-left');
    const width=10;
    let bombAmount=20;
    let squares=[];
    console.log(grid);
    //Creating the board
    function createBoard(){
        flagsLeft.innerHTML=bombAmount;
        //get shuffled game array with random bombs
        const bombArray=Array(bombAmount).fill('bomb');
        const emptyArray=Array(width*width-bombAmount).fill('valid');
        const gameArray=emptyArray.concat(bombArray);
        const shuffledArray=gameArray.sort(()=>Math.random-0.5);

        for(let i=0;i<width*width;i++){
            const square=document.createElement('div');
            square.id=i;
            square.classList.add(shuffledArray[i])
            grid.appendChild(square);
            squares.push(square);
            //simple click
            square.addEventListener('click',function(){
                click(square);
            })
            //cntrl and left click
            square.addEventListener('click',function(){
                // addFlag(square)
            })
        }
        //adding numbers
        for(let i=0;i<squares.length;i++){
            let total=0;
            const isLeftEdge=(i%width===0);
            const isRightEdge=(i%width ===width-1);
        }
    }
    createBoard()
    function click(square){
        console.log(square);
    }
})