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
(the ng-app="repsikkaApp" makes the angular work with the page you are working on)

- Lastly, you can get the topbar simply by putting a page-heading attribute inside a div element. Make sure you have navbar classes marked for the element, to make the navbar work properly!
```HTML
<div page-heading class="navbar navbar-default"></div>
```

# About Date/Time Picker
Our Date/Time Picker relies on Jquery:
```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```
To include the picker in your code:
```HTML
<script src="./js/picker.js"></script>
<script src="./js/picker.date.js"></script>
<script src="./js/picker.time.js"></script>
<link rel="stylesheet" href="./css/default.css" />
<link rel="stylesheet" href="./css/default.time.css" />
<link rel="stylesheet" href="./css/default.date.css" />
```
Initially picker has been utilized by add.html

# Job Object

Would it fit?<br />
//Text is sent<br />
"name" - text                             <br />
//"yyyy/mm/dd" format is sent<br />
"date_submit" - date                      <br />
//"HH:mm" format time is sent<br />
"time_submit" - time                      <br />
//Text is sent<br />
"location" - text                         <br />
//Text is sent<br />
"category" - select-option                <br />
//Number is sent<br />
"pay" - number                            <br />
//Text is sent<br />
"description" - textarea                  <br />
//Text is sent<br />
"employer_name" - hidden                  <br />
//Text is sent<br />
"worker_name" - hidden                    <br />
//Text is sent<br />
"status" - text                           <br />
  P.S. Possible Status Values:<br />
    * "posted<br />
    * "applied"<br />
    * "accepted"<br />
