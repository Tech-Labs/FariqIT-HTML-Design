function JaMap() {
 var mapCanvas = document.getElementById("map");

 data = mapCanvas.dataset;
 var myCenter = new google.maps.LatLng(data.lat,data.lng);
 var mapOptions = {
 center: myCenter,
 zoom: 15,
 };
 var map = new google.maps.Map(mapCanvas,mapOptions);
 var marker = new google.maps.Marker({
   position: myCenter,
   icon: data.icon
 });
 marker.setMap(map);
}