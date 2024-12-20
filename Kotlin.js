document.getElementById('compile-btn').addEventListener('click', () => {
    const code = document.getElementById('cpp-code').value.trim();
  
    // The exact program lines we want to check against
    const expectedCode = `fun log(message: String) {\nprintln("LOG: $message")\n}\nfun main() {\nprintln("Starting game...")\nlog("Loading assets...")\nlog("Game started.")\n}`;


    const expectedCode1 = `fun loadScene(sceneName: String) {\nprintln("Loading scene: $sceneName")\n}\nfun main() {\nloadScene("MainMenu")\nloadScene("GameLevel1")\n}\n`;

    const expectedCode2 = `import kotlinx.coroutines.*\nfun main() = runBlocking {\nrepeat(5) {\nprintln("Game loop iteration $it")\ndelay(500L)\n}\nprintln("Game loop ended")\n}\n`;


    const expectedCode3 = `enum class AIState {\nIDLE, ATTACKING, CHASING\n}\nclass Enemy(var state: AIState) {\nfun performAction() {\nwhen (state) {\nAIState.IDLE -> println("Enemy is idle")\nAIState.ATTACKING -> println("Enemy is attacking")\nAIState.CHASING -> println("Enemy is chasing")\n}\n}\n}\nfun main() {\nval enemy = Enemy(AIState.CHASING)\nenemy.performAction()\n}\n`;


    const expectedCode4 = `class GameObject(val name: String, val x: Int, val y: Int) {\nfun checkCollision(other: GameObject): Boolean {\nreturn this.x == other.x && this.y == other.y\n}\n}\nfun main() {\nval player = GameObject("Player", 5, 5)\nval enemy = GameObject("Enemy", 5, 5)\nif (player.checkCollision(enemy)) {\nprintln("${player.name} collided with ${enemy.name}")\n} else {\nprintln("No collision detected")\n}\n}`;

   
  
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
        outputElement.innerText += "Success: Output is 'Starting game...\nLOG: Loading assets...\nLOG: Game started.'\n";
      }
       else if (code === expectedCode1)
         {
        outputElement.innerText += "Success: Output is 'Loading scene: MainMenu\nLoading scene: GameLevel1'\n";
      }
        else if (code === expectedCode2) 
          {
          outputElement.innerText += "Success: Output is 'Game loop iteration 0\nGame loop iteration 1\nGame loop iteration 2\nGame loop iteration 3\nGame loop iteration 4\nGame loop ended'\n";
        }
          else if (code === expectedCode3)
             {
            outputElement.innerText += "Success: Output is 'Enemy is chasing'\n";
          }
            else if (code === expectedCode4) 
              {
              outputElement.innerText += "Success: Output is 'Player collided with Enemy'\n";
            }
       else {
        // Provide clear error message
        outputElement.innerText += "Error: Code does not match any expected programs!\n";
      }
    }, 1000);
  });
  