import React from 'react';

function EmailJumbotron() {
  return (
    <div class="jumbotron py-5 mb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-lg-8 col-xl-9 my-auto">
            <h4>Questions, comments, concerns, compliments?</h4>
          </div>

          <div class="col-md-5 col-lg-4 col-xl-3 pt-4 pt-md-0">
            <a
              href="m.olivares@msquarestation.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-danger btn-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailJumbotron;
