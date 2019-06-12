var map;

var markers1 = [];
var markers2 = [];
var markers3 = [];
var markers4 = [];
var markers5 = [];
var markers6 = [];
var icons1 = { icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'};
var icons2 = { icon: 'http://maps.google.com/mapfiles/ms/icons/red.png'};
var icons3 = { icon: 'http://maps.google.com/mapfiles/ms/icons/yellow.png'};
var icons4 = { icon: 'http://maps.google.com/mapfiles/ms/icons/green.png'};
var icons5 = { icon: 'http://maps.google.com/mapfiles/ms/icons/pink.png'};
var icons6 = { icon: 'http://maps.google.com/mapfiles/ms/icons/orange.png'};	
       
// Create a new blank array for all the listing markers.
function ma(){
 map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 30.06263, lng: 31.24967},
  zoom: 6,
  styles: styles
  });
}
function initMap() {
    // Constructor creates a new map - only center and zoom are required.
     ma()
    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    
    
    console.log(locations1);
    var largeInfowindow1 = new google.maps.InfoWindow();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations1.length; i++) {
      var data =locations1[i];
      var description = data.description;
      var type =data.type;
      var icon=data.icon;
      var category=data.category;
     
       var marker1 = new google.maps.Marker({
        position:  {
            lat : data.lat,
            lng : data.lng
        },
        type:type,
        icon: icons1.icon,
        description:description,
        title: data.title,
        category:category,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
      
      markers1.push(marker1);
      // Create an onclick event to open an infowindow at each marker.
      marker1.addListener('click', function() {
        populateInfoWindow1(this, largeInfowindow1);
      });

      document.getElementById('trfhya').addEventListener('click', showListings1);
      //document.addEventListener('click', displayMarkers);
    //document.getElementById('trfhya ').addEventListener('click', displayMarkers);
      
    }

    console.log(locations2);
    var largeInfowindow2 = new google.maps.InfoWindow();
     for (var i = 0; i < locations2.length; i++) {
      var data =locations2[i];
      var description = data.description;
     var icon=data.icon;
     var category=data.category;
      var marker2 = new google.maps.Marker({
        position:  {
            lat : data.lat,
            lng : data.lng
        },
        icon: icons2.icon,
        description:description,
        title: data.title,
        category:category,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
    
      markers2.push(marker2);
      // Create an onclick event to open an infowindow at each marker.
      marker2.addListener('click', function() {
        populateInfoWindow2(this, largeInfowindow2);
      });
      document.getElementById('islamic').addEventListener('click',showListings2);
    }

    console.log(locations3);
    var largeInfowindow3 = new google.maps.InfoWindow();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations3.length; i++) {
      var data =locations3[i];
      var description = data.description;
      var icon=data.icon;
      var type =data.type;
      var category=data.category;
     
       var marker3 = new google.maps.Marker({
        position:  {
            lat : data.lat,
            lng : data.lng
        },
        type:type,
        icon: icons3.icon,
        description:description,
        title: data.title,
        category:category,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
    
      markers3.push(marker3);
      // Create an onclick event to open an infowindow at each marker.
      marker3.addListener('click', function() {
        populateInfoWindow3(this, largeInfowindow3);
      });
      document.getElementById('ms7ya').addEventListener('click', showListings3);
      
    }
   
    console.log(locations4);
    var largeInfowindow4 = new google.maps.InfoWindow();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations4.length; i++) {
      var data =locations4[i];
      var description = data.description;
      var type =data.type;
      var icon=data.icon;
      var category=data.category;

       var marker4 = new google.maps.Marker({
        position:  {
            lat : data.lat,
            lng : data.lng
        },
        type:type,
        icon: icons4.icon,
        description:description,
        title: data.title,
        category:category,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
    
      markers4.push(marker4);
      // Create an onclick event to open an infowindow at each marker.
      marker4.addListener('click', function() {
        populateInfoWindow4(this, largeInfowindow4);
      });
      document.getElementById('algya').addEventListener('click', showListings4);
    }

    console.log(locations5);
    var largeInfowindow5 = new google.maps.InfoWindow();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations5.length; i++) {
      var data =locations5[i];
      var description = data.description;
      var type =data.type;
      var icon=data.icon;
     var category=data.category;
       var marker5 = new google.maps.Marker({
        position:  {
            lat : data.lat,
            lng : data.lng
        },
        icon: icons5.icon,
        type:type,
        description:description,
        title: data.title,
        category:category,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
    
      markers5.push(marker5);
      // Create an onclick event to open an infowindow at each marker.
      marker5.addListener('click', function() {
        populateInfoWindow5(this, largeInfowindow5);
      });
      document.getElementById('fr3onya').addEventListener('click', showListings5);
    }

    console.log(locations6);
    var largeInfowindow6 = new google.maps.InfoWindow();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations6.length; i++) {
      var data =locations6[i];
      var description = data.description;
      var type =data.type;
      var icon=data.icon;
      var category=data.category;
       var marker6 = new google.maps.Marker({
        position:  {
            lat : data.lat,
            lng : data.lng
        },
        icon: icons6.icon,
        type:type,
        description:description,
        title: data.title,
        category:category,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
    
      markers6.push(marker6);
      // Create an onclick event to open an infowindow at each marker.
      marker6.addListener('click', function() {
        populateInfoWindow6(this, largeInfowindow6);
      });
      document.getElementById('mta7f').addEventListener('click', showListings6);
    }
}
      // This function populates the infowindow when the marker is clicked. We'll only allow
      // one infowindow which will open at the marker that is clicked, and populate based
      // on that markers position.
function populateInfoWindow1(marker1, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker1 != marker1) {
      infowindow.marker1 = marker1;
      infowindow.setContent('<div>' + marker1.title+'<br>'+marker1.description +'</div>');
      infowindow.open(map, marker1);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker1 = null;
      });
    }
}
function populateInfoWindow2(marker2, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker2 != marker2) {
      infowindow.marker2 = marker2;
      infowindow.setContent('<div>' + marker2.title+'<br>'+marker2.description +'</div>');
      infowindow.open(map, marker2);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker2 = null;
      });
    }
}
function populateInfoWindow3(marker3, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker3 != marker3) {
      infowindow.marker3 = marker3;
      infowindow.setContent('<div>' + marker3.title+'<br>'+marker3.description +'</div>');
      infowindow.open(map, marker3);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker3 = null;
      });
    }
}
function populateInfoWindow4(marker4, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker4 != marker4) {
      infowindow.marker4 = marker4;
      infowindow.setContent('<div>' + marker4.title+'<br>'+marker4.description +'</div>');
      infowindow.open(map, marker4);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker4 = null;
      });
    }
}
function populateInfoWindow5(marker5, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker5 != marker5) {
      infowindow.marker5 = marker5;
      infowindow.setContent('<div>' + marker5.title+'<br>'+marker5.description +'</div>');
      infowindow.open(map, marker5);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker5 = null;
      });
    }
}

