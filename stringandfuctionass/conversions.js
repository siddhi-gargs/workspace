function isValidRadix(radix) {
  return radix === "decimal" || radix === "Hexadecimal" || radix === "decimal" || radix === "binary"; 
}

function ifRadixBinary(number) {
  let manupulativeInput = number;
      let binaryNumber = "";
      let makeLoopWorking = true;
      while (makeLoopWorking) {
        const remainder = manupulativeInput % 2;
        binaryNumber = "" + remainder + binaryNumber;
        manupulativeInput = manupulativeInput - remainder;
        if (manupulativeInput === 0) { 
          makeLoopWorking = false; 
        }
        
        manupulativeInput = manupulativeInput / 2;

      }
      return binaryNumber;
}

function respectiveNumberSystem(number, radix) {
  if (!isValidRadix(radix)) {
    return "Invalid conversion";
  }
  switch (radix) {
    case "binary":
      return ifRadixBinary(number);

  }
  
}

console.log(respectiveNumberSystem(7, "binary"));

//binaryConversion(12, "binary", 1100);





// testCase(12, "Hexadecimal", C);
// testCase(10, "Octal", 12);
// testCase(4567, "decimal", 4567);
