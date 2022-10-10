import '../styles/createStaff.scss';
const CreateStaff = () => {
  return (
    <div>
      <div className="container">
        <h1>Create Staff</h1>
        <div className="Account">
          <h2>Account</h2>
          <h4>
            Username: <input placeholder="enter username" />
          </h4>
          <h4>
            Password: <input type = "password" placeholder="enter password" />
          </h4>
        </div>
        <div className="Profile">
            <h2>Profile</h2>
            <div className="flex-container-profile">
          <div className="left-profile flex-profile">
            <h4>
              Name: <input placeholder="enter name" />{' '}
            </h4>
            <h4>
              Folk: <input placeholder="enter folk" />{' '}
            </h4>
            <h4>
              Gender: <br />
            </h4>
            <input type="radio" name="gender" /> MALE
            <input type="radio" name="gender" /> FEMALE
          </div>
          <div className="right-profile flex-profile">
            <h4>
              Birthday: <input type="date" />{' '}
            </h4>
            <h4>
              Phone: <input type="number" placeholder="enter phone number" />
            </h4>
            <h4>
              Email: <input type="email" placeholder="enter email" />
            </h4>
          </div>
          </div>
        </div>
        <div className="Address">
          <h2>Addresss</h2>
          <h4>
            Country: <input placeholder="enter country" />
          </h4>
          <h4>
            City: <input placeholder="enter city" />
          </h4>
          <h4>
            District: <input placeholder="enter district " />
          </h4>
          <h4>
            Street: <input placeholder="enter street" />
          </h4>
        </div>
        <button>Create</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};
export default CreateStaff;
