'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function Maps() {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'quarterly',
        libraries: ['places', 'marker'],
      });

      await loader.load();

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationInMap = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const options = {
            center: locationInMap,
            zoom: 13,
            mapId: 'NEXT_MAPS_TUTS',
          };

          const map = new google.maps.Map(mapRef.current, options);

          const { AdvancedMarkerElement } = google.maps.marker;

          new AdvancedMarkerElement({
            map: map,
            position: locationInMap,
          });
          // Places Service
          const service = new google.maps.places.PlacesService(map);
          const request = {
            location: locationInMap,
            radius: '5000',
            type: ['pet_store'],
          };

          service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
              results.forEach((place) => {
                new google.maps.marker.AdvancedMarkerElement({
                  map: map,
                  position: place.geometry.location,
                  title: place.name,
                });
              });
            } else {
              console.error('Error fetching pet shops:', status);
            }
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    };

    initializeMap();
  }, []);

  return <div className="h-[400px] m-4 max-w-[70%] mx-auto" ref={mapRef} />;
}
