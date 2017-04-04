$(document).ready(function() {
    var bodyContainer = '#body-container';
    var data = {
        isLoggedIn: true 
    };

    // get data from server
    /*
    $.getJSON('backend/isLoggedIn.json', function(data) {
        console.log(123);
    });
    */
    // check if user is logged in
    if(data.isLoggedIn) {
        // show the page
    }
    else {
        // hide the page
        /*
        $(bodyContainer).hide(5000, function() {
            // show done
            alert('Done');
        });
        */
        /*
        $(bodyContainer).hide({
            duration: 5000,
            complete: function() {
                // show done
                alert('Done');
            }
        });
        */
        $(bodyContainer).hide();
        // $('body').html('<div>Please log in first.</div>');
    }
});

