document.getElementById('compile-btn').addEventListener('click', () => {
    const code = document.getElementById('cpp-code').value.trim();
  
    // The exact program lines we want to check against
    const expectedCode = `#include <iostream>\nint main() {\nstd::cout << "hello ";\nreturn 0;\n}`;
    const expectedCode1 = `#include <iostream>\nusing namespace std;\nint main() {\nint num1 = 5;\nint num2 = 10;\nint sum = num1 + num2;\ncout << "The addition of " << num1 << " and " << num2 << " is: " << sum << endl;\nreturn 0;\n}`;
    const expectedCode2 = `#include <iostream>\nusing namespace std;\nint main() {\nint num1 = 21;\nint num2 = 8;\nint sub = num1 - num2;\ncout << "The subtraction of " << num1 << " and " << num2 << " is: " << sub << endl;\nreturn 0;\n}`;
    const expectedCode3 = `#include <iostream>\nusing namespace std;\nint main() {\nint num1 = 4;\nint num2 = 8;\nint multi = num1 * num2;\ncout << "The multiplication of " << num1 << " and " << num2 << " is: " << multi << endl;\nreturn 0;\n}`;
    const expectedCode4 = `#include <iostream>\nusing namespace std;\nint main() {\nint num1 = 8;\nint num2 = 2;\nint div = num1 / num2;\ncout << "The division of " << num1 << " and " << num2 << " is: " << div << endl;\nreturn 0;\n}`;
    const expectedCode5 = `#include <iostream>\nusing namespace std;\nint main() {\nint a = 10, b = 20;\ncout << "Before swapping: a = " << a << ",b = " << b << endl;\na = a + b;\nb = a - b;\na = a - b;\ncout << "After swapping: a = " << a << ", b = " << b << endl;\nreturn 0;\n}`
  
  
    const outputElement = document.getElementById('output');
    outputElement.innerText = "Checking code...\n";
  
    //for alert box
    if (!code) {
      alert("Error: Please enter some C++ code.");
      outputElement.innerText = ""; // Clear output
      return; // Exit the function
  }
  
    setTimeout(() => {
      // Check if the input code matches the first expected code exactly
      if (code === expectedCode) {
        outputElement.innerText += "Success: Output is 'hello'\n";
      }
       else if (code === expectedCode1)
         {
        outputElement.innerText += "Success: Output is 'The addition of 5 and 10 is: 15'\n";
      }
        else if (code === expectedCode2) 
          {
          outputElement.innerText += "Success: Output is 'The subtraction of 21 and 8 is: 13'\n";
        }
          else if (code === expectedCode3)
             {
            outputElement.innerText += "Success: Output is 'The multiplication of 4 and 8 is: 32'\n";
          }
            else if (code === expectedCode4) 
              {
              outputElement.innerText += "Success: Output is 'The division of 8 and 2 is: 4'\n";
            }
            else if (code === expectedCode5) 
              {
              outputElement.innerText += "Success: Output is 'Before swapping: a = 10, b = 20\nAfter swapping: a = 20, b = 10'\n";
            }
       else {
        // Provide clear error message
        outputElement.innerText += "Error: Code does not match any expected programs!\n";
      }
    }, 1000);
  });
  