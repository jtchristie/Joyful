import React from 'react'
import PropTypes from 'prop-types'

const Foot = ({data}) => (
    <div className="columns">
        <h4 className="has-text-centered has-text-weight-semibold">
            ${foot.additional}
        </h4>
    </div>
)

Foot.PropTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            additional: PropTypes.string
        })
    )
}

export default Foot