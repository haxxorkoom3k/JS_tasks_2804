//config
task1p = document.querySelector('#task1')
task2p = document.querySelector('#task2')
task3p = document.querySelector('#task3')

// task 1
function palmTree(n) {
    if (typeof n !== "number" || n < 0) {
      return task1p.innerHTML = false;
    }
    return task1p.innerHTML = "p".repeat(n);
  }

// task 2
function autoReplace(needles, change, haystack) {
    for (let i = 0; i < needles.length; i++) {
        haystack = haystack.split(needles[i]).join(change);
      }
      task2p.innerHTML = haystack;
}

//task 3 - не работает
function autoTags(str, tags, url='https://mysite.local/tag/') {
    tags = '(' + tags.join("|") + ')';
    task3p.innerHTML = str.replace ( new RegExp(tags, "gi"), `<a href="${url}$1>@$1</a>` )
}

//task 5
const grid = document.getElementById('grid');
const cells = document.getElementsByClassName('cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';

function checkWinner() {
  const winningComb = [
    ['cell00', 'cell01', 'cell02'],
    ['cell10', 'cell11', 'cell12'],
    ['cell20', 'cell21', 'cell22'],
    ['cell00', 'cell10', 'cell20'],
    ['cell01', 'cell11', 'cell21'],
    ['cell02', 'cell12', 'cell22'],
    ['cell00', 'cell11', 'cell22'],
    ['cell02', 'cell11', 'cell20'],
  ];
  for (let i of winningComb) {
    if (document.getElementById(i[0]).innerHTML === currentPlayer
      && document.getElementById(i[1]).innerHTML === currentPlayer
      && document.getElementById(i[2]).innerHTML === currentPlayer) {
      return true;
    }
  }
  return false;
}

function changePlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
}

function cellClickHandler() {

  if (this.innerHTML === '' && !checkWinner()) {
    this.innerHTML = currentPlayer; 
    if (checkWinner()) {
      alert(currentPlayer + ' победил!');
    } else {
      changePlayer();
    }
  }
}

resetButton.addEventListener('click', function() {
  for (let cell of cells) {
    cell.innerHTML = '';
  }
  currentPlayer = 'X';
});

for (let cell of cells) {
  cell.addEventListener('click', cellClickHandler);
}