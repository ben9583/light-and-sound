# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Benjamin Plate**

Time spent: **12** hours spent in total

Link to project: https://glitch.com/edit/#!/faint-marvelous-aphid

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Buttons have different shapes with proper masking for click events
- [x] Game states (not playing, playing, win, lose) have different page backgrounds

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used the `create-react-app` package to generate the base of this project.

For the tone generator in `src/js/utils/ToneGenerator.js`, I used a custom bit of javascript code from ![this StackOverflow post.](https://stackoverflow.com/questions/39200994/how-to-play-a-specific-frequency-with-javascript#44215748)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One of the biggest challenges for me was creating a button with a custom shape while having the click events register only within the drawn space of the button. One idea I had to make my project more unique was to use different shaped buttons that identify them separately from color. I thought this would be useful because, for color blind individuals, two colors that may be distinct to most people could appear almost identical. One example is with Deuteranopia, which makes the green and yellow used for this project very difficult to tell apart. I figured button shape could be a more universal way to identify the buttons.

For implementing this feature, I considered using an image to represent the buttons as there wasn't an easy way to make shapes other than (rounded) rectangles or circles with CSS. However, I encountered an issue where the click events would register within the bounding box of the image, as opposed to the drawn space of the image itself. For example, if the user clicked the area to the left or right of the triangle to the top, it would still register as a click even though it wasn't actually in the triangle. My solution to this was to use an SVG to draw the buttons instead of a bitmap format like PNG or JPG. Since SVG is written in markup and can be interpreted by browsers in regular HTML, this let me put the click events right in the SVG itself, so I could put onClick and onHover directly in the polygon of the SVG. This solved the problem and the buttons now work as intended and also had the added benefit of making the buttons appear sharp in any resolution.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

My primary question regarding web development would probably be how to write test-driven code for HTML5/CSS3/JS. From learning about the best principles of programming, I know it's always a good idea to write test cases for your code and ensure proper coverage of the entire codebase to ensure that components both function on their own and when integrated with the project. In something like Java or Python, we can use libraries for doing this that run automatically when the project is built and are extremely helpful for debugging and addressing these issues. However, I'm not aware of a good solution for doing in this web development. I recently learned about Cypress, a Node package that seems to address this issue, but I'm not familiar with it and I'm curious to learn what web developers do in practice.

One other and more minor question I have that came up during this project is about webpage metadata and how to work with it. When I generated the `index.html` file for this project using `create-react-app`, I looked at it to change the favicon and saw a lot of content in the `<head>` in the form of `<meta>` tags. I'm curious to learn more about what these mean and how what's the best practice for using them. I've heard they're useful for things like SEO, but I don't really understand why we need a lot of them.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

One idea I had for this project that I didn't have enough time to complete was a scoring system that replaces the 8 button presses the user needs to win the game. Specifically, the game would be endless, but when the user makes a mistake, they lose and they get a score that represents how many times they were able to repeat the ever-increasing pattern. With this, we could keep track of the user's highest score and do something different for when they get a better high score, maybe a bit of confetti. With even more development, we could keep track of high scores and store them in a database so users could compete with each other and their high scores would be persistent. There could even be a separate lists of high scores for personal, daily, and overall best scores. This would definitely require a lot of backend development, but the more I thought of it, the more I wanted to give it a try. I might consider giving a shot in the future.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/-AKUcwzn39I)


## License

    Copyright Benjamin Plate

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.