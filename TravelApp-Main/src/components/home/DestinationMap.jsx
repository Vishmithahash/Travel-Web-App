import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { destinations } from '../../utils/mockData'
import L from 'leaflet'
// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})
const destinationCoordinates = [
  {
    name: 'Bali',
    coordinates: [-8.4095, 115.1889],
  },
  {
    name: 'Santorini',
    coordinates: [36.3932, 25.4615],
  },
  {
    name: 'Kyoto',
    coordinates: [35.0116, 135.7681],
  },
  {
    name: 'Machu Picchu',
    coordinates: [-13.1631, -72.545],
  },
  {
    name: 'Paris',
    coordinates: [48.8566, 2.3522],
  },
  {
    name: 'Maldives',
    coordinates: [3.2028, 73.2207],
  },
]
const DestinationMap = () => {
  const [activeDestination, setActiveDestination] = useState(null)
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Destinations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover amazing places around the world
          </p>
        </div>
        <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{
              height: '100%',
              width: '100%',
            }}
            className="z-10"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {destinationCoordinates.map((dest, index) => (
              <Marker
                key={index}
                position={dest.coordinates}
                eventHandlers={{
                  click: () => setActiveDestination(dest.name),
                }}
              >
                <Popup>
                  <div className="text-center">
                    <h3 className="font-semibold">{dest.name}</h3>
                    <button
                      onClick={() => {}}
                      className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    >
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}
export default DestinationMap
