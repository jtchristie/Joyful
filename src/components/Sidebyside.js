import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="">
    {gridItems.map((item) => (
      <div style={{
          display: 'flex',
          flexDirection: 'row',
          height: '25vh'
      }}key={item.text} className="row">
          <div className="has-text-centered">
            <div class='image'
              style={{
                width: '25vw',
                paddingRight: '10vw',
                paddingBottom: '20vh'
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
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
