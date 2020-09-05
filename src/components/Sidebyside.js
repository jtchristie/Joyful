import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="">
    {gridItems.map((item) => (
      <div style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '100px'
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
          <p class='text' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
          }}>{item.text}</p>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
