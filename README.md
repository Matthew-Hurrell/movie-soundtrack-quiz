# **_The Movie Soundtrack Quiz_**

The Movie Soundtrack Quiz is an online quiz where a user can test their movie soundtrack knowledge with a fun interactive game. 

The target audience is any movie fans with an interest in music or vice versa. The audience will mostly include teens and above. The majority of the audience will be middle aged men and women. 

The goal of this online quiz is to provide a fun and interactive game where users can test their knowledge about movie soundtracks for entertainment purposes. The layout should be easily accessible and intuitive for new users. The quiz content should be challenging and engaging to encourage repeated play throughs. Information should be well structured and presented. Navigation and interactive elements should be intuitive with clear purpose and functionality. The project should conform to the best practices of user experience design, accessibility and responsivity. 

Link to the live site - [The Movie Soundtrack Quiz](https://matthew-hurrell.github.io/movie-soundtrack-quiz/)

![The Movie Soundtrack Quiz Responsive Design](assets/images/readme-images/responsive.png)

# Contents

* [**User Experience UX**](<#user-experience-ux>)
    * [User Stories](<#user-stories>)
    * [Wireframes](<#wireframes>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)
    * [Typography](<#typography>)
    * [Colour Scheme](<#colour-scheme>)
* [**Features**](<#features>)
   
    * [**Future Features**](<#future-features>)
* [**Technologies Used**](<#technologies-used>)
* [**Testing**](<#testing>)
     * [**Validator Tests**](<#validator-tests>)
     * [**Responsiveness Tests**](<#responsiveness-tests>)
     * [**Lighthouse Tests**](<#lighthouse-tests>)
     * [**Browser Tests**](<#browser-tests>)
     * [**Bugs**](<#bugs>)
* [**Deployment**](<#deployment>)
     * [**Project Deployment Via GitHub**](<#project-deployment-via-github>)
     * [**How to Fork a Repository Via GitHub**](<#how-to-fork-a-repository-via-github>)  
     * [**How to Create a Local Clone of a Project**](<#how-to-create-a-local-clone-of-a-project>)   
* [**Credits**](<#credits>)
    * [**Content**](<#content>)
    * [**Media**](<#media>)
*  [**Acknowledgements**](<#acknowledgements>)

# User Experience UX

## User Stories

* As a user I want to be able to fully understand the purpose of The Movie Soundtrack Quiz from the first page.
* As a user I want to be prompted to turn up/on my device volume before starting the quiz.
* As a user I want to be able to see a brief list of rules before starting the quiz.
* As a user I want the quiz content to be challenging but not impossible. 
* As a user I want the audio for each question to autoplay, but also have control over pausing and playing the audio.
* As a user I want each question to have a time limit which is fair but also challenging.
* As a user I want the audio to continue playing when I make my choice, or if the timer runs out, so I can continue to listen to the track until continuing to the next question.
* As a user I want to be lead through the quiz with intuitive and easy to understand navigation.
* As a user I want the quiz to look eye catching and professional.
* As a user I want a progress bar and question countdown which gives me a visual reminder of where I am in the quiz.
* As a user I want a score counter which automatically counts and displays my score during and at the end of the quiz.
* As a user I want to be shown visually if I have selected the right answer, and if I have not I wish to be shown the correct answer for each question before moving on.
* As a user I want to be able to navigate out of the quiz to the home page at any time.
* As a user I want to be able to replay the quiz multiple times and be presented with different questions. 
* As a user I want the audio to be clear and of good sound quality.
* As a user I want the quiz content to be diverse.
* As a user I want to be congratulated on completing the quiz and presented with my answer.
* As a user I want to be able to easily navigate to the beginning of the quiz once I have finished. 

[Back to top](<#contents>)

## Wireframes 

The project templates and wireframes for The Movie Soundtrack Quiz were designed using [Balsamiq](https://balsamiq.com). There are some differences between the wireframes and the finished project because of design choices made during the creative process.

![First Page Wireframe](assets/images/readme-images/wireframe-first-page.png)

![Rules Page Wireframe](assets/images/readme-images/wireframe-rules.png)

![Quiz Page Wireframe](assets/images/readme-images/wireframe-quiz.png)

![End Page Wireframe](assets/images/readme-images/wireframe-end.png)


[Back to top](<#contents>)

## Site Structure 

The Movie Soundtrack Quiz uses a single HTML page (index.html) which is then manipulated using javascript events and functions to add and subtract elements into the document. A user can navigate through the quiz linearly using buttons that are displayed when needed. There is a home section, a rules section, a quiz section and finally an end section which is navigated to after completing the quiz. A user can move back and forth freely between the home page and the rules page before starting the quiz. A user can also navigate back to the home page at any time during the quiz. Navigation buttons include a start button to start the quiz, a rules button to display the quiz rules, a home button that is displayed throughout the quiz, a next button which displays the next question to the user after they have answered a question and an end button which displays when the user answers the final question of the quiz. 

[Back to top](<#contents>)

## Design Choices 

* ### Typography 

The font used for the majority of The Movie Soundtrack Quiz is Lato from [Google Fonts](https://fonts.google.com/). Lato was chosen for its clear lettering and approachable but professional tone. It was used in a variety of different font weights to highlight certain text elements. Font style italics was used for the quote element on the end page to capture the users attention.

The title font is an image generated from [1001 Fonts](https://www.1001fonts.com/movie-fonts.html?page=1). This was used to create a bolder and more thematic title which is more eye catching than a standard font. 

* ### Colour Scheme 

The colour scheme used for The Movie Soundtrack Quiz is a combination of whites and blacks for text elements with blues and greens for buttons. The colours used for the quiz are intended to convey meaning and provide a visual aid to the user. Red is used on incorrect answers and green on correct answers to display that outcome to the user in an easy to understand way. 

The container elements are a slightly transparent white which enables the background to be just visible behind. Navigational button elements are blue or green with a linear gradient into a darker shade at the bottom. They also feature white text to provide better contrast. Answer buttons are simply white with black text so they are easy to read. But when hovered over the button background changes to a faint blue. There are also classes for correct and incorrect that change the background colour of the answer buttons depending on the user choice. An incorrect answer changes the background colour to a linear gradient of red and a correct answer changes the background to a linear gradient of green. The container upper and lower border features multi-coloured film strips which adds some bright colour into the page. The progress bar features a purple strip which adds a new colour into the page palette and draws the users attention. The background image is a multi-coloured collage of movie posters which is very eye catching. A white linear gradient was added to the image to dull the colours slightly and to make it less distracting for the user. 

![The Movie Soundtrack Quiz Colour Palette](assets/images/readme-images/colour-palette.png)

[Back to top](<#contents>)

# Features

The Movie Soundtrack Quiz contains many features that were designed to enhance the user experience. There are also many potential features that could be added and expanded on in the future. The page features are designed to conform to the best practices of user experience design and accessibility.

## Existing Features

### Home Page

The home page is the main landing page of The Movie Soundtrack Quiz. It is displayed first to the user when they open or refresh the page. The objective of this section is to provide the user with a clear purpose to the intentions of the page in an appealing and eye catching way. Content is simple but colourful to encourage further interaction from the user.

![The Movie Soundtrack Quiz Home Page](assets/images/readme-images/home-page.png)

* ### Background

The background is used throughout all sections of the site to provide consistency. The background is an image of a large collage of movie posters which was chosen to help to convey the theme of the quiz to the user. The original image was too bright for a background image so a white linear gradient was added to fade the colours slightly to make them less distracting to the user.

* ### Border

Another element reused throughout the site is the border top and bottom. These borders are images of multi-coloured film tape. They were chosen to further convey the theme of the site to the user in a visual way. The borders are colourful and help to draw the users eyes into the middle of the screen. The borders were just added to the top and bottom of the main section so as not to be too distracting. The design is simple yet visually appealing.

![Border](assets/images/readme-images/border.png)

* ### Container

All the interactive elements of the site are positioned within the central container. This container is centralised into the middle of the screen on larger screens and is responsive on smaller screen sizes. The container has a white background which is slightly transparent to allow a small amount of the background to be seen. The container features a solid black border with a faint border around the edge and borders. A simple white background was used to provide suitable readability and contrast to the text elements. 

![Container](assets/images/readme-images/container.png)

* ### Title

The main title is displayed on the landing page and is hidden in the following sections. The font is a form of word-art with a movie theme. The font is bold, capitalised and eye catching. The title is an image which is centralised in the container using flex box. The image scales down on smaller screen sizes.

![Title](assets/images/readme-images/title.png)

* ### Text

There are two text elements on the landing page. The first element is a reminder to the user to check that their volume is turned up. This is a very important element as the quiz is very reliant on audio. It's crucial to display this visual reminder to the user first if they intend on starting the quiz. 
The second text element is a brief sentence which further conveys the intention of the site to the user. Text content is kept to a minimum to avoid clutter and confusion. 

![Text Content](assets/images/readme-images/text-content.png)

* ### Buttons

There are two buttons displayed on the main landing page of the site - start and rules. Navigation is kept simple to avoid confusion. The start button is coloured green with a linear gradient with white text. The rules button is coloured blue with the same linear gradient and white text. The hover effect scales up the buttons by 1.05 and adds a shadow with matching colour behind the buttons. Borders for the buttons are 1 pixel, solid and black. When interacted with, the start button starts the quiz by triggering the start javascript function. It also hides the first container and displays the second container with the quiz elements. The rules button hides the buttons and the bold text element and adds an unordered list of the rules into the other text element using javascript. It also displays a back button with the same styling as the rules button which returns the user back to the main loading page.

![Buttons](assets/images/readme-images/buttons.png)

![Start Button](assets/images/readme-images/start-button.png)

![Rules Button](assets/images/readme-images/rules-button.png)

![Back Button](assets/images/readme-images/back-button.png)

* ### Rules 

The rules text element is added using javascript when the rules button is clicked on the main landing page. It is a simple unordered list of clear rules which helps the user understand the nature of the quiz before starting. Helpful information about what to expect during the quiz is displayed here as well as a back button to navigate back to the main landing page when the user is ready to start.

![Back Button](assets/images/readme-images/rules.png)

### Quiz

### End

## Future Features

[Back to top](<#contents>)

# Technologies Used

* [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - Provides the structure of the site information, elements and website content. 
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Provides the styling of the HTML content.
* [Balsamiq](https://balsamiq.com/) - Wireframing software used to plan and design website templates.
* [GitPod](https://gitpod.io/) - An open source developer platform for remote development. Used to edit and build the website.
* [GitHub](https://github.com/) - An online host for web and software development projects. Used to store the repository and deploy the finished website.
* [Git](https://git-scm.com/) - Software for tracking changes to files. Used with GitPod to add, commit and push code changes to the repository on GitHub. 
* [Affinity Photo](https://affinity.serif.com/en-gb/photo/) - A photo editing app available through the Apple store used to design and create graphics for the site.
* [Apple Notes](https://www.icloud.com/notes) - A simple Apple app used to write and plan copy and content for the website.
* [Slack](https://www.icloud.com/notes) - An online messaging program designed for workplace collaboration. Used for advice and guidance from peers and tutors. 

[Back to top](<#contents>)

# Testing 

## Validator Tests

[The W3C HTML Markup Validation Service](https://validator.w3.org/) [The W3C CSS Markup Validation Service](https://jigsaw.w3.org/css-validator/) 

[Back to top](<#contents>)

## Responsiveness Tests

[Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) [Am I Responsive](https://ui.dev/amiresponsive) [Responsive Design Checker](https://responsivedesignchecker.com/). 

[Back to top](<#contents>)

## Lighthouse Tests

[Chrome Dev Tools - Lighthouse](https://developers.google.com/web/tools/lighthouse).

[Back to top](<#contents>)

## Browser Tests

[Back to top](<#contents>)

## Bugs

* ### Resolved 

* ### Unresolved

[Back to top](<#contents>)

# Deployment

## Project Deployment via GitHub

The Disney Food Guide repository is stored on GitHub. The site was created using GitPod and the live site is hosted on GitHub Pages. This is a guide to deploy a site on GitHub Pages using GitHub. 

1. Sign in to GitHub and find the repository in the repositories menu. 
2. Click to open the repository and click on the settings icon to open the settings menu for the repository.
3. In the settings menu, click on the pages tab on the left side of the screen.
4. Under source, select branch:main, leave the folder on root and click save. 
5. The page will then automatically refresh and provide a link to the published site when it has finished processing. 

![Github Deployment](assets/readme-images/github-deployment.png)

When the site is live, a link to the site can also be found by navigating back to the repository and clicking on the github-pages link under the Environments title menu on the far right side. 

![Github Environment](assets/readme-images/github-deployment-enviroment.png)

The live link for Disney Food Guide can be found here - [Disney Food Guide](https://matthew-hurrell.github.io/Disney-Food-Guide/)

[Back to top](<#contents>)

## How to fork a repository via GitHub

A copy of a local GitHub repository can be made by forking the GitHub repository. The purpose of this is to allow changes to be made to the copy without affecting the original repository. This is a guide to forking a repository on GitHub.

1. Sign in to GitHub, locate the repository and click to open the repository. 
2. On the right hand side of the repository menu there is a button called fork. Click the button to make a copy of the repository into your GitHub account. 

![Github Forking](assets/readme-images/github-forking.png)

[Back to top](<#contents>)

## How to create a local clone of a project

This is a guide on how to clone a repository from GitHub. 

1. Sign in to GitHub, locate the repository and click to open the repository.
2. On the repository main page, click the code button above where the files are located. This will open a drop down menu.
3. In the dropdown menu stay on the HTTPS option and click the copy icon button next to the URL to copy it. 
4. Now minimise/close your browser and open your local IDE, e.g Visual Studio Code or Brackets.
5. Open Git Bash and change the current working directory to the file location you want the cloned directory to be made in.
6. Type git clone into the command line and then paste the URL copied from GitHub.
7. Press enter and the local repository clone will be created.

![Github Cloning](assets/readme-images/github-clone.png)

[Back to top](<#contents>)

# Credits

## Content

* Fonts were imported from [Google Fonts](https://fonts.google.com/).
* Icons were imported from [Font Awesome](https://fontawesome.com/).
* Content and information was collated from 
* Colour palate 

## Media

[Back to top](<#contents>)

# Acknowledgements

Matthew Hobbs-Hurrell



