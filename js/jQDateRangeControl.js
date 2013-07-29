L.Control.DateSlider = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function (map) {
        this._map = map;
        
        var className = 'leaflet-control-button',
        container = L.DomUtil.create('div', className);
        container.id = "dateSlider";
            
        var title = L.DomUtil.create('div', 'date-slider-title', container);
        $(title).html("<h5>Select Date Range</h5>");
        
        var firstYear = 1993;
        var lastYear = 2012;
        $(container).dateRangeSlider({
            bounds: {
                min: new Date(firstYear, 0, 1),
                max: new Date(lastYear, 11, 31)
            },
            defaultValues: {
                min: new Date(lastYear - 10, 0, 1),
                max: new Date(lastYear - 5, 11, 31)
            },
            step: {
                years: 1
            },
            formatter: function(val) {
                return val.getFullYear();
            }
        });

        //You have to use $.proxy so we keep the right context in the handler methods
        $(container).on("mouseover",$.proxy(this._controlEnter, this));
        $(container).on("mouseout",$.proxy(this._controlLeave, this));
        
        return container;
    },

    onRemove: function (map) {
    },
    
    _controlEnter: function(e) {
        this._map.dragging.disable();
    },
    _controlLeave: function() {
        this._map.dragging.enable();
    }
});
