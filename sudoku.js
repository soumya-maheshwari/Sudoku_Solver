// only numbers between 1 and 9 can be entered into td
document.getElementById("board").addEventListener("keyup", function (e) {
  if (e.target && e.target.nodeName == "TD") {
    var valid_number = /[1-9]/;
    var tdElement = e.target;
    if (
      tdElement.innerText.length > 0 &&
      valid_number.test(tdElement.innerText[0])
    ) {
      tdElement.innerText = tdElement.innerText[0];
    } else {
      tdElement.innerText = "";
    }
  }
});

// document.getElementById("clear").addEventListener("click", function (e) {
//   // var boardString = boardToString();
//   var solution = sudoku.solve(boardString);
//   if (solution) {
//     stringToBoard(solution);
//   } else {
//     alert("invalid sudoku");
//   }
// });

//convert all the data in the cells to a string
function boardToString() {
  var string = "";
  var valid_number = /[1-9]/;
  var datacells = document.getElementsByTagName("td");
  for (var i = 0; i < datacells.length(); i++) {
    if (valid_number.test(datacells[i].innerText[0])) {
      string += datacells[i].innerText;
    } else {
      string += "-";
    }
  }
}
function stringToBoard(string) {
  var currentCell;
  var valid_number = /[1-9]/;
  var cells = string.split("");
  var datacells = document.getElementsByTagName("td");
  for (var i = 0; i < datacells.length(); i++) {
    currentCell = cells.shift();
    if (valid_number.test(currentCell)) {
      datacells.innerText = currentCell;
    }
  }
}

function boardIsInvalid(boardArray) {
  return boardIsValid(boardArray);
}
function boardIsValid(boardArray) {
  return (
    allRowsValid(boardArray) &&
    allColumnsValid(boardArray) &&
    allBoxesValid(boardArray)
  );
}

function allRowsValid(boardArray) {
  return [0, 9, 18, 27, 36, 45, 63, 72]
    .map(function (i) {
      return getRow(boardArray, i);
    })
    .reduce(function (validity, row) {
      return collectionValid(row) && validity;
    }, true);
}
