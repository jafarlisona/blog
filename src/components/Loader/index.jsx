import React from 'react'

function Loader() {
  return (
    <>
     <div className="spinner-container">
        <div class="atom-spinner">
          <div class="spinner-inner">
            <div class="spinner-line"></div>
            <div class="spinner-line"></div>
            <div class="spinner-line"></div>
            <div class="spinner-circle">&#9679;</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader