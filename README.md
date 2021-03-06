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
<script src="./lib/picker.js"></script>
<script src="./lib/picker.date.js"></script>
<script src="./lib/picker.time.js"></script>
<link rel="stylesheet" href="./css/default.css" />
<link rel="stylesheet" href="./css/default.time.css" />
<link rel="stylesheet" href="./css/default.date.css" />
```
Initially picker has been utilized by add.html

# Job Object
Information about a job is stored as a JSON array, containing following fields:
```javascript
//Text is sent
"name" - text                             
//"yyyy/mm/dd" format is sent
"date" - date                      
//"HH i" format time is sent
"time" - time                      
//Text is sent
"location" - text                         
//Text is sent
"category" - select-option                
//Number is sent
"pay" - number                            
//Text is sent
"description" - textarea                  
//Text is sent
"employer_name" - hidden                  
//Text is sent
"worker_name" - hidden                    
//Text is sent
"status" - text
```
Status Values:
- "posted"
- "applied"
- "accepted"
