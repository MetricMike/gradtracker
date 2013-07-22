L.Control.SliderControl = L.Control.extend({
    options: {
        position: 'topright',
        maxValue: 2012,
        minValue: 1993,
    },

    initialize: function (options) {
        L.Util.setOptions(this, options);
    },

    setPosition: function (position) {
        var map = this._map;

        if (map) {
            map.removeControl(this);
        }

        this.options.position = position;

        if (map) {
            map.addControl(this);
        }
        this.startSlider();
        return this;
    },

    onAdd: function (map) {
        this.options.map = map;

        // Create a control sliderContainer with a jquery ui slider
        var sliderContainer = L.DomUtil.create('div', 'slider', this._container);
        $(sliderContainer).append('<div id="leaflet-slider" style="width:200px"><div class="ui-slider-handle"></div><div id="slider-timestamp" style="width:200px; margin-top:10px;background-color:#FFFFFF"></div></div>');
        //Prevent map panning/zooming while using the slider
        $(sliderContainer).mousedown(function () {
            map.dragging.disable();
        });
        $(document).mouseup(function () {
            map.dragging.enable();
            //Only show the slider timestamp while using the slider
            $('#slider-timestamp').html('');
        });

        var options = this.options;

        return sliderContainer;
    },

    onRemove: function (map) {
        //Delete all markers which where added via the slider and remove the slider div
        $('#leaflet-slider').remove();
    },

    startSlider: function () {
        options = this.options;
        $("#leaflet-slider").slider({
            value: options.minValue + 1,
            min: options.minValue,
            max: options.maxValue +1,
            step: 1,
            slide: function (e, ui) {
                currYear = ui.value;
                resetMap();
            }
        });
    }
});

L.control.sliderControl = function (options) {
    return new L.Control.SliderControl(options);
};