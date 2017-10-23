## Overview:
The Shoebox Project is a non-profit company whose purpose is to provide professional photographs and memories for children in the foster care system. We set up a site for the company, including sign-up forms, login capabilities, an interactive map, and various pages to navigate to on the site.


## Github Link:
[The Shoebox Project GitHub](https://github.com/ValerieThoma/baby-unicorns)

## Team Members & Roles:
* [Allyson Conrad](https://github.com/allysonc1)
**Scrum Master/Birthday Girl/Developer**
* [Valerie Jane Thoma](https://github.com/ValerieThoma)
**Designer/Clown/Developer**
* [Eddie Atkinson](https://github.com/eddieatkinson)
**Data Wrangler/Map Magician/Developer**


## Technologies used:
**Languages:**
* JavaScript
* HTML5
* CSS

**Frameworks:**
* jQuery
* Bootstrap

**Other:**
* Adobe XD - wireframe
* Google Maps API
* County location data from [CivicDashboards](http://catalog.civicdashboards.com)

## Code snippets:
``` javascript
function mouseInToRegion(e) {
	// set the hover state so the setStyle function can change the border
	e.feature.setProperty('state', 'hover');
	$('#data-label').css('color', 'black');

	// Get county name from JSON and format it to match data in counties array
	var countyNameFromJson = e.feature.getProperty('name');
	var countyNameAsArray = countyNameFromJson.split(" County");
	var countyNameOnlyArray = countyNameAsArray.splice(0, 1);
	var countyNameOnlyString = countyNameOnlyArray.toString();

	// Search for county and display number of children in foster care
	$('#data-label').text(countyNameOnlyString);
	for(let i = 0; i < counties.length; i++){
		if(counties[i].county == countyNameOnlyString){
			$('#data-value').text(counties[i].childrenInFosterCare);
		}
	}
}
```
``` javascript
// Check inoput password against stored password
	$('.sign-up-form').submit((event)=>{
		event.preventDefault();
		var password = $('.password').val();
		var passwordConfirm = localStorage.getItem('vol-password');
		if(password != passwordConfirm){
			$('.password-error').html("Incorrect password.");
		}else{
			window.location.href = "user_home.html"
		}
	});
```
## Screenshots:

## Contributing:
1. Allow project administrator (and/or volunteers) to upload photos and documents.
2. Give users ability to access photos. 
3. Add a "donate" button for charitable-feeling site visitors.

## URL:
[The Shoebox Project](http://www.eddiebatkinson.com/shoeboxproject)

## Project History:
10/18/2017 - Project Start