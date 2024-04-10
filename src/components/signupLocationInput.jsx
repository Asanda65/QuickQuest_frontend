import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

const GOOGLE_MAPS_API_KEY = 'AIzaSyB9vm3yMZrnPfRTBAG0XRep4hcR6GCKE5s';

const LocationPicker = () => {
    const [showMap, setShowMap] = useState(false);
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null); // Ref for the map instance
    const markerRef = useRef(null); // Ref for the marker

    useEffect(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
            initializeMap();
            initializeAutocomplete();
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                initializeMap();
                initializeAutocomplete();
            };
        }
    }, [showMap]);

    const initializeMap = () => {
        if (mapRef.current && !mapInstanceRef.current) {
            const initialPosition = { lat: 0, lng: 0 };
            mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
                center: initialPosition,
                zoom: 2,
            });

            markerRef.current = new window.google.maps.Marker({
                position: initialPosition,
                map: mapInstanceRef.current,
                draggable: true,
            });
        }
    };

    const initializeAutocomplete = () => {
        const input = document.getElementById('location');
        const autocomplete = new window.google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', mapInstanceRef.current);

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            const location = place.geometry.location;

            if (mapInstanceRef.current) {
                mapInstanceRef.current.setCenter(location);
                mapInstanceRef.current.setZoom(15);
            }

            if (markerRef.current) {
                markerRef.current.setPosition(location);
            }
        });
    };

    const handleIconClick = () => {
        setShowMap(!showMap);
    };

    const closeMap = () => {
        setShowMap(false);
    };

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <div className="relative mt-1">
                <input
                    type="text"
                    id="location"
                    placeholder="Enter Location or Locate me"
                    className={`block w-full border border-green-800 pl-3 pr-12 py-1 ${showMap ? "rounded-tl-md rounded-tr-md" : "rounded-md"} shadow-sm focus:outline-none focus:border`}
                />
                <div className={`absolute inset-y-0 right-0 flex items-center bg-teal-500 rounded-r-md ${showMap ? "rounded-br-none" : "rounded-r-md"}`}>
                    <FontAwesomeIcon icon={faCrosshairs} className="w-5 h-5 text-white mx-3" onClick={handleIconClick} />
                </div>
            </div>
            {showMap && (
                <div className="map-container" style={{ display: 'block', height: '300px', width: '100%' }} ref={mapRef}></div>
            )}
            {showMap && (
                <button
                    onClick={closeMap}
                    className="mt-0 bg-teal-500 text-white py-1 border border-green-800 w-full"
                >
                    Confirm & Continue
                </button>
            )}
        </div>
    );
};

export default LocationPicker;
