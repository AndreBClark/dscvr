 _**DSCVR**_
===


## Getting Started

### 1. Setting up Accounts
 1. Create [github accounts](https://github.com/)
 1. send me your usernames so I can add you to the collaborators list  

### 2. Github App
1. Download & Install [Github Desktop App](https://desktop.github.com/)
1. set up default cli and editor ``File>Options>Advanced``

### 3.  Checking Dependencies
1. Using Your Terminal on mac or git bash on pc  
1. check if git is installed ``git --version`` if not install [git](https://git-scm.com/downloads)
1. check if node is installed ``node --version`` or ``npm --version`` Install [node.js](https://nodejs.org/en/)

### 4. Initial Build Process
1. Change branch to ``dev``
  - in the github desktop app, click**current branch** then select dev from the dropdown
1. Clone Repository
1. Open CLI at ``dscvr/src/`` or using Github ``ctrl + ` `` then ``cd src``
 1. enter ``npm install``
 1. enter``npm run build``
1. Using Github ``cmd + shift + A`` ``Repository>Open in Editor Name``

**note:** `--watch` is no longer required as it is now integrated in the `build` script

_once your editor of choice is open you are ready to work on the project._

### 5. Verify Functionality
Once you've followed the Steps, verify if it worked by **[Viewing the Demo](demo.html)** The result should look colorful and obviously styled.

**Note:** _if either this page or the demo page look un-styled. that means you have not run your build yet or there is an issue preventing the build_


### 6. Working on the project
1. Open github Desktop and open terminal
1. In terminal Enter `cd src` to move to development folder
1. enter `npm run build`
 -**Note** `--watch` is no longer required as it is now integrated into the build script
1. leave the terminal open while working

### 7. Checking Out Branches

The `origin/master` branch is the main production branch. most of the work will be pushed on the `origin/dev` branch during development.  from the dev branch we will divide up work as Individual _Features_ or _Tasks_. these issues/features will be worked on their own feature branches.

1. Check the issues tab for tasks to complete, assign yourself to the task you intend to work on
1. move to the dev branch from Github Desktop or from your code editor
1. If Your Feature doesn't have a branch yet create one. Yo can do so in the Github Desktop Application.
1. feature branches should be called `feature/_yourfeature_`
1. switch to your code editor and in the lower corner there should be a line that says the name of the current branch.
1. If it's correct, you're all set.

### 8. Completing Features

once you've completed work on an issue within a feature branch make a pull request and submit your work for code review, and the reviewer will review the changes and approve the merge. I will add more details once we've test run this a bit more.


## Resources

Here is A list of links and Resources for learning more web design stuff. full list repo: [Resource List Repository](https://github.com/AndreBClark/WebStudentResources)

### Forms
[Tips for Creating great Web Forms](https://css-tricks.com/tips-for-creating-great-web-forms/


### UI/UX
* **[LearnUI.design](https://learnui.design/blog/)**

* **[King VS Pawn game UI Design](https://learnui.design/blog/king-vs-pawn-game-ui-design.html)**
* **[7 Rules For Creating Gorgeous UI](https://learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-1.html)**

## CSS
* **[BEM](http://getbem.com/)** Block Element Modifier class naming system
    * [CSS Naming Conventions](https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849) includes an easy to understand explanation of BEM
* **[Organizing CSS](https://www.youtube.com/watch?v=IKFq2cSbQ4Q)** Video (37:54)
* **[Layout Land](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag)** Youtube Channel covering CSS Grid and Flexbox

## HTML
* **[Semantic HTML](https://html.com/semantic-markup/)**

* **[Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)** simplified rich text formating language that outputs to HTML
* **[Emmet Cheetsheet](https://docs.emmet.io/cheat-sheet/)** html shorthand for writing faster using css selector type notation

* **[100 Days of Code](https://github.com/nas5w/100-days-of-code-frontend)**

## Image Optimization
* [Optimize Images Webpack](https://iamakulov.com/notes/optimize-images-webpack/)
* [webpack for real tasks](https://iamakulov.com/notes/webpack-for-real-tasks-part-1/)
* [images guide](https://images.guide/))
* [imgix](https://www.imgix.com/)
* [fastly Image Optimizer](https://www.fastly.com)
* [Easy Dynamic Image Optimization with React and Webpack](https://www.scientiamobile.com/easy-dynamic-image-optimization-with-react-and-webpack/)
* [Webpack For Everyone -- Automatic Image Optimization](https://laracasts.com/series/webpack-for-everyone/episodes/13)


## Notable Modules in this WebPack

* **[WebPack](https://webpack.js.org/concepts/)**
* **[SASS](https://sass-lang.com/)**
* **[jQuery](https://api.jquery.com/)**
* **[Zurb Foundation](https://foundation.zurb.com/sites/docs/)**
* **[Featherlight](https://github.com/noelboss/featherlight)**
* **[Font Awesome](https://fontawesome.com/icons?d=gallery)**
* **[Slick Carousel](http://kenwheeler.github.io/slick/)**
* **[Babel](https://babeljs.io/docs/en/)**
