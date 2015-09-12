/**
 * Created by Joeri Smits on 11/01/2015.
 */

var oneTime = false;

setInterval(function () {
    var comingSoon = document.getElementsByTagName("h1"),
        icons = document.getElementById("icons");
        //element = document.getElementById("countdown");
    if(!oneTime) {
        comingSoon[0].setAttribute("class", "animated fadeInUp");
        icons.setAttribute("class", "animated fadeInUp");
        //element.setAttribute("class", "animated fadeInUp");
        oneTime = true;
    }
}, 500);