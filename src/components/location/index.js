import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
      title="map Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7378.727766716136!2d-0.17099098545217056!3d5.619069358678507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a765ae4feef%3A0xe8296f1d6ad92889!2sUntamed%20Empire!5e0!3m2!1sen!2sgh!4v1595550719229!5m2!1sen!2sgh" width="100%" 
      height="500px" 
      frameBorder="0" 
      style={{
        border: 0
      }} 
      allow-fullscreen="" 
      aria-hidden="false" 
      tabIndex="0"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location
