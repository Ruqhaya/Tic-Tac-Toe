console.log("TIC TAC TOE")
let turn = "X";
let win=false;
const changeTurn = ()=>{
    return turn ==="X"? "O":"X";
} 
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,2,3,0],
        [3,4,5,2,10,0],
        [6,7,8,2,16,0],
        [0,3,6,-4,10,90],
        [1,4,7,3,10,90],
        [2,5,8,9,10,90],
        [0,4,8,3,10,45],
        [2,4,6,2,10,135],
    ]
    wins.forEach(indices => {
        const [a, b, c] = indices;
        const textA = boxtext[a].textContent;
        const textB = boxtext[b].textContent;
        const textC = boxtext[c].textContent;

        if (textA === textB && textB === textC && textA !== "") {
            document.querySelector(".turn").innerHTML = textA + " won";
            document.querySelector("#reset").textContent ="Restart";
            turn = "X";
            win = true;
            // console.log('won');
            document.querySelector('.image img').setAttribute('src', 'giphy (1).gif');
            document.querySelector('.image img').style.width='150px'; 
            document.querySelector('.line').style.width='16vw'; 
            document.querySelector(".line").style.transform = `translate(${indices[3]}vw, ${indices[4]}vw) rotate(${indices[5]}deg)`;
        }
    })
}

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML === "")
        {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            console.log("won");
            if(!win)
           {
            document.getElementsByClassName('turn')[0].innerHTML = "Turn of " +turn;
           }
        }
        allBoxesHaveValue = Array.from(boxes).every(box => box.querySelector('.boxText').innerHTML !== "");
        if(allBoxesHaveValue)
        {
            if(!win)
            {
                document.querySelector(".turn").innerHTML = "TIE RESTART GAME!";
                document.querySelector("#reset").textContent ="Restart";
                turn = "X";
                document.querySelector('.image img').setAttribute('src', 'giphy.gif');
                document.querySelector('.image img').style.width='150px';
            }
        }
    })
})
document.getElementById('reset').addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach((element) => {
        element.textContent = ""; // Use .textContent to update the text content
    });

    // Reset the turn and win variables
    turn = 'X';
    win = false;

    // Update the turn display
    document.querySelector('.turn').textContent = "Turn of " + turn;
    document.querySelector('.image img').style.width = '0px';
    document.querySelector("#reset").textContent ="Reset";
    turn = "X";
});

