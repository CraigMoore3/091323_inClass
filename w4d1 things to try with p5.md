# Week 4 Things to Try with p5.js

Using what we've learned and the Processing reference, figure out how to do
each of the following tasks. Start with the sketch that has a ball ping-ponging across the canvas.
Commit to the repo after each task that you complete.

Try to figure it out on your own and ask each other for help once you've tried enough times. If you've completed a task and you're asked for help, try to ask useful questions instead of providing answers.

## Animation and the Mouse

1. Modify the the sketch so the ball stops moving when the mouse is clicked. (Hint: lookup the `noLoop()` function in the p5.js reference)

2. Now that you've figured out how to make the ball *stop* moving when the mouse is clicked, can you figure out how to use `loop()` and `noLoop()` together so that it sits still *until* you click the mouse?

3. Change the code so that the ball starts and stops in response to a mouse click. (Hint: you can do this without an `if` statement. Remember boolean variables.)

4. Add a second shape that moves from left to right across the canvas. What happens when you click the mouse? Can you rework the code from #3 above so that only the original shape responds to the mouse? (hint: `loop()` and `noLoop()` are no longer useful.)

5. Find the `random()` function in the reference and make the ball change to a different shade of gray every time the mouse is clicked. Once you get that to work, try changing the code so it only changes to a different grey when the mouse causes the ball to start moving from a stop. (Hint: an `if` statement could be helpful here)

## Time

1. Make the background color of the canvas change 10 seconds after the page is loaded/refreshed. (Hint: lookup the `millis()` function in the p5.js reference. You will need an `if` statement to make this work.)

2. Make a rectangle with a fill color that is not grayscale. Have it fade in slowly when the page is loaded/refreshed. (Hint: Remember that `fill()` and the other functions related to color can accept an optional "alpha" argument)

## The Keyboard

1. Print a message on the browser's console when a key is pressed on the keyboard.

2. Change the code so it only prints the message if the `j` key is pressed. When you get that to work, try making it work whether it's a capital `J` or lowercase.

3. Change the previous code again so that the `j` or `J` includes in its console message the *direction* that the ball was traveling when the key was pressed.
