document.getElementById('compile-btn').addEventListener('click', () => {
    const code = document.getElementById('cpp-code').value.trim();
  
    // The exact program lines we want to check against
    const expectedCode = `public class GameObject\n{\npublic float X { get; set; }\npublic float Y { get; set; }\npublic GameObject(float x, float y)\n{\nX = x;\nY = y;\n}\npublic void Move(float deltaX, float deltaY)\n{\nX += deltaX;\nY += deltaY;\n}\n}\nGameObject player = new GameObject(0, 0)\nplayer.Move(5, 3);\nConsole.WriteLine($"Player Position: ({player.X}, {player.Y})");`;


    const expectedCode1 = `using System;\nclass GameObject\n{\npublic string Name;\npublic void Update()\n{\nConsole.WriteLine($"{Name} is updated.");\n}\n}\nclass Program\n{\nstatic void Main()\n{\nGameObject player = new GameObject { Name = "Player" };\nplayer.Update();\n}\n}`;

    
    const expectedCode2 = `using System;\nclass Program\n{\nstatic void Main()\n{\nstring action = "Jump";\nHandleInput(action);\n}\nstatic void HandleInput(string input)\n{\nif (input == "Jump")\n{\nConsole.WriteLine("Player jumps!");\n}\n}\n}`;


    const expectedCode3 = `using System;\nclass Program\n{\nstatic void Main()\n{\nfor (int i = 0; i < 100000; i++)\n{\nstring temp = "Temporary\nString";\n}\nGC.Collect();\nConsole.WriteLine("Garbage collection completed.");\n}\n}`;

 
  
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
        outputElement.innerText += "Success: Output is 'Player Position: (5, 3)'\n";
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
            outputElement.innerText += "Success: Output is 'Garbage collection completed.'\n";
          }
          
       else {
        // Provide clear error message
        outputElement.innerText += "Error: Code does not match any expected programs!\n";
      }
    }, 1000);
  });
  