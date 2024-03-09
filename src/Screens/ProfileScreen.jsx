import React from 'react';
import './ProfileScreen.css';

export default function ProfileScreen({ email, gender }) {
  const username = 'Stephen Miyuki Zapata';
  const userStatus = 'Elite Member';
  const expirationDate = 'Expiring on 10/23/2025';
  const userAvatar = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp';
  const userHandle = 'LanceStephenson';
  const userRating = 5; // Since there are 5 stars in the code

  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-5 mt-5">
            <div style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }} className="card">
              <div className="card-body p-4 text-black">
                <div>
                  <h6>{username}</h6>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="small mb-0"><i className="far fa-clock me-2"></i>{expirationDate}</p>
                    <p className="glowing-text">{userStatus}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <img
                      style={{ width: '70px' }}
                      className="img-fluid rounded-circle border border-dark border-3"
                      src={userAvatar} 
                      alt='Profile Avatar'
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex flex-row align-items-center mb-2">
                      <p className="mb-0 me-2">@{userHandle}</p>
                      <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                        {Array(userRating).fill(<li><i className="fas fa-star fa-xs"></i></li>)}
                      </ul>
                    </div>
                    <div>
                      <div>
                        <button className="btn btn-outline-dark rounded-sm">ACTIVITIES</button>
                        <button className="btn btn-outline-dark rounded-sm mx-1">EMAIL</button>
                        <button className="btn btn-outline-dark rounded-sm mx-1">GENDER</button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <p className="card-text">OVERVIEW</p>
                <button className="btn btn-success rounded-pill btn-block">USER SETTINGS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
