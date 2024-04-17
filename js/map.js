const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }), 
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([135.756394, 34.969773]),
    zoom: 8,
  }),
});

const marker = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([135.756394, 34.969773])),
            })
        ]
    }),
    style: new ol.style.Style({
        image: new ol.style.Icon ({
            color: 'rgb(230, 0, 18)',
            src: 'images/dot.svg',
        })
    })
});
map.addLayer(marker);
