# myawesomeproject (react-native)  

[![Build status](https://build.appcenter.ms/v0.1/apps/b16b0190-9a32-4559-9c6e-166b625fc7e8/branches/main/badge)](https://appcenter.ms) 
[![pipeline status](https://gitlab.com/sweetmustard/internal/research-projects/mobile-ci_cd/badges/main/pipeline.svg)](https://gitlab.com/sweetmustard/internal/research-projects/mobile-ci_cd/-/commits/main)
[![coverage report](https://gitlab.com/sweetmustard/internal/research-projects/mobile-ci_cd/badges/main/coverage.svg)](https://sweetmustard.gitlab.io/internal/research-projects/mobile-ci_cd/)

This documentation has been autocreated by planter. Install planter globally to easily develop within this application.  
Install command: **npm install -g @team-octoo/planter**  
Planter will give you commands to create components, state files, and much more. Just type in 'planter -h' in a terminal.  

## Application  

### React-native  

This project was bootstrapped with 'npx react-native init < name >'.

 ### Available Scripts  

In the project directory, you can run:  

**`npm run ios`**  
Runs the app in the development mode on ios (on a simulator or device).   
The app will reload when you make changes.  
Use the shake command to debug...  

**`npm run android`**   
Runs the app in the development mode on ios (on a simulator or device).   

**`npm run test`**  
 Launches the test runner in the interactive watch mode.  

## Styling  

This app uses react-native styles to style its components.  
When creating a component using the planter library...  


## Component structure  

BEP component structure stands for 'Basics', 'Elements' and 'Pages'.  
It is a triple layered component structure...   

- Basics: Your basic building blocks. These components do not have any business logic in them. They get their state through props.  
- Elements: Elements are a collection of basic components and (sometimes) other elements. They can get their state through props or can have some business logic within the component itself.  
- Pages: Pages are the largest components. These usually are a collection of elements. It is common that they contain business logic and pass data toward child components.  

**Example**  
A simple note application has a login page, overview page, edit page.  
On the login page, there is a login container (just a div) which contains a form (element or basic) with input fields (basics).  
The overview page has the navigation (element) and a list of notes (element). The moment the overview page is rendered, the notes are fetched. When fetched, the notes are passed to the list element.  
The edit page has the navigation (element) and a form (basic or element) with input fields (basic). When the edit page is rendered, the note details are fetched. When fetched, the details are passed to the input components.  
(This is just an example but it illustrated how a simple app would be structured.)  

## Packages  
These packages were installed at the start of the project:  

- **Redux**: Global predictable state management library. Redux-persist, -thunk, -logger and Immer are also installed.
https://redux.js.org/introduction/getting-started

- **i18next**: Add multiple language support to your application with i18next. A parser has been installed and configured. 'yarn translate' script is available.
https://react.i18next.com/

- **Patch-Package**: patch-package lets app authors instantly make and keep fixes to npm dependencies.
https://www.npmjs.com/package/patch-package

- **Appcenter**: App Center is your continuous integration, delivery and learning solution for iOS and Android apps.
https://www.npmjs.com/package/appcenter



---

