import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="">
    {gridItems.map((item) => (
      <div style={{
          display: 'flex',
          flexDirection: 'row',
      }}key={item.text} className="image" style={{
          
      }}>
            <div class='image'
              style={{
                width: '300px',
                height: '400px',
                paddingRight: '10vw',
                margin: '0'
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
          }}>
              <h2 style={{fontWeight: 'bold'}}>{item.heading}</h2>
              <p class='text'>{item.text}</p>
          </div>
          <br/>
          <br/>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
