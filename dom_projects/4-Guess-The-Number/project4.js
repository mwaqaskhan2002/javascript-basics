let randomNumber = parseInt(Math.random() * 100 + 1);

// Select DOM Elements
const userInput = document.querySelector("#guessField");
const form = document.querySelector(".form"); // Form target kiya
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const LowOrHigh = document.querySelector(".low-or-high-value"); // Fixed dot (.)

const p = document.createElement("p");

let prevGuess = [];
let num_of_guess = 1;
let playGame = true;

if (playGame) {
  // Listener Form par lagaya
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    // Fixed < sign
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (num_of_guess === 10) {
      // Max 10 attempts
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  // Fixed capital G
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `; // Added spacing
  num_of_guess++;
  remaining.innerHTML = `${11 - num_of_guess}`;
}

function displayMessage(message) {
  LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  // Fixed HTML String
  p.innerHTML = `<h2 id="newGame" style="cursor: pointer; background: #29b6f6; color: #fff; padding: 10px; border-radius: 6px; margin-top: 15px;">Start New Game</h2>`;

  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // Fixed variable selection
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    num_of_guess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - num_of_guess}`;
    LowOrHigh.innerHTML = "";
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}




// // ┌─────────────────────────────────────────────────────────┐
// CATEGORY 1: State & Setup (Variables & Game Rules)
// CATEGORY 2: Event Listener & Input Validation
// CATEGORY 3: Game Core Logic (Comparison & UI Feedback)
// CATEGORY 4: Lifecycle Rules (End Game & Reset Game)
// └─────────────────────────────────────────────────────────┘

// CATEGORY 1: State & Setup (Shuruati Variables)
/*
// Step 1: Secret random number generate karo (1 se 100)
SET randomNumber = RANDOM_INTEGER(1 to 100)

// Step 2: Necessary DOM elements target karo
SET userInput = SELECT "#guessField"
SET form = SELECT ".form"
SET guessSlot = SELECT ".guesses"
SET remaining = SELECT ".lastResult"
SET LowOrHigh = SELECT ".low-or-high-value"
SET startOver = SELECT ".resultParas"

// Step 3: New Game button ke liye empty element create karo
SET p = CREATE_ELEMENT("p")

// Step 4: Game Tracking Variables (State)
SET prevGuess = [] (Empty Array for history)
SET num_of_guess = 1 (Attempt counter)
SET playGame = true (Flag to enable/disable input)
*/


// CATEGORY 2: Event Listener & Validation

/* 
// Form submission listen karo
IF playGame IS true THEN
    LISTEN FOR "submit" ON form (e):
        PREVENT REFRESH

        SET guess = CONVERT_TO_INTEGER(userInput.value)
        CALL validateGuess(guess)
    END LISTEN
END IF

FUNCTION validateGuess(guess):
    // Check 1: Not a Number
    IF guess IS NOT A NUMBER THEN
        ALERT "Please enter a valid number"

    // Check 2: Out of lower range
    ELSE IF guess < 1 THEN
        ALERT "Please enter a number greater than 1"

    // Check 3: Out of upper range
    ELSE IF guess > 100 THEN
        ALERT "Please enter a number less than 100"

    // Valid Input Case
    ELSE
        PUSH guess TO prevGuess ARRAY

        // Check if attempts reached maximum (10)
        IF num_of_guess EQUALS 10 THEN
            CALL displayGuess(guess)
            CALL displayMessage("Game Over!")
            CALL endGame()
        ELSE
            CALL displayGuess(guess)
            CALL checkGuess(guess)
        END IF
    END IF
END FUNCTION
*/

// CATEGORY 3: Game Core Logic (Comparison & Display)

/* 
FUNCTION checkGuess(guess):
    IF guess EQUALS randomNumber THEN
        CALL displayMessage("You guessed it right!")
        CALL endGame()
    ELSE IF guess < randomNumber THEN
        CALL displayMessage("Number is Too Low")
    ELSE IF guess > randomNumber THEN
        CALL displayMessage("Number is Too High")
    END IF
END FUNCTION

FUNCTION displayGuess(guess):
    CLEAR userInput.value
    APPEND guess + ", " TO guessSlot.innerHTML
    INCREMENT num_of_guess BY 1
    UPDATE remaining.innerHTML WITH (11 - num_of_guess)
END FUNCTION

FUNCTION displayMessage(message):
    SET LowOrHigh.innerHTML = "<h2>" + message + "</h2>"
END FUNCTION

*/

// CATEGORY 4: Lifecycle Rules (End & Restart)

/*
FUNCTION endGame():
    CLEAR userInput.value
    DISABLE userInput (setAttribute "disabled")
    
    // UI par New Game Button inject karo
    SET p.innerHTML = "<h2 id='newGame'>Start New Game</h2>"
    ATTACH p TO startOver (appendChild)
    
    SET playGame = false
    CALL newGame()
END FUNCTION

FUNCTION newGame():
    SET newGameButton = SELECT "#newGame"

    LISTEN FOR "click" ON newGameButton:
        GENERATE NEW randomNumber
        RESET prevGuess = []
        RESET num_of_guess = 1
        CLEAR guessSlot.innerHTML
        RESET remaining.innerHTML TO 10
        CLEAR LowOrHigh.innerHTML
        ENABLE userInput (removeAttribute "disabled")
        REMOVE p FROM startOver (removeChild)
        SET playGame = true
    END LISTEN
END FUNCTION
*/

/*
Step 1: Select Elements & Setup $\rightarrow$ HTML IDs ko pakda.
Step 2: Form Submit $\rightarrow$ Event listen kiya aur value nikali.
Step 3: Validation $\rightarrow$ Check kiya ke value valid integer ($1-100$) hai ya nahi.
Step 4: Compare & Display $\rightarrow$ High/Low bataya aur UI updates kiye.
Step 5: End/Reset $\rightarrow$ Dynamic button add kiya aur game restart ki capability di.
*/