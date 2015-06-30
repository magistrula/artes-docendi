## Image Chooser

The objectives of this section are as follows: 
1. Add a button to our website which, when pressed, causes an image to appear on the page.
2. The image should change with each button press
3. No image should be displayed a second time until all images have been displayed once.

N.B.: In this section, we will cover how to create files & folders in Sublime instead of from the terminal. If you are not sure how to *right-click*, the easiest way is to hold down the `Ctrl` key then click the mouse or trackpad.

### Set Up Some New Files
1. Open your app folder in Sublime
  - Start Sublime then click File - Open, select your app folder, then press Open
2. In the side-bar to the left, if the `app` folder is not already open, click on it to expand it.
3. Create a folder to hold your image files:
  - Right-click on the `app` folder, then click "New Folder"
  - At the bottom of the window, the cursor will be blinking in a field where you can set the folder name. Type `img` then press ENTER.
4. Create a folder to hold your JavaScript files:
  - Right-click on the `app` folder again and add a second folder called `js`
5. Add a file to hold the code that will select and display the image: 
  - Right-click on the `js` folder then click "New File"
  - At the bottom of the Sublime window, enter the filename `image-chooser.js` then press ENTER.

### Transfer Images

Download the images below and save them to your new `img` folder.
  - [Achilles](https://github.com/magistrula/artes-docendi/blob/01-image-chooser/app/img/achilles.jpg?raw=true)
  - [Alexander](https://github.com/magistrula/artes-docendi/blob/01-image-chooser/app/img/alexander.jpg?raw=true)
  - [Atlas](https://github.com/magistrula/artes-docendi/blob/01-image-chooser/app/img/atlas.jpg?raw=true)
  - [Caesar](https://github.com/magistrula/artes-docendi/blob/01-image-chooser/app/img/caesar.jpg?raw=true)
  - [Hercules](https://github.com/magistrula/artes-docendi/blob/01-image-chooser/app/img/hercues.jpg?raw=true)
  - [Minerva](https://github.com/magistrula/artes-docendi/blob/01-image-chooser/app/img/minerva.jpg?raw=true)
  - [Scipio](https://github.com/magistrula/artes-docendi/blob/01-image-chooser/app/img/scipio.jpg?raw=true)
  - [Via Appia](https://github.com/magistrula/artes-docendi/blob/01-image-chooser/app/img/via-appia.jpg?raw=true)

### Enter HTML Code

Open the `index.html` file and replace the existing code with the code below:

(N.B.: Tip for opening files in Sublime: you can either 1) click on the file in the side bar or 2) press Command + T, start typing some letters from the file name, then uses the arrow keys and the ENTER button to select and open the desired file).

```html
<!doctype html>
<html>
  <head>
    <title>Artes Docendi</title>
  </head>
  <body align="center">
    <button onclick="setImage()">GO!</button>
    <br>
    <br>
    <img id="main-image" src="img/via-appia.jpg" height="600">

    <script src="js/image-chooser.js"></script>
  </body>
</html>
```

- The `<title>` element will cause the words "Artes Docendi" to appear on the browser tab when you open the page.
- The `<body>` element now has the attribute `align="center"`, which will cause all of the content to be centered.
- The `<button>` element will cause a button to appear on the page with the text "GO!," and the `onclick` attribute will cause a function called `setImage` to run when the button is clicked. We will be writing the `setImage` function in a later step.
- The two `<br>` elements will insert some white space after the button.
- The `<img>` element has an `id` attribute that will allow us to target it from our JavaScript code (more on that soon). Its height is set to 600 pixels, and the `src` tag instructs this image element to load the `via-appia.jpg` file in our `img/` directory.
- The `<script>` element instructs the browser to load the `image-chooser.js` JavaScript file in our `js` directory so that the functions in that file (such as the `setImage` function that we will be writing soon) will be available to the browser.

### Write Some JavaScript!

Open `image-chooser.js` and enter the code below, step by step: 

```javascript
var allImageNames = ['achilles.jpg','minerva.jpg','caesar.jpg','alexander.jpg','atlas.jpg','scipio.jpg','hercules.jpg'];
var imageNameBank = [];
var imageElement = document.getElementById('main-image');
```
We have just created three variables: `allImageNames`, `imageElement`, and `imageNameBank`. 
- `allImageNames` is an "array" that contains a list of the file names in our img folder. You'll notice that `via-appia.jpg` is not in the array. There's no special reason for this...it's just being done for the sake of an example. The way we're setting up this page, the Via Appia image will appear when the page loads, but once we start pressing the button, it will be replaced by a variety of other images.
- `imageNameBank` is an empty list. We are going to fill it up with the file names in the `allImageNames` array, then take one image name out at a time, and when `imageNameBank` becomes empty, we'll refill it again from the `allImageNames` array.
- `imageElement` is a reference to the `<img>` element in our html file. The `document` is a container for all of the elements in our web page. There are various things we can ask the `document` to do, and in this case, we are asking it to find an element with the id "image," and we are saving that element under the variable name `imageElement`.

```javascript
var setImage = function () {
  if (imageNameBank.length === 0) {
      imageNameBank = imageNameBank.concat(allImageNames);
  }

  var index = Math.floor(Math.random() * imageNameBank.length);
  var imageName = imageNameBank.splice(index, 1);

  imageElement.src = 'img/' + imageName;
}
```

This is the function that will run whenever we click the GO! button. Before describing the code in the `setImage` function, let's talk about what it needs to do:
  1. Make sure there is something in the `imageNameBank`. If there is nothing in there, fill up `imageNameBank` with the image names that are in the `allImageNames` array.
  2. Pick a random item from the `imageNameBank`.
  3. Instruct the `<img>` element that we've identified with the id `main-image` to update its `src` attribute and use the file name that we just picked from `imageNameBank`.

How the code works:
  * `if (imageNameBank.length === 0)`
    - If `imageNameBank` has nothing in it . . . 
  * `imageNameBank = imageNameBank.concat(allImageNames);`
    - Set `imageNameBank` equal to itself (an empty array) combined with the `allImageNames`array.
  * `var index = Math.floor(Math.random() * imageNameBank.length);`
    - Pick a random number between 0 and the number of items in `imageNameBank`
  * `var imageName = imageNameBank.splice(index, 1);`
    - From `imageNameBank`, remove 1 item at the position determined in Step 3 and save this as `imageName`.
  * `imageElement.src = 'img/' + imageName;`
    - Instruct the image element on our web page to change its `src` attribute to point to a new file inside the `img/` folder...the file name determined in Step 4.

Some notes on these individual steps:
  * Step 1:
    - `===` is how you check "is __ equal to __?"
    - `=` is how you say "Make __ equal to __" (e.g., Step 2)
  * Step 2:
    - `concat` is a way of combining two arrays. `[1,2,3].concat([4,5,6])` would give us `[1,2,3,4,5,6]`.
  * Step 3:
    - The position of an item in an array is called it's "index." The first item in an array has index 0. So, in our `allImageNames` array, 'achilles.jpg' is at position 0, 'minerva.jpg' is at position 1, 'caesar.jpg' is at position 2, etc.
    - `Math.random()` gives us a decimal number between 0 and 1 (including 0, up to but not including 1).
    - `Math.random()` * X gives us a number between 0 and X (including 0, up to but not including X).
    - `Math.floor(X)` rounds X down to the nearest integer.
    - If we have an array with 3 items and we want to target a random position in the array, we need to randomly generate the number 0, 1, or 2.
    - `Math.floor(Math.random() * 3)` will give us the random number we need.

Every time we click our GO! button, we want to choose a random image from our list, so we are going to ask the array That's it! We already told the `<button>` in our html page to run the `setImage` function whenever it is clicked, so all we have to do is start the server, load the web page, and click away.

### Start the server
  1. In the terminal, navigate to the "root" directory of your app: `cd ~/Workspace/{{YOUR_APP_NAME}}`
  2. Type `node server.js` to start the server
  3. In your web browser, navigate to `http://localhost:3000`, and you should see your button and the Via Appia image. Click GO! and see the magic happen.
  4. When you're done, remember to stop the server. You can do this by pressing Ctrl + C (not Command + C).