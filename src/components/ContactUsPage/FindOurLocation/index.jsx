import React from 'react'
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{text}</div>

const FindOurLocation = () => {
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
}

  return (
    <div className='py-28 mx-10'>
      <div className='bg-gray-200 pt-10 pb-44'>
        <h4 className='text-center text-blue-700'>MAPS & DIRECTIONS</h4>
        <h1 className='text-center text-2xl font-medium py-3'>
          Find Our Location In Town
        </h1>
        <p className='text-center leading-7'>
          Search for our exact location and office address through <br /> this
          exclusive map listing provided below.
        </p>
      </div>
      <div className='-mt-32 px-3 md:px-5 rounded h-[300px] md:h-[500px]' style={{ width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text='Our Office' />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default FindOurLocation
