const CreateStaff = () => {
    return (
        <div>
      <div className="container">
        <div className="Account">
          <h3>Account</h3>
          <h4>
            Username: <input placeholder="enter username" />
          </h4>
          <h4>
            Password: <input placeholder="enter password" />
          </h4>
        </div>
          <div className="Profile">
            <h3>Profile</h3>
            <p>Name: <input placeholder="enter name" /> </p>
            <p>Folk: <input placeholder="enter folk" /> </p> 
            <p>Gender: <input type="radio" name="gender"/>Male <input type="radio" name="gender"/>Female </p> 
            <p>Birthday: <input type="date" /> </p> 
            <p>Phone: <input type="number" placeholder="enter phone number" /></p> 
            <p>Email: <input type="email" placeholder="enter email" /></p> 
          </div>
          <div className="Address">
            <h3>Addresss</h3>
            <p>Country: <input placeholder="enter country" /></p> 
            <p>City: <input placeholder="enter city" /></p> 
            <p>District: <input placeholder="enter district " /></p> 
            <p>Street: <input placeholder="enter street" /></p> 
          </div>
          <button>Create</button>
          <button>Cancel</button>
        </div>
    </div>
    )
}
export default CreateStaff