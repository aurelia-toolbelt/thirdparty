$(document).ready(function(e) {
    if ($('.at-float-label input').length) {
        var at_float_on_class = "on";
        var at_float_show_class = "show";
        $('.float-input').on('at-check-value', function() {
                var _at_label = $(this).closest('.at-float-label').find('.float-label');
                if (this.value !== '') {
                    _at_label.addClass(at_float_show_class);
                } else {
                    _at_label.removeClass(at_float_show_class);
                }
            })
            .on("keyup", function() {
                $(this).trigger("at-check-value");
            })
            .on("focus", function() {
                $(this).closest(".at-float-label").find('.float-label').addClass(at_float_on_class);
            })
            .on("blur", function() {
                $(this).closest(".at-float-label").find('.float-label').removeClass(at_float_on_class);
            }).trigger("at-check-value");
    }
});