import React from 'react';

import '../styles/btnLogIn.css'

const BtnLogIn = () => {
  return (
    <div className='btn__logIn'>
      <div className="col-md-3 col-sm-3 col-xs-6">
        <a href="#logIn" className="btn btn-sm animated-button thar-one">Sign In</a>
      </div>
    </div>
  );
}

export default BtnLogIn;