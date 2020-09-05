import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map((item) => (
      <div key={item.text} className="tile is-ancestor">
            <div className='tile is-4 vertical is-parent' >
              <div class="tile is-child box">
                <PreviewCompatibleImage  imageInfo={item} />
              </div>
            </div>
          <div className="tile is-parent vertical">
            <div className='tile is-child box'>
              <h2 style={{fontWeight: 'bold'}}>{item.heading}</h2>
            </div>
            <div className='tile is-child box'>
              <p class='text'>{item.text}</p>
            </div>
          </div>
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
