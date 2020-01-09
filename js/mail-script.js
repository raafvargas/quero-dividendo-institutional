    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#mc-embedded-subscribe-form'); // contact form
        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit
            form.trigger('reset'); // reset form
        });
    });