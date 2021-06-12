var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayDate');
eDisplayMoment.innerHTML = NowMoment.format('MMMM Do YYYY');

var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayTime');
eDisplayMoment.innerHTML = NowMoment.format('h:mm A');

var update = function() {
    document.getElementById("displayTime")
    .innerHTML = moment().format('h:mm A');
}
setInterval(update, 1000);