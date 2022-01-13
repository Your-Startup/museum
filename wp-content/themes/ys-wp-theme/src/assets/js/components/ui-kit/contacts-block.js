window.addEventListener('DOMContentLoaded', () => {
    $(function () {
        $("#accordion").accordion({
            heightStyle: 'content',
            collapsible: true,
            active: false,
        });
    });

    $(function () {
        $("#new-accordion").accordion({
            heightStyle: 'content',
            collapsible: true,
            active: false,
        });
    });

    $(function () {
        $("#accordion-new").accordion({
            heightStyle: 'content',
            collapsible: true,
            active: false,
        });
    });

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
    }
})