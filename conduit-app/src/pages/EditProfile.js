import React, { useState } from 'react';
import axios from 'axios';
let user = JSON.parse(localStorage.getItem('user'));

function EditProfile() {
  const [image, setUrl] = useState(user.image);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [updatedUser, setUpdatedUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateUser = async () => {
      try {
        const res = await axios({
          method: 'PUT',
          url: `https://mighty-oasis-08080.herokuapp.com/api/user`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
          data: JSON.stringify({
            user: {
              image,
              username,
              bio,
              email,
              password,
            },
          }),
        });
        setUpdatedUser(res.data.user);
        window.location.href = `/profile`;
      } catch (error) {
        console.log(error);
      }
    };
    updateUser();
  };

  return (
    <>
      <h1 className="text-center text-3xl mt-10">Update Profile</h1>
      <form className="my-6 w-2/6 mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="URL of the profile image"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
          value={image}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          id="bio"
          name="bio"
          placeholder="Bio"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className=" bg-green hover:bg-green-dark text-white text-lg px-6 py-2 rounded block mx-auto"
          onClick={(e) => handleSubmit(e)}
        >
          Update
        </button>
      </form>
    </>
  );
}

export default EditProfile;
Footer
