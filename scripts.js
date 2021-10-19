let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById("next-lbl").innerText = ""+nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   let table = document.getElementById("gameboard");
    let cells = table.getElementsByTagName('td');
    for (let i = 0;i<9;i++)
   {
       cells[i].innerHTML = '<button>[]</button>';
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   event.target.innerText = ""+nextPlayer;
   event.target.disabled = true;
   if (nextPlayer == 'X')
   nextPlayer = 'O';
   else 
   nextPlayer = 'X';
   document.getElementById("next-lbl").innerText = ""+nextPlayer;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById("game-over-lbl").innerText = "game over";
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    for (let i=0; i<btns.length; i++)
    {
        if (btns[i].innerText == "[]")
        {
            return false;
        }
    }
    return true;
}
