import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import '../styles/createStaff.scss';
const GMale = true;
const GFemale = false;
const CreateStaff = () => {
  const [accountStaff, setAccountStaff] = useState({
    username: '',
    password: '',
    name: '',
    gender: '',
    birthday: '',
    folk: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    district: '',
    street: '',
  });


  const HandleOnclickCreate = () => {
    // useEffect(() => {
    //   axios
    //     .post('api/account/save', accountStaff)
    // }, []);
    console.log(accountStaff)
  };
  return (
    <div>
<<<<<<< HEAD
      <div className="container">
        <h1>Create Staff</h1>
        <div className="Account">
          <h2>Account</h2>
          <h4>
            Username:{' '}
            <input
              placeholder="enter username"
              value={accountStaff.username}
              onChange={(e) => {
                setAccountStaff({ ...accountStaff, username: e.target.value });
              }}
            />
          </h4>
          <h4>
            Password:{' '}
            <input
              type="password"
              value={accountStaff.password}
              placeholder="enter password"
              onChange={(e) => {
                setAccountStaff({ ...accountStaff, password: e.target.value });
              }}
            />
          </h4>
        </div>
        <div className="Profile">
          <h2>Profile</h2>
          <div className="flex-container-profile">
            <div className="left-profile flex-profile">
              <h4>
                Name:{' '}
                <input
                  placeholder="enter name"
                  value={accountStaff.name}
                  onChange={(e) => {
                    setAccountStaff({ ...accountStaff, name: e.target.value });
                  }}
                />
              </h4>
              <h4>
                Folk:{' '}
                <input
                  placeholder="enter folk"
                  value={accountStaff.folk}
                  onChange={(e) => {
                    setAccountStaff({ ...accountStaff, folk: e.target.value });
                  }}
                />
              </h4>
              <h4>
                Gender: <br />
              </h4>
=======
      <div className="container-create-staff">
        <div className="main-create-staff">
          <h1>Create Staff</h1>
          <div className="Account">
            <h2>Account</h2>
            <h4>
              Username:{' '}
>>>>>>> cd7dc86fe1845850817c0cf3ac3cafca6a828613
              <input
                placeholder="enter username"
                value={accountStaff.username}
                onChange={(e) => {
<<<<<<< HEAD
                  setAccountStaff({ ...accountStaff, gender: GMale });
=======
                  setAccountStaff({
                    ...accountStaff,
                    username: e.target.value,
                  });
>>>>>>> cd7dc86fe1845850817c0cf3ac3cafca6a828613
                }}
              />
            </h4>
            <h4>
              Password:{' '}
              <input
                type="password"
                value={accountStaff.password}
                placeholder="enter password"
                onChange={(e) => {
<<<<<<< HEAD
                  setAccountStaff({ ...accountStaff, gender: GFemale });
=======
                  setAccountStaff({
                    ...accountStaff,
                    password: e.target.value,
                  });
>>>>>>> cd7dc86fe1845850817c0cf3ac3cafca6a828613
                }}
              />
            </h4>
          </div>
          <div className="Profile">
            <h2>Profile</h2>
            <div className="flex-container-profile">
              <div className="left-profile flex-profile">
                <h4>
                  Name:{' '}
                  <input
                    placeholder="enter name"
                    value={profileStaff.name}
                    onChange={(e) => {
                      setProfileStaff({
                        ...profileStaff,
                        name: e.target.value,
                      });
                    }}
                  />
                </h4>
                <h4>
                  Folk:{' '}
                  <input
                    placeholder="enter folk"
                    value={profileStaff.folk}
                    onChange={(e) => {
                      setProfileStaff({
                        ...profileStaff,
                        folk: e.target.value,
                      });
                    }}
                  />
                </h4>
                <h4>
                  Gender: <br />
                </h4>
                <input
<<<<<<< HEAD
                  type="date"
                  value={accountStaff.birthday}
                  onChange={(e) => {
                    setAccountStaff({
                      ...accountStaff,
                      birthday: e.target.value,
                    });
=======
                  type="radio"
                  name="gender"
                  onChange={(e) => {
                    setProfileStaff({ ...profileStaff, gender: GMale });
>>>>>>> cd7dc86fe1845850817c0cf3ac3cafca6a828613
                  }}
                />{' '}
                MALE
                <input
<<<<<<< HEAD
                  type="number"
                  placeholder="enter phone number"
                  value={accountStaff.phone}
                  onChange={(e) => {
                    setAccountStaff({ ...accountStaff, phone: parseInt(e.target.value) });
                  }}
                />
              </h4>
              <h4>
                Email:{' '}
                <input
                  type="email"
                  placeholder="enter email"
                  value={accountStaff.email}
                  onChange={(e) => {
                    setAccountStaff({ ...accountStaff, email: e.target.value });
                  }}
                />
              </h4>
=======
                  type="radio"
                  name="gender"
                  onChange={(e) => {
                    setProfileStaff({ ...profileStaff, gender: GFemale });
                  }}
                />{' '}
                FEMALE
              </div>
              <div className="right-profile flex-profile">
                <h4>
                  Birthday:{' '}
                  <input
                    type="date"
                    value={profileStaff.birthday}
                    onChange={(e) => {
                      setProfileStaff({
                        ...profileStaff,
                        birthday: e.target.value,
                      });
                    }}
                  />
                </h4>
                <h4>
                  Phone:{' '}
                  <input
                    type="number"
                    placeholder="enter phone number"
                    value={profileStaff.phone}
                    onChange={(e) => {
                      setProfileStaff({
                        ...profileStaff,
                        phone: parseInt(e.target.value),
                      });
                    }}
                  />
                </h4>
                <h4>
                  Email:{' '}
                  <input
                    type="email"
                    placeholder="enter email"
                    value={profileStaff.email}
                    onChange={(e) => {
                      setProfileStaff({
                        ...profileStaff,
                        email: e.target.value,
                      });
                    }}
                  />
                </h4>
              </div>
>>>>>>> cd7dc86fe1845850817c0cf3ac3cafca6a828613
            </div>
          </div>
          <div className="Address">
            <h2>Addresss</h2>
            <h4>
              Country:{' '}
              <input
                placeholder="enter country"
                value={addressStaff.country}
                onChange={(e) => {
                  setAddressStaff({ ...addressStaff, country: e.target.value });
                }}
              />
            </h4>
            <h4>
              City:{' '}
              <input
                placeholder="enter city"
                value={addressStaff.city}
                onChange={(e) => {
                  setAddressStaff({ ...addressStaff, city: e.target.value });
                }}
              />
            </h4>
            <h4>
              District:{' '}
              <input
                placeholder="enter district "
                value={addressStaff.district}
                onChange={(e) => {
                  setAddressStaff({
                    ...addressStaff,
                    district: e.target.value,
                  });
                }}
              />
            </h4>
            <h4>
              Street:{' '}
              <input
                placeholder="enter street"
                value={addressStaff.street}
                onChange={(e) => {
                  setAddressStaff({ ...addressStaff, street: e.target.value });
                }}
              />
            </h4>
          </div>
          <div className="btn-create-staff">
            <button>Create</button>
            <button>Cancel</button>
          </div>
        </div>
<<<<<<< HEAD
        <div className="Address">
          <h2>Addresss</h2>
          <h4>
            Country:{' '}
            <input
              placeholder="enter country"
              value={accountStaff.country}
              onChange={(e) => {
                setAccountStaff({ ...accountStaff, country: e.target.value });
              }}
            />
          </h4>
          <h4>
            City:{' '}
            <input
              placeholder="enter city"
              value={accountStaff.city}
              onChange={(e) => {
                setAccountStaff({ ...accountStaff, city: e.target.value });
              }}
            />
          </h4>
          <h4>
            District:{' '}
            <input
              placeholder="enter district "
              value={accountStaff.district}
              onChange={(e) => {
                setAccountStaff({ ...accountStaff, district: e.target.value });
              }}
            />
          </h4>
          <h4>
            Street:{' '}
            <input
              placeholder="enter street"
              value={accountStaff.street}
              onChange={(e) => {
                setAccountStaff({ ...accountStaff, street: e.target.value });
              }}
            />
          </h4>
        </div>
        <button onClick={HandleOnclickCreate}>Create</button>
        <button>Cancel</button>
=======
>>>>>>> cd7dc86fe1845850817c0cf3ac3cafca6a828613
      </div>
    </div>
  );
};
export default CreateStaff;
