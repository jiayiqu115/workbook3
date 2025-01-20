Project Overview
This project creates a dynamic visual effect by sampling random pixels from an image and displaying them on a canvas. The result is a mesmerizing pixel storm where each frame brings new colors and patterns to life.

How It Works
Load the Image:

The image is loaded using the preload() function so that it’s ready before the program starts.
The canvas size is set to 800x500, with a black background to highlight the effect.
Generate Random Pixels:

During each frame, a random pixel from the image is selected.
The color of the selected pixel is fetched using the get() function, and this color is used to draw a rectangle on the canvas.
Randomize Placement and Size:

The x and y positions of the rectangles are randomized to scatter them across the canvas.
The size of each rectangle is also random, ranging from 10 to 30 pixels, creating a lively, unpredictable look.
Continuous Updates:

The sketch runs continuously, picking new pixels and drawing them in real-time.
This creates an ever-changing artwork that looks different every time the program runs.
Key Features
Dynamic Pixel Sampling:

Every frame selects new pixels from the image, ensuring the artwork is always evolving.
Randomized Effects:

The positions and sizes of the rectangles are randomized, making the visuals exciting and varied.
Real-Time Interaction:

The effect plays out dynamically as the program runs, offering a new visual experience with every frame.
Steps to Create
Load the Image:

Use the preload() function to load the image file before the canvas is created.
Ensure the canvas dimensions complement the resolution of the image.
Set Up the Canvas:

In the setup() function, define the canvas size and initialize the black background.
Draw Randomized Rectangles:

Inside the draw() function, use the random() function to pick random x and y positions on the image.
Use the get() function to retrieve the color at the selected position.
Draw a rectangle with the fetched color and a random size between 10 and 30 pixels.
Update Continuously:

The draw() function runs in a loop, ensuring that the canvas is continuously updated with new pixel rectangles.
Practical Notes
Image Loading:

Ensure the image path is correct and that the file is included in your project folder.
Pixel Manipulation:

The get() function is used to read the color of a specific pixel, while fill() applies that color to the rectangles.
Experimentation:

You can adjust the size range of the rectangles or the canvas dimensions to explore different visual effects.
