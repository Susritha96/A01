function lengthConverter() {
      var input = document.getElementById("input").value; //first input value
      var measureInput = document.getElementById("selectInput"); //first select reference
      var measureOutput = document.getElementById("selectOutput"); //second select reference
      var result = document.getElementById("output"); //second input reference
      if ((measureInput.value == "m" && measureOutput.value == "m") ||
            (measureInput.value == "cm" && measureOutput.value == "cm") ||
            (measureInput.value == "mm" && measureOutput.value == "mm")){
            result.value = input;
      } else if ( measureInput.value == "m" && measureOutput.value == "cm"){
            result.value = input * 100;
      }else if ( measureInput.value == "m" && measureOutput.value == "mm"){
            result.value = input * 1000;
      }else if ( measureInput.value == "cm" && measureOutput.value == "mm"){
            result.value = input * 10;
      }else if ( measureInput.value == "mm" && measureOutput.value == "m"){
            result.value = input/1000;
      }else if ( measureInput.value == "cm" && measureOutput.value == "m"){
            result.value = input/100;
      }else if ( measureInput.value == "mm" && measureOutput.value == "cm"){
            result.value = input/10;
      }
}

//This part takes the value from the second input to perform calulation and displays it in first input
function reverseConverter() {
      var input = document.getElementById("output").value; //second input value
      var measureInput = document.getElementById("selectInput"); //first select reference
      var measureOutput = document.getElementById("selectOutput"); //second select reference
      var result = document.getElementById("input"); //first input reference
      if ((measureInput.value == "m" && measureOutput.value == "m") ||
            (measureInput.value == "cm" && measureOutput.value == "cm") ||
            (measureInput.value == "mm" && measureOutput.value == "mm")){
            result.value = input;
      } else if ( measureInput.value == "cm" && measureOutput.value == "m"){
            result.value = input/100;
      }else if ( measureInput.value == "mm" && measureOutput.value == "m"){
            result.value = input/1000;
      }else  if ( measureInput.value == "mm" && measureOutput.value == "cm"){
            result.value = input*10;
      }else if ( measureInput.value == "cm" && measureOutput.value == "mm"){
            result.value = input/10;
      }else if ( measureInput.value == "m" && measureOutput.value == "cm"){
            result.value = input * 100;
      }else if ( measureInput.value == "m" && measureOutput.value == "mm"){
            result.value = input * 1000;
      }
}

//Check which function should be used when the value in the selects are changed
function selectFunction(){
      var measureInput = document.getElementById("selectInput"); //first select reference
      var measureOutput = document.getElementById("selectOutput"); //second select reference
      if ((measureInput.value == "m" && measureOutput.value == "cm") ||
            (measureInput.value == "cm" && measureOutput.value == "mm") ||
            (measureInput.value == "m" && measureOutput.value == "mm")){
            this.lengthConverter(); 
      } else if ((measureInput.value == "cm" && measureOutput.value == "m") ||
            (measureInput.value == "mm" && measureOutput.value == "m") ||
            (measureInput.value == "mm" && measureOutput.value == "cm")){
            this.reverseConverter();
      }else{
            this.reverseConverter();
      }
}
