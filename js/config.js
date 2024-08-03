// Updates that are coming soon:
// Observations Slide
// Input your api-key

var api_key = `e1f10a1e78da46f5b10a1e78da96f525`; 
// Input your mapbox key.
 var map_key = `pk.eyJ1IjoiaGFzdHl0dWJlIiwiYSI6ImNsa2hkZTh6bzAwazQzZHFyNmF5aTRsZGwifQ.5QJvYIHo0odZ5jCFApV7yw`

 // This is to automatically transition the slides. Viewer Requested. 
 automatictransition = "true"

var timezone = "America/New_York"
// Location Configuration
 var lat = "28.4831649" // Latitude. You can head over to www.google.com/maps/ and right click on a spot on the map for your cordinates.
 var lon = "-82.53698" // Longitude.
 // Icon Configuration
 var icons = "XL"; // Types are 2007, 2010, and XL
 var filet = `png` // gif or png. No period included

 // Backgrounds
 var bg = "bg1" // Insert your custom background. bg1 is the default. Put it in images/bg folder
 var bgformat = "png" // If your image is other than png, set the image file type. Do not include a dot before the file type.
// Very Important:
// If your icons is 2007, change to gif.
// If your icons is 2010, change to png.
// No period before the file type. Otherwise it gives it out as 26..png/gif
var locationn =  "Spring Hill" // Your Location. Leave Blank for autolocation.
var forecastlocation = `Hernando County` // The Location that appears on the forecast. You can do ${locationn} for the city name above
var almanacstationname = "" /* The Name that appears on the Almanac Slide. Leave blank if 
you want to automatically set the name of the station */
var units = "e" // The displayed. e is imperial, m is metric, h is hybrid, s is (the) kelvin. Default is e.
// This is the message that aUnits ppears on the LDL Bar.
var marquee_message = "Tropical Storm Debby is approaching as of August 3rd, 2024. I wonder if I will even update this. Stay safe Y'all!"

// The Music Configuration was Removed on March 4th 2024.

 // Alert Configuration
 var country = "US" // Two Letter Country Code. Some Countries are not supported. https://www.ibm.com/docs/en/environmental-intel-suite?topic=apis-alert-details
var lang = "en"
 // List of Supported Languages:
 // English: en
 // Spanish: es
 // German: de
 // French: fr
 // Finnish: fi
// Hungrian: hu
// Icelandic: is
// Hebrew: he
// Italian: it
// Japanese: ja (rather than jp)
// Latavian: lv
// Macedonian: mk
// Romanian: ro
// Polish: pl
// Portuguese: pt
// Swedish: sv
// Slovak: sk
// Slovenian: sl
// All of them are listed here: https://www.ibm.com/docs/en/environmental-intel-suite?topic=apis-alert-details
 // End of configs.
