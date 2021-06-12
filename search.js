document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('inputbox');
    // onClick's logic below:
    link.addEventListener('keydown', function() {
        //need to add
        function searchGoogle() {
        var one = document.getElementById("inputbox").value;
        var two = 'https://www.google.com/search?q=' + one;
        window.location = two;
    }


    });
});
