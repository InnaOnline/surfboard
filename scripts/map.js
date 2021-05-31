let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 11,
    controls: [],
  });

  let coords = [
      [55.576133, 37.76133]
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: './img/marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);