function populateInfoWindow6(marker6, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker6 != marker6) {
      infowindow.marker6 = marker6;
      infowindow.setContent('<div>' + marker6.title+'<br>'+marker6.description +'</div>');
      infowindow.open(map, marker6);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker6 = null;
      });
    }
}
  
function showListings1() {
    for (var i = 0; i < markers1.length; i++) {
       markers1[i].setMap(map);
     if (!markers1[i].getVisible()) {
               markers1[i].setVisible(true);
         } else {
              markers1[i].setMap(null);
               markers1[i].setVisible(false);
              }
            }
}
function showListings2() {
    for (var i = 0; i < markers2.length; i++) {
       markers2[i].setMap(map);
     if (!markers2[i].getVisible()) {
               markers2[i].setVisible(true);
         } else {
              markers2[i].setMap(null);
               markers2[i].setVisible(false);
              }
            }
}

function showListings3() {
    for (var i = 0; i < markers3.length; i++) {
       markers3[i].setMap(map);
     if (!markers3[i].getVisible()) {
               markers3[i].setVisible(true);
         } else {
              markers2[i].setMap(null);

               markers3[i].setVisible(false);
              }
            }
}
function showListings4() {
    for (var i = 0; i < markers4.length; i++) {
       markers4[i].setMap(map);
     if (!markers4[i].getVisible()) {
               markers4[i].setVisible(true);
         } else {
              markers4[i].setMap(null);

               markers4[i].setVisible(false);
              }
            }
}
function showListings5() {
    for (var i = 0; i < markers5.length; i++) {
       markers5[i].setMap(map);
     if (!markers5[i].getVisible()) {
               markers5[i].setVisible(true);
         } else {
              markers5[i].setMap(null);

               markers5[i].setVisible(false);
              }
            }
}

