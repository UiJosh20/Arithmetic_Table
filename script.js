

function calc() {
  var one = firstOne.value;
  var two = secondOne.value;
  var operation = dropdown.value;
  var resultTable = document.createElement('table');
  var tbody = document.createElement('tbody');
  
  var pass = "./sounds/bonus.wav";
  var songOn = new Audio(pass);
        songOn.play();
  
  
  if (one == "" && two == ""){
    alert("Please enter numbers")
  }else if(one != "" && two != ""){
    
    
    for(i=1; i<=one; i++)
    {
      var row = document.createElement('tr');
      for(j=1; j<=two; j++)
      {
      var cell = document.createElement('td');
      var result;
      if (operation == '+'){
        result = i + j;
        
      }else if (operation == '-'){
        
        result = i - j;
      } else if (operation == '/'){
        
        result = i / j;
      }else if (operation == '*'){
        result = i * j;
      }
      cell.textContent = `${j} ${operation} ${i} = ${result}`;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  resultTable.appendChild(tbody);
  var display = document.getElementById('display');
  display.innerHTML = '';
  display.appendChild(resultTable);
}
}





