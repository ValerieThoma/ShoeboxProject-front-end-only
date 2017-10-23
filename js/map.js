function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 32.5, lng: -83.3},
		zoom: 7,
		mapTypeId: 'satellite',
		styles: mapStyle
	});

	loadMapShapes();

	map.data.setStyle(styleFeature);
	map.data.addListener('mouseover', mouseInToRegion);
	map.data.addListener('mouseout', mouseOutOfRegion);
}

var mapStyle = [{
	'stylers': [{'visibility': 'off'}]
	 }, {
	'featureType': 'landscape',
	'elementType': 'geometry',
	'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
	 }, {
	'featureType': 'water',
	'elementType': 'geometry',
	'stylers': [{'visibility': 'on'}, {'color': '#bfd4ff'}]
}];

function loadMapShapes(){
	map.data.loadGeoJson('http://catalog.civicdashboards.com/dataset/2381e107-5e3a-49bc-bd1d-d56bc5afaf64/resource/a4715d74-198f-479d-9399-c9cd2179f5b7/download/2f9369a52d3f4debadf271ddc4e957d9temp.geojson');
}

function styleFeature(feature) {
	var outlineWeight = 0.5, zIndex = 1, colorOfCounty = 'rgba(0, 213, 242, 0.7)'
	// Make county display change when hovered over
	if (feature.getProperty('state') === 'hover') {
		outlineWeight = zIndex = 2;
		colorOfCounty = 'rgb(31, 148, 0)';
	}
	// County overlay display
	return {
	  strokeWeight: outlineWeight,
	  strokeColor: '#fff',
	  zIndex: zIndex,
	  fillColor: colorOfCounty,
	  fillOpacity: 0.75,
	  visible: true
	};
}

$(document).ready(()=>{
	// Start with statewide data in display
	$('#data-label').html(counties[counties.length - 1].county);
	$('#data-value').html(counties[counties.length - 1].childrenInFosterCare);

	$('#county-search-form').submit(function(event){
		event.preventDefault();
		$('#data-label').css('color', 'black');
		var userSearch = $('#county-input').val();
		var matchFound = false
		// Check for match, ignoring case
		for(let i = 0; i < counties.length; i++){
			if(counties[i].county.toLowerCase() === userSearch.toLowerCase()){
				$('#data-label').html(counties[i].county);
				$('#data-value').html(counties[i].childrenInFosterCare);
				matchFound = true;
			}
		}
		// If no matching counties...
		if(!matchFound){
			$('#data-label').css('color', 'red');
			$('#data-label').html("No counties match your search.");
			$('#data-value').html("");
		}
	});
});

var map;

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

function mouseOutOfRegion(e) {
	// reset the hover state, returning the border to normal
	e.feature.setProperty('state', 'normal');
	// When not hovering on county, display statewide data
	$('#data-label').html(counties[counties.length - 1].county);
	$('#data-value').html(counties[counties.length - 1].childrenInFosterCare);
}

var countyNames = ['Appling',
'Atkinson',
'Bacon',
'Baker',
'Baldwin',
'Banks',
'Barrow',
'Bartow',
'Ben Hill',
'Berrien',
'Bibb',
'Bleckley',
'Brantley',
'Brooks',
'Bryan',
'Bulloch',
'Burke',
'Butts',
'Calhoun',
'Camden',
'Candler',
'Carroll',
'Catoosa',
'Charlton',
'Chatham',
'Chattahoochee',
'Chattooga',
'Cherokee',
'Clarke',
'Clay',
'Clayton',
'Clinch',
'Cobb',
'Coffee',
'Colquitt',
'Columbia',
'Cook',
'Coweta',
'Crawford',
'Crisp',
'Dade',
'Dawson',
'Decatur',
'DeKalb',
'Dodge',
'Dooly',
'Dougherty',
'Douglas',
'Early',
'Echols',
'Effingham',
'Elbert',
'Emanuel',
'Evans',
'Fannin',
'Fayette',
'Floyd',
'Forsyth',
'Franklin',
'Fulton',
'Gilmer',
'Glascock',
'Glynn',
'Gordon',
'Grady',
'Greene',
'Gwinnett',
'Habersham',
'Hall',
'Hancock',
'Haralson',
'Harris',
'Hart',
'Heard',
'Henry',
'Houston',
'Irwin',
'Jackson',
'Jasper',
'Jeff Davis',
'Jefferson',
'Jenkins',
'Johnson',
'Jones',
'Lamar',
'Lanier',
'Laurens',
'Lee',
'Liberty',
'Lincoln',
'Long',
'Lowndes',
'Lumpkin',
'Macon',
'Madison',
'Marion',
'McDuffie',
'McIntosh',
'Meriwether',
'Miller',
'Mitchell',
'Monroe',
'Montgomery',
'Morgan',
'Murray',
'Muscogee',
'Newton',
'Oconee',
'Oglethorpe',
'Paulding',
'Peach',
'Pickens',
'Pierce',
'Pike',
'Polk',
'Pulaski',
'Putnam',
'Quitman',
'Rabun',
'Randolph',
'Richmond',
'Rockdale',
'Schley',
'Screven',
'Seminole',
'Spalding',
'Stephens',
'Stewart',
'Sumter',
'Talbot',
'Taliaferro',
'Tattnall',
'Taylor',
'Telfair',
'Terrell',
'Thomas',
'Tift',
'Toombs',
'Towns',
'Treutlen',
'Troup',
'Turner',
'Twiggs',
'Union',
'Upson',
'Walker',
'Walton',
'Ware',
'Warren',
'Washington',
'Wayne',
'Webster',
'Wheeler',
'White',
'Whitfield',
'Wilcox',
'Wilkes',
'Wilkinson',
'Worth',
'Statewide']

var countyNames = new Bloodhound({
	datumTokenizer: Bloodhound.tokenizers.whitespace,
	queryTokenizer: Bloodhound.tokenizers.whitespace,
	local: countyNames
});

$('.')