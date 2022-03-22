# to-do-list

Description
Create an online to-do list app
For this project, we will be using React to manage state and LocalStorage to keep track of data.

By default, the app should display the items on the to-do list and list their active status. The app should retain state upon a revisit of the page using LocalStorage.
Wireframes
* gif
Tech Stack
1. HTML
2. CSS
3. Bootstrap
4. JS
5. React

Setup
1. Plan out and pseudocode your project - see example kanban
2. Create GitHub repo Locally via npx create-react-app
3. Create necessary files for the application in your terminal and view and modify them in your editor
4. NPM install and import/route necessary css/js libraries (E.g. Bootstrap, Axios)
5. Save all and create your first commit to main, then switch to a dev branch

Application File Structure
See create-react-app.dev

Develop
1. Create a dev branch to commit your code to.
2. Add content and elements to your website.
3. View changes and test in gitpod.
4. Save often, and commit to your feature branch on GitHub when important changes happen.
5. Push your commits to GitHub remote.
6. For bug fixes, refactored code, and feature branches, you must create a branch off of dev, onto a new-feature branch, and create a Pull Request back to dev when complete.

Deploy
1. Create a Pull Request from the dev branch into the main branch.
2. Confirm code is up to date and works correctly.
3. Leave your code running on gitpod.
4. Save the hosting link in your repo description and add it to your portfolio as an external link.
5. Submit your final working version

Requirements
To complete the assignment, you must complete the following:
1. Dynamically Render the content with React using components
2. Use Local Storage to store all to-do list data in the browser
3. Display all to-do list items
4. Three "views" for the user: All, Completed, & To-Do (not completed)
5. Display Prompting text to add item
6. Cross out or check off one item as "completed"
7. See a count of remaining items
8. Remove one item (soft delete/archive)
9. Check off or cross out all items in one click as a "completed all" function
10. Remove all completed items (soft delete/archive)
11. Ability to press a button and all checked off items become active again

A fully functional CRUD (Create, Read, Update, Delete) style application should be demoed at the end of the week.

To further aid in learning react, we have listed out how requirements line up with the basic concepts.

Requirement
	Basic Concept
	Displaying the number of items for a specific view
	JSX
	Rendering any content using react
	Rendering Elements
	to-do list VS to-do item, etc
	Components
	Sending the to-do item data from the app down to the to-do item
	Props
	Modifying a to-do item from in-progress to completed
	State
	Utilizing LocalStorage
	Lifecycle
	Handling an onClick or onChange
	Events
	Displaying "add a new task" / "no completed tasks" if there are none OR listing the remaining to-do / completed items instead
	Conditional Rendering
	Looping over the to-do items from state and displaying them on screen
	Iterating over Arrays
	Clicking on a to-do item and updating the app level state to save in LocalStorage
	Lifting State
	Looping over the to-do items from state and displaying specific ones on the screen based on the view you are on
	Dynamic Rendering
	Using radios and checkboxes (no need to submit or have a form component, you can just use the individual input types)
	Forms
	Additional Requirements

* Website must be responsive
* Website must be styled
* Use the tools and technologies covered in class to complete your website.
* Your repo should be public so that others can see your code and comment on it.
   * Remember to push to GitHub!
   * Potential employers will view your GitHub profile, so activity is crucial!

Stretch Goals
* Import Bootstrap using create-react-app
* Create a flow diagram for the front end architecture to be used in an MVP
* Edit To-Do's in place
* Write React Tests with create-react-app
Recommended NPM Packages (for when you refactor, not the first time around)

Feel free to explore NPM, but you should not need any additional packages for this project. If you find a useful package, let the instructors know so we can discuss it.
* React-Bootstrap
* Redux
* React Virtualized
* DayJS
* Another instructor approved packaged from NPM

If you finish early
1. Continue to add your content, additions, and pages to your site and improve the styling.
2. Add info to your project's README.md README.md Best Practices
3. Share links and resources from this week to the Help slack channel.
Additional Resources
* Ask questions  :smile: 
* Learn more about Good GitHub Practices
* W3 Schools - Learn JS
* Bootstrap
* Learn React
* Why Can't Anyone Make a Decent To-Do App?
* React State
For more information about state management, see these articles:
   * What is State Management
   * State Management Design Pattern
   * The future of JavaScript state management is less state management...