import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="site-section bg-light">
      <div className="container">
        <div className="row" style={{textAlign: 'center'}}>

          <div className="col-md-12 mb-5">
            
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold">Address</p>
              <p className="mb-4 address">16 ش رشدان، الدقي أ، قسم الدقي، محافظة الجيزة</p>

              <p className="mb-0 font-weight-bold">Phone</p>
              <p className="mb-4"><a href="https://wa.me/01067554142">+20 10 6755 4142</a></p>
              
              <p className="mb-0 font-weight-bold">Email Address</p>
              <p className="mb-0"><a href=" ">elfaramanews@gmail.com</a></p>
    

            </div>
            
            <div className="p-4 mb-3 bg-white">
    <div className="mapouter mb-60">
        <div className="gmap_canvas">
            <iframe
                title="Google Maps"
                width="100%"
                height="520"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.017098648378!2d31.20886728180768!3d30.03636731028045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846d455b877e7%3A0x7dcb0f3c2f5fe918!2s16%20Rashdan%2C%20Ad%20Doqi%20A%2C%20Dokki%2C%20Giza%20Governorate%203750306!5e0!3m2!1sen!2seg!4v1710153713537!5m2!1sen!2seg"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
            ></iframe>
        </div>
    </div>
</div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;