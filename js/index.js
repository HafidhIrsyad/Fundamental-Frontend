(function($) {
    $(function() {
        $('.sidenav').sidenav();
        $('.slider').slider({
            indicators: false,
            height: 580,
            transition: 600,
            interval: 1200
        });

    });
})(jQuery);