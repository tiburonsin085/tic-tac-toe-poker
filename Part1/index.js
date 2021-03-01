console.log('Esteban ')

const board =[]

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    }
    else{
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)

    const a1 = board[0]
    const a2 = board[1]
    const a3 = board[2]
    const b1 = board[3]
    const b2 = board[4]
    const b3 = board[5]
    const c1 = board[6]
    const c2 = board[7]
    const c3 = board[8]

    if ((a1 !== undefined && ((a2&&a3)==a1))||
        (b1 !== undefined && ((b2&&b3)==b1))||
        (c1 !== undefined && ((c2&&c3)==c1))||
        (a1 !== undefined && ((b1&&c1)==a1))||
        (a2 !== undefined && ((b2&&c2)==a2))||
        (a3 !== undefined && ((b3&&c3)==a3))||
        (a1 !== undefined && ((b2&&c3)==a1))||
        (a3 !== undefined && ((b2&&c1)==a3))){
        alert('you rules')
        return
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        console.log(i)
      if (board[i] === undefined) {
        boardFull = false;
        console.log(boardFull)
      }
    }
    if (boardFull === true) {
      alert("Cat's game, there is no winner");
}
}

