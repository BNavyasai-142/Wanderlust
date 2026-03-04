    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles or make your own style
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });