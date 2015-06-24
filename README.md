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
  </body>
  <script src="js/image-chooser.js"></script>
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
var imageElement = document.getElementById('main-image');
var imageNameBank = [];
```
We have just created three variables: `allImageNames`, `imageElement`, and `imageNameBank`. 
- `allImageNames` is an "array" that contains a list of the file names in our img folder. You'll notice that `via-appia.jpg` is not in the array. There's no special reason for this...it's just being done for the sake of an example. The way we're setting up this page, the Via Appia image will appear when the page loads, but once we start pressing the button, it will be replaced by a variety of other images.
- `imageElement` is a reference to the `<img>` element in our html file. The `document` is a container for all of the elements in our web page. There are various things we can ask the `document` to do, and in this case, we are asking it to find an element with the id "image," and we are saving that element under the variable name `imageElement`.
- `imageNameBank` is an empty list. It won't be empty for long, though. More on that soon.

```javascript
var getRandomIndexInArray = function (array) {
    return Math.floor(Math.random() * array.length);
}
```

We have just written our first function, called `getRandomImageIndexInArray`. Why do we need this function? 
- In our `allImageNames` array, 'achilles.jpg' is at position 0, 'minerva.jpg' is at position 1, 'caesar.jpg' is at position 2, etc.
- Every time we click our GO! button, we want to choose a random image from our list, so we are going to ask the array to give us the image name at a random position. In code, the position of an item in an array is called its `index`, so we need a function that will give us a random index.
- In order for the function to give us this random number, it needs to know how many items are in the array, so we have to provide the array to the function, which is indicated like so: `function (array)`
- JavaScript gives us a way to get a random number between 0 and 1: `Math.random()`. If we take that number and multiply it by 5, for example, we will end up with a number between 0 and 5, but the number will be a decimal, like 2.3047983. We need a whole number, so we have to turn something like 2.3047983 into the number 2 instead, and that's what `Math.floor()` does (it rounds down).
- Let's say we had an array called myArray: `var myArray = ['a','b','c','d','e'];`. If we run `getRandomIndexInArray(myArray)`, here's  what would happen, with made-up values for the sake of an example:
    -. `Math.random()` gives us `.9`
    -. `array.length` = `5`, because there are 5 items in `myArray`
    -. `.95 * 5 = 4.75`
    -. `Math.floor(4.75)` = `4`
    -. The `return` keyword means that, when the function is finished running, it should report the value that it computed so that we can do something with that number.
    -. If we did something like this: `var randomIndex = getRandomIndexInArray(myArray)`, then `randomIndex` would now have the value `4`;
  
```javascript
var getRandomImageName = function () {
    if (imageNameBank.length === 0) {
        imageNameBank = imageNameBank.concat(allImageNames);
    }
    var index = getRandomIndexInArray(imageNameBank);
    return imageNameBank.splice(index, 1);
}
```

Notice that this new function `getRandomImageName` uses the `getRandomIndexInArray` function that we created previously. The purpose of `getRandomImageName` is to give us the name of our random image. Before we go into explaining how this function works, let's talk about how we're going to go about getting this random image over and over again:
  - When we click on our GO! button, we're going to cycle through all the images, and not just once. We're going to go through again and again and again. 
  - We are going to keep one copy of the list that we never touch: this is the `allImageNames` array, and it will be a list of all the images we could possibly use.
  - We have already created a second array `imageNameBank`, and that is the one we'll be taking things out of.
  - At first `imageNameBank` is empty, so before we can choose our first image, we have to dump everything from `allImageNames` into `imageNameBank`. 
  - Next, we will pick a random index in the `imageNameBank` array and take out the name that appears in that position. Now, `imageNameBank` will have one fewer item in it. `allImageNames` still has all the possible images we could choose, but `imageNameBank` only has the images that have not been chosen yet.
  - We will continue to grab things out of `imageNameBank`, and each time we go to take something out, we will check if `imageNameBank` is empty. If it is, we'll just dump everything in `allImageNames` into `imageNameBank` in order to refill it.

Ok, so here's how the function works, line by line: 
  - If the length of `imageNameBank` is 0 (i.e., if there is nothing in it), then let's `imageNameBank` equal itself (an empty array) concatenated (combined) with the `allImageNames` array. `array1.concat(array2)` is how we dump everything from `array2` into `array1`.
  - Let's get a random index in the `imageNameBank` array and assign that number to the variable `index`.
  - Finally let's remove (splice) some items from `imageNameBank`. We want the item at the random `index` we computed, and we only want to take out `1` item (`imageNameBank.splice(index, 1)`).
  - Whatever name we spliced out, lets report (return) that name at the end of the function.

```javascript
var setImage = function () {
    var imageName = getRandomImageName();
    imageElement.src = 'img/' + imageName;
}
```

Finally! This is it. The `setImage` function. The job of this function is to pick a random image name then tell the `<img>` element on our html page to display that file.
  - First, we create a variable `imageName`, and to come up with a value for that variable, we run `getRandomImageName()`.
  - `getRandomImageName` checks if the `imageNameBank` is empty and refills it if necessary.
  - `getRandomImageName` uses `getRandomIndexInArray` to come up with a random position in `imageNameBank` then reports back the image name at that index.
  - Now that the `setImage` function has come up with an `imageName`, it can set the `src` attribute of the `imageElement`. If you look back at our html code, you'll see that the `src` attribute starts out as `'img/via-appia.jpg'`, but we're going to change that now.
  - The `setImage` function instructs the `imageElement` to set its `src` attribute to `img/` + the name of the random image we selected, so we might end up with `img/alexander.jpg`, for example.

  That's it! We already told the `<button>` in our html page to run the `setImage` function whenever it is clicked, so all we have to do is start the server, load the web page, and click away.

### Start the server
  1. In the terminal, navigate to the "root" directory of your app: `cd ~/Workspace/{{YOUR_APP_NAME}}`
  2. Type `node server.js` to start the server
  3. In your web browser, navigate to `http://localhost:3000`, and you should see your button and the Via Appia image. Click GO! and see the magic happen.