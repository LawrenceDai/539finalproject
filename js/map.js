const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }), 
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([135.753718652, 34.9686444587]),
    zoom: 8,
  }),
});

const marker = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([135.753718652, 34.9686444587])),
            })
        ]
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon ({
            crossOrigin: 'anonymous',
            color: 'rgb(230, 0, 18)',
            src: '../images/dot.svg',
        })
    })
});
map.addLayer(marker);
