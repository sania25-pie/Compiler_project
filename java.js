document.getElementById('compile-btn').addEventListener('click', () => {
    const code = document.getElementById('cpp-code').value.trim();
  
    // The exact program lines we want to check against
    const expectedCode = `public class Player {\nString name;\nint score;\nvoid displayInfo() {\nSystem.out.println("Player Name: " + name + ", Score: " + score);\n}\n}\npublic class Main {\npublic static void main(String[] args) {\nPlayer player = new Player();\nplayer.name = "Hero";\nplayer.score = 100;\nplayer.displayInfo();\n}\n}`;


    const expectedCode1 = `public class GameObject {\nString name;\nvoid update() {\nSystem.out.println(name + " is updated.");\n}\n}\npublic\nclass Main {\npublic static void main(String[] args) {\nGameObject player = new GameObject();\nplayer.name = "Player";\nplayer.update();\n}\n}`;


    const expectedCode2 = `public class Main {\npublic static void main(String[] args) {\nString action = "Jump";\nhandleInput(action);\n}\nstatic void handleInput(String input) {\nif (input.equals("Jump")) {\nSystem.out.println("Player jumps!");\n}\n}\n}`;


    const expectedCode3 = `public class Main {\npublic static void main(String[] args) {\nfor (int i = 0; i < 100000; i++) {\nString temp = "Temporary String";\n}\nSystem.gc();\nSystem.out.println("Garbage collection suggested.");\n}\n}`;


    const expectedCode4 = `public class Main {\npublic static void main(String[] args) {\nSystem.out.println("Starting game...");\ndebug("Loading assets...");\ndebug("Game started.");\n}\nstatic void debug(String message) {\nSystem.out.println("DEBUG: " + message);\n}\n}`;
   
  
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
        outputElement.innerText += "Success: Output is 'Player Name: Hero, Score: 100'\n";
      }
       else if (code === expectedCode1)
         {
        outputElement.innerText += "Success: Output is 'Player is updated.'\n";
      }
        else if (code === expectedCode2) 
          {
          outputElement.innerText += "Success: Output is 'Player jumps!'\n";
        }
          else if (code === expectedCode3)
             {
            outputElement.innerText += "Success: Output is 'Garbage collection suggested.'\n";
          }
            else if (code === expectedCode4) 
              {
              outputElement.innerText += "Success: Output is 'Starting game...\nDEBUG: Loading assets...\nDEBUG: Game started.'\n";
            }
         
       else {
        // Provide clear error message
        outputElement.innerText += "Error: Code does not match any expected programs!\n";
      }
    }, 1000);
  });
  