function showListings6() {
    for (var i = 0; i < markers6.length; i++) {
       markers6[i].setMap(map);
     if (!markers6[i].getVisible()) {
               markers6[i].setVisible(true);
         } else {
              markers6[i].setMap(null);

               markers6[i].setVisible(false);
              }
            }
} 
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}
function displayMarkers(obj,category) {
  for (var i = 0; i < markers1.length; i++)
   {   
     markers1[i].setMap(map);
           if (markers1[i].category === category) {

               if ($(obj).is(":checked")) {

                   markers1[i].setVisible(true);
               } else {
                //markers1[i].setMap(null);
                   markers1[i].setVisible(false);    
               }
           } 
           else 
           {
               //markers1[i].setMap(null);
               markers1[i].setVisible(false);
           }
       }
}

function showCheckboxes2() {
  var checkboxes2 = document.getElementById("checkboxes2");
  if (!expanded) {
    checkboxes2.style.display = "block";
    expanded = true;
  } else {
    checkboxes2.style.display = "none";
    expanded = false;
  }
}
function displayMarkers2(obj,category) {

             for (var i = 0; i < markers2.length; i++)
             
             {   
               markers2[i].setMap(map);
                     if (markers2[i].category === category) {

                         if ($(obj).is(":checked")) {

                             markers2[i].setVisible(true);
                         } else {
                          //markers1[i].setMap(null);
                             markers2[i].setVisible(false);    
                         }
                     } 
                     else 
                     {
                         //markers1[i].setMap(null);
                         markers2[i].setVisible(false);
                     }
                 }


         }
function showCheckboxes3() {
  var checkboxes3 = document.getElementById("checkboxes3");
  if (!expanded) {
    checkboxes3.style.display = "block";
    expanded = true;
  } else {
    checkboxes3.style.display = "none";
    expanded = false;
  }
}
function displayMarkers3(obj,category) {
  for (var i = 0; i < markers3.length; i++)
   {   
     markers3[i].setMap(map);
           if (markers3[i].category === category) {

               if ($(obj).is(":checked")) {

                   markers3[i].setVisible(true);
               } else {
                //markers1[i].setMap(null);
                   markers3[i].setVisible(false);    
               }
           } 
           else 
           {
               //markers1[i].setMap(null);
               markers3[i].setVisible(false);
           }
       }
}
function showCheckboxes4() {
  var checkboxes4 = document.getElementById("checkboxes4");
  if (!expanded) {
    checkboxes4.style.display = "block";
    expanded = true;
  } else {
    checkboxes4.style.display = "none";
    expanded = false;
  }
}
function displayMarkers4(obj,category) {
  for (var i = 0; i < markers4.length; i++)
   {   
     markers4[i].setMap(map);
           if (markers4[i].category === category) {

               if ($(obj).is(":checked")) {

                   markers4[i].setVisible(true);
               } else {
                //markers1[i].setMap(null);
                   markers4[i].setVisible(false);    
               }
           } 
           else 
           {
               //markers1[i].setMap(null);
               markers4[i].setVisible(false);
           }
       }
}
function showCheckboxes5() {
  var checkboxes5 = document.getElementById("checkboxes5");
  if (!expanded) {
    checkboxes5.style.display = "block";
    expanded = true;
  } else {
    checkboxes5.style.display = "none";
    expanded = false;
  }
}
function displayMarkers5(obj,category) {
  for (var i = 0; i < markers5.length; i++)
   {   
     markers5[i].setMap(map);
           if (markers5[i].category === category) {

               if ($(obj).is(":checked")) {

                   markers5[i].setVisible(true);
               } else {
                //markers1[i].setMap(null);
                   markers5[i].setVisible(false);    
               }
           } 
           else 
           {
               //markers1[i].setMap(null);
               markers5[i].setVisible(false);
           }
       }
}
function showCheckboxes6() {
  var checkboxes6 = document.getElementById("checkboxes6");
  if (!expanded) {
    checkboxes6.style.display = "block";
    expanded = true;
  } else {
    checkboxes6.style.display = "none";
    expanded = false;
  }
}
function displayMarkers6(obj,category) {
  for (var i = 0; i < markers6.length; i++)
   {   
     markers6[i].setMap(map);
           if (markers6[i].category === category) {

               if ($(obj).is(":checked")) {

                   markers6[i].setVisible(true);
               } else {
                //markers1[i].setMap(null);
                   markers6[i].setVisible(false);    
               }
           } 
           else 
           {
               //markers1[i].setMap(null);
               markers6[i].setVisible(false);
           }
       }
}