# repsikka

# About the tab width:
At this moment there is not that strict coding requirements aside from the tab width:

- The tab width is 3 spaces wide **FOR EVERY DOCUMENT IN THE PROJECT!**
- The tabs will be all whitespaces to make the code look the same for everyone else coding on the same codebase.

We are doing all this for consistency's sake accross the whole project.

# About the navbar:
The navbar can be inserted to any page easily by _at least_ doing the following:

- Copy/Paste the head part of the index.html as there are important frameworks what we'll need in every page!
- Make sure that the body element looks like this:

```HTML
<body ng-app="repsikkaApp">
```
(the ng-app="repsikka" makes the angular work with the page you are working on)

- Lastly, you can get the topbar simply by putting a page-heading attribute inside a div element. Make sure you have navbar classes marked for the element, to make the navbar work properly!
```HTML
<div page-heading class="navbar navbar-default"></div>
```
