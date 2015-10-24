NoonMap = {
	bigMap: undefined,
	map: undefined,
	placemark: undefined,
	tempPath: '',
	initSampleMap: function(mapId) {
		if (typeof mapId === 'undefined') {
			return false;
		}

		var $obj = {
			coords: [47.225221, 39.691765],
			name: 'NooN-студия'
		}

		this.map = new ymaps.Map(mapId, {
			center: $obj.coords,
			zoom: 16
		});

		this.setPlacemark($obj);

		this.map.controls.add('zoomControl', { left: 5, top: 5 });
	},
	setPlacemark: function($obj, showContent) {
		var balloonContent = '';

		placeMark = new ymaps.Placemark($obj.coords, {
			hintContent: $obj.name
		});

		this.map.geoObjects.add(placeMark);

		return placeMark;
	}
}

ymaps.ready(function () {
	NoonMap.initSampleMap('map');
});
