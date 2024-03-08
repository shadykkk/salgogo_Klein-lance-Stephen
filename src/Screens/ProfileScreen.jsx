import React from 'react';

export default function ProfileScreen() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-5 mt-5">
            <div style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }} className="card">
              <div className="card-body p-4 text-black">
                <div>
                  <h6>Klein Anus Ciaton</h6>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="small mb-0"><i className="far fa-clock me-2"></i> Expiring on 10/23/2025</p>
                    <p className="fw-bold mb-0">Elite Member</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <img
                      style={{ width: '70px' }}
                      className="img-fluid rounded-circle border border-dark border-3"
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                      alt='Generic placeholder image'
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex flex-row align-items-center mb-2">
                      <p className="mb-0 me-2">@negroidklein</p>
                      <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                        <li>
                          <i className="fas fa-star fa-xs"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs"></i>
                        </li>
                      </ul>

                    </div>
                    <div>
                      <button className="btn btn-outline-dark rounded-sm">OPTION 1</button>
                      <button className="btn btn-outline-dark rounded-sm mx-1">0PTION 2</button>
                      <button className="btn btn-outline-dark rounded-circle"><i className="fas fa-comment"></i></button>
                    </div>
                  </div>
                </div>
                <hr />
                <p className="card-text">DETAILS</p>
                <button className="btn btn-success rounded-pill btn-block">ETC</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
