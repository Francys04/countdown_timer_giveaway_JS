
## Coutdown-Timmer -> Giveaway
- The provided code appears to be a JavaScript program and an HTML document for creating a countdown timer with a giveaway message. Here's a breakdown of what each part of the code is doing:
### Features:

1. A visually appealing design with a header, image, giveaway information, and a countdown timer.
2. The countdown timer shows the number of days, hours, minutes, and seconds remaining until the specified future date.
3. If the countdown reaches zero, an expiration message is displayed.
### JavaScript Code:

- The JavaScript code mainly focuses on calculating and displaying a countdown timer to a specific future date and time.
- It selects various HTML elements using the querySelector and querySelectorAll methods.
- It initializes date-related variables and extracts information from the futureDate object.
- It defines a function called getRemainingTime() that calculates the remaining time until the future date and updates the countdown timer's components (days, hours, minutes, seconds) accordingly.
- It sets an interval using setInterval to update the countdown timer every second by calling the getRemainingTime() function.
- If the remaining time becomes negative (i.e., the future date has passed), it clears the interval and displays an "expired" message.
### HTML Structure:

- The HTML structure defines the layout of the countdown timer and giveaway information.
- The giveaway message displays information about when the giveaway ends.
- The countdown timer components (days, hours, minutes, seconds) are displayed using different h4 elements.
- The countdown timer and giveaway information are wrapped within article elements.
### CSS Styles:

- The CSS styles define various variables for colors, fonts, transitions, and other design elements.
- The global styles reset default margins, paddings, and box-sizing.
- The body background and text colors are set using the defined CSS variables.
- The font family, line height, and font size for the entire document are specified.
### Inline SVG:

- SVG (Scalable Vector Graphics) markup defining a graphical illustration. SVG is a widely used format for creating vector images that can be displayed and scaled without losing quality.
### Conclusion 
- The JavaScript code calculates the remaining time until a specified future date, and the HTML and CSS are used to structure and style the countdown timer and giveaway information. 
- The countdown timer updates in real-time, displaying the days, hours, minutes, and seconds remaining until the specified future date. 
- Once the future date is reached, the countdown timer stops, and an "expired" message is displayed. The provided code can be embedded in an HTML file to create a functional countdown timer and giveaway display.