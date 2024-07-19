# Puzzle-Game
This is a simple puzzle game implemented using JavaScript and HTML5 Canvas. The game presents a jigsaw puzzle where players can move puzzle pieces around to complete the image. The puzzle starts with one piece missing, and players need to swap pieces to reassemble the original image.
# Features
Interactive Gameplay: Click on puzzle pieces adjacent to the empty space to move them and solve the puzzle.
Dynamic Puzzle Generation: The game divides the image into a grid of pieces and handles the movement of pieces.
Responsive Canvas: The canvas adjusts to the dimensions specified, and pieces are drawn based on these dimensions.
# Technologies Used
HTML5: For structuring the game layout and canvas.
CSS3: For styling the canvas and positioning elements.
JavaScript: For game logic, including drawing pieces and handling user interactions.
HTML5 Canvas API: For rendering the puzzle pieces and managing the game board.
# Installation and Usage
Clone the Repository:

bash
Copy code
git clone https://github.com/Lalithabhimireddy13/puzzle game.git
cd puzzle-game
# Open the Game:

Navigate to the project folder and open index.html in your web browser. You can do this by double-clicking on the file or by dragging it into the browser window.
# How It Works
Image Loading: The game uses an image (specified in script.js) and divides it into a grid of pieces.
Piece Movement: Pieces adjacent to the empty slot can be moved into the empty space. The game updates the canvas to reflect these changes.
Interaction: Clicking on a piece swaps it with the empty space, allowing players to try and solve the puzzle.
# Future Enhancements
Add Difficulty Levels: Implement different grid sizes to increase or decrease the puzzle difficulty.
Solve Checker: Add functionality to check if the puzzle is solved and provide feedback.
User Interface Improvements: Enhance the UI with additional features such as restart buttons, timer, and move counters.
