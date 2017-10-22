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
	if (feature.getProperty('state') === 'hover') {
		outlineWeight = zIndex = 2;
		colorOfCounty = 'rgb(31, 148, 0)';
	}

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
	$('#data-label').html(counties[counties.length - 1].county);
	$('#data-value').html(counties[counties.length - 1].childrenInFosterCare);

	$('#county-search-form').submit(function(event){
		event.preventDefault();
		$('#data-label').css('color', 'black');
		var userSearch = $('#county-input').val();
		// console.log(userSearch);
		var matchFound = false
		for(let i = 0; i < counties.length; i++){
			if(counties[i].county.toLowerCase() === userSearch.toLowerCase()){
				$('#data-label').html(counties[i].county);
				$('#data-value').html(counties[i].childrenInFosterCare);
				matchFound = true;
			}
		}
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

	// // update the label
	var countyNameFromJson = e.feature.getProperty('name');
	var countyNameAsArray = countyNameFromJson.split(" County");
	var countyNameOnlyArray = countyNameAsArray.splice(0, 1);
	var countyNameOnlyString = countyNameOnlyArray.toString();

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
	$('#data-label').html(counties[counties.length - 1].county);
	$('#data-value').html(counties[counties.length - 1].childrenInFosterCare);
}