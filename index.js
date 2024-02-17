let i = 1;
let blocks = document.querySelectorAll(".block");

function blockClick(event) {
  const block = event.target;
  if (i % 2 === 0) {
    block.innerHTML = "O";
    i++;
  } else {
    block.innerHTML = "X"; 
    i++;
  }
  block.removeEventListener("click", blockClick);
  const winnerSymbol = winner();
  if (winnerSymbol) {
    alert(`${winnerSymbol} WINS !`);
  }
}



blocks.forEach((block) => {
  block.addEventListener("click", blockClick);
});

function winner() {
  const blocksContent = [
    blocks[0].innerHTML,
    blocks[1].innerHTML,
    blocks[2].innerHTML,
    blocks[3].innerHTML,
    blocks[4].innerHTML,
    blocks[5].innerHTML,
    blocks[6].innerHTML,
    blocks[7].innerHTML,
    blocks[8].innerHTML,
  ];

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      blocksContent[a] &&
      blocksContent[a] === blocksContent[b] &&
      blocksContent[a] === blocksContent[c]
    ) {
      return blocksContent[a]; 
    }
  }
  return null;
}


function reset(){
    alert("Game Has Restarted !")
    blocks.forEach((block)=>{
        block.innerHTML = '';
        block.classList.remove('winner');
    });

    blocks.forEach((block)=>{
        block.addEventListener("click",blockClick);
    });

    i=1;
}