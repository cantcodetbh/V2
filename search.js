document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('inputbox');
    // onClick's logic below:
    link.addEventListener('keydown', function(e) {
        //need to add
        function searchGoogle() {
            var one = document.getElementById("inputbox").value;
            var two = 'https://www.google.com/search?q=' + one;
            window.open(two , '_blank')
        }

        if (e.key === 'Enter') {
            searchGoogle()
            e.currentTarget.value = "";
            document.getElementById('inputbox').blur();
        }
    });
});