import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => (
  <div className="row py-5 bg-light sticky-top">
    <div className="col col-md-12 col-lg-12">
      <div className="row justify-content-md-center">
        <div className="col col-md-3 col-lg-3">
          <input
            type="text"
            name="searchText"
            className="form-control input-sm"
            placeholder="Search article"
            onChange={(evt) => { props.onChangeInputElement(evt) }}
          />
        </div>
        <div className="col col-md-3 col-lg-3">
          <select
            name="sortBy"
            onChange={(evt) => { props.onChangeInputElement(evt) }}
            className="custom-select mr-sm-2"
          >
            <option value="newest">
                      Sort by newest
            </option>
            <option value="oldest">
                      Sort by oldest
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
)
export default Search

Search.propTypes = {
  onChangeInputElement: PropTypes.func.isRequired,
}
