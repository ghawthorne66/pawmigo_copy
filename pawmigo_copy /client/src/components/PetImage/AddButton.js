import React from 'react'

export default props =>
  <div className="input-group">
    <div className="input-group-prepend mb-3">
      <span className="input-group-text">Pet Image:</span>
    </div>
    <div className="custom-file">
      <input type="file" onChange={props.onChange} className="custom-file-input" name='image' id="image" />
      <label className="custom-file-label" htmlFor="image">Choose file</label>
    </div>
  </div> 