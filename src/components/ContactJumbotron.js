import React from 'react';

function ContactJumbotron() {
  return (
    <div id="text-button-sticky">
      <div class="jumbotron sticky-top" style={{ marginBottom: '2px' }}>
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="d-none d-md-block col-md-8 col-xl-7 my-auto">
              <h4>Thank you for your business and support!</h4>
            </div>

            <div class="col-md-4 col-xl-3 pt-1 pt-md-2 pb-2">
              <a href="tel:5554280940" class="btn btn-danger btn-md">
                Call Us At (610) 268-0768!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top border-dark w-100 mx-auto my-3"></div>
    </div>
  );
}

export default ContactJumbotron;
