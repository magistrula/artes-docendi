## CSS Styling

The objectives of this section are as follows: 
1. Spruce up our image chooser page with some CSS styling

### Set Up Some New Files
1. In the `app` directory within your project folder, create a new folder called `css`, and create a new file in that folder called `style.css`.
2. Load the new CSS file in your html page:

  ```html
  <head>
    <title>Artes Docendi</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  ```

### Remove Styling-related Content from Your HTML
We will handle all of our styling using CSS.
  1. Remove `align="center"` from the `<body>`.
  2. Remove the two `<br>` elements after the button.
  3. Remove `width=600` from the `img` element.

### Configure Styling Using CSS
CSS stands for "Cascading Style Sheet," and it allows us to add styling to the elements displayed by our html page.

1. Give the background of the page a color instead of plain white:
  
  Add to `style.css`:
  ```css
  body {
    background-color: #B84D4D;
  }
  ```
  `#B84D4D` is called a "hex code," and it's a way of representing a color. Here's the [color picker](http://www.w3schools.com/tags/ref_colorpicker.asp) that I usual use.

2. Make all buttons have rounded edges, a thin, solid, dark gray border, a yellow background color, and the Trebuchet font, or Helvetica if Trebuchet is not available, or sans-serif if nothing else is available.
  
  Add to `style.css`:
  ```css
  button {
    border-radius: 10px;
    border: 1px solid #333;
    background-color: #FFFF99;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }
  ```

3. When a button is clicked, let's change it's color to a light orange.
  
  Add to `style.css`:
  ```css
  button:active {
    background-color: #FFCC99;
  }
  ```

4. After a button has been clicked, let's make sure no weird outline shows up around it.
  
  Add to `style.css`:
  ```css
  button:focus {
    outline: none;
  }
  ```

5. Let's create a "large button" that is big and easy to click.
  
  Adjust the `<button>`tag in `index.html`:
  ```html
  <button class="large-button" onclick="setImage()">GO!</button>
  ```

  Add to `style.css`:
  ```css
  .large-button {
    font-size: 28px;
    padding: 10px 20px;
  }
  ```

6. Let's apply some special styling to the particular large button that appears above the image. We'll make sure that it appears on its own line (`display: block`), that it has 20 pixels of space above and below it and that the space and on the left and right automatically adjust to keep the button centered on the page (`margin: 20px auto`).
  
  Adjust the `<button>`tag in in `index.html`: 
  ```html
  <button class="large-button set-image-button" onclick="setImage()">GO!</button>
  ```

  Add to `style.css`:
  ```css
  .set-image-button {
    display: block;
    margin: 20px auto;
  }
  ```

7. Finally, let's add some styling to the image element itself. Appears on its own line, centered on the page, 600 pixels high, rounded corners, and some shadowing to make it pop.

  Add to `style.css`:
  ```css
  #main-image {
    display: block;
    margin: 0 auto;
    height: 600px;
    border-radius: 20px;
    box-shadow: 2px 1px 10px #333;
  }
  ```

The best way to understand all of these CSS properties is to remove them one at a time then reload the page and see the difference.