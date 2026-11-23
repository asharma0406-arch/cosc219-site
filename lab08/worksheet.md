# Lab 8 — Debugging worksheet

Fill one block in for each fault you find. **The reasoning is what is marked**,
not the fix — a one-line correction with no explanation earns very little.

Copy the block as many times as you need.

---

## Fault 1

**Symptom** — what did you see, or what did the checker say?
The checker showed that heading levels were being skipped.

**How I found it** — which tool, and what did it tell you?
(Console message? Elements panel? Reading the CSS? Tabbing through the page?)
I read through the body part of the HTML document 
**Cause** — why did that happen? Name the concept, not just the line.
HTML headings should follow a proper sequence or can say a hierachy. It should not skip any levels. It can amke the structure of the page confusing specially for people who read the through navigating the headers.

**Fix** — what you changed.
I changed the header h3 to h2 in both closing and  opening tags 

**Lecture** — which one covers this.
Lecture 2

---

## Fault 2

**Symptom**
Checker showed that every form should have a label

**How I found it**
I read the HTML document the body section. I noticed that the search input was having a place holder but no lable.

**Cause**
Lables provide a accessible name to the users to help them know whar each input is for. A placeholder is just a hint not a proper label. 

**Fix**
I added this <label for=search>Search by</label> before the search input by connecting it with same match for and id attributes.

**Lecture**
lecture 3

---

## Fault 3

**Symptom**
The search bar overflowed even when the width of the page was set to 400px

**How I found it**
With the help of dev tools tried to check the layout on a smaller screen. When it overflowed checked the css document.

**Cause**
The content box was the issue here because it adds the padding and border outside the declared width. This makes the element bigger even then its parent .

**Fix**
Added box-sizing : border-box so that the padding and the borders are inclued in the intialized width.

**Lecture**
lecture 4

---

## Fault 4

**Symptom**
no  visible highlight when using the tab button to focus on the form.


**How I found it**
Checked the css document and also used the tab key for tests.

**Cause**
The outline: none declaration removed the browser's default focus indicator. Without a visible focus style, users using keyboard will not be able to tell which form is have the focus.

**Fix**
 I replaced outline: none with a visible outline using outline: 2px solid var(--brand) and added an outline offset.

**Lecture**
lecture 4

---

## Fault 5

**Symptom**
Checker gave hints that filtering/comparision failing for some values of the trail. 

**How I found it**
i checked the javascript file.

**Cause**
It was happening because in javascript if we use "==" it is loose comparision and it wil change the types of the data gives. and if we use the "===" it doesnot convert the types and do strict comparision. for this test we were comparing strings with another data type it caused the test to fail.

**Fix**
I used == loose equality for the comparision of datattypes.

**Lecture**
Lecture 7

---

## Fault 6

**Symptom**
The checker displayed that the trails should be sorted according to the distance. But it was not.

**How I found it**
I checked the app.js sortbyDistance() function and noticed  sort function was empty which results in the default comparision method.

**Cause**
sort() function in java uses string comparison when nothing is provided. so it did not sorted the trails by distance.

**Fix**
trails2.sort((a, b) => a.km - b.km); used this in the sortByDistance function but I did'nt changed the original array. I used a copied array for this so that even if some bugs appeared the original data in untempered.

**Lecture**
Lecture 9

---

## Fault 7

**Symptom**
The checker displayed that a trail name is being put on the page as plain text

**How I found it**
With the help of the checker hint i checked the app.js and found out that innerhtml was being used to show the trail name.

**Cause**
Innerhtml is not safe because it interprets the html string markup language as plain text and if untrusted data is displayed by it then XSS i.e. cross-site scripting can happen. textcontent on the other hand shows the data as text without touching the html.

**Fix**
replaced innerhtml with textcontent while displaying the trail name.

**Lecture**
Lecture 13

---

## Fault 8

**Symptom**
The checker displayed that form does not reloadd the page after submitting.

**How I found it**
With the help of the checker hint i tried to submit after searching a trail. It shows again the search page with all the trails not the searched trail only. I checked the eventListener in app.js.

**Cause**
until and unless the default method of reloading or navigating to other site is not prevented the html forms will submit the forms with the above default method

**Fix**
event.preventDefault() i used this in the eventListener function becuase it stops the default behaviour of reloading or redirecting.

**Lecture**
Lecture 14

---

## One more thing

**Which fault took you longest, and why?**
i guess the fault which took me the longest was the trail name . in which we have to use the textcontent to make sure it doesnot intepret the html on the page as well. It took me the longest because firstly i didn't understand what it was saying and when i got to know i messed up another thing. It was difficult to understand the fuunctionality of each and every line which suited.

**Which one would you never have found without the checker?**
I guess the label one because it was still showing the rating thing before the all or apply buttons. but wasn't showing  what we have to do. It simply gives hints to the users what we are supposed to do on the website.
