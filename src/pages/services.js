import React from 'react';

const Services = () => {
  return (
    <div style={{ minHeight: '50vh' }} class='container mt-5'>
      <h2>OUR SERVICES</h2>
      <div class='row mt-5'>
        <div class='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <div class='our-services-wrapper mb-60'>
            <div class='services-inner'>
              <div class='our-services-img'>
                <img
                  src='https://www.orioninfosolutions.com/assets/img/icon/Agricultural-activities.png'
                  width='68px'
                  alt=''
                />
              </div>
              <div class='our-services-text'>
                <h4>Food Catering</h4>
                <ul>
                  <li>Hotel / Restaurant caterers.</li>
                  <li>Mobile / Delivery caterers.</li>
                  <li>Private full-service caterers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <div class='our-services-wrapper mb-60'>
            <div class='services-inner'>
              <div class='our-services-img'>
                <img
                  src='https://www.orioninfosolutions.com/assets/img/icon/Agricultural-activities.png'
                  width='68px'
                  alt=''
                />
              </div>
              <div class='our-services-text'>
                <h4>Food Delivery</h4>
                <ul>
                  <li>Fastest Delivery.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <div class='our-services-wrapper mb-60'>
            <div class='services-inner'>
              <div class='our-services-img'>
                <img
                  src='https://www.orioninfosolutions.com/assets/img/icon/Agricultural-activities.png'
                  width='68px'
                  alt=''
                />
              </div>
              <div class='our-services-text'>
                <h4>Bulk Ordering</h4>
                <ul>
                  <li>
                    Now Order your favorite Tasty Food in bulk. Same Taste, Same
                    Quality at Discounted Rates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
