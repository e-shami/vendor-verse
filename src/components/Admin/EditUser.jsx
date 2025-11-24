import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { server } from "../../server";
import axios from "axios";
import styles from "../../styles/styles";

function EditUser(props) {
  const { editId, handleUpdate, setEdit } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const getUserInfo = async (id) => {
    await axios
      .get(`${server}/user/user-info/${id}`)
      .then((res) => {
        console.log(res);
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setRole(res.data.user.role);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    getUserInfo(editId);
  }, [editId]);

  return (
    <form onSubmit={handleUpdate} className="flex flex-col items-center">
      <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
        Update User {name.toLocaleLowerCase()}
      </h3>
      <div className="form-group mb-6 flex-row flex w-[80%]">
        <label className="block text-left text-poppins text-lg font-semibold">
          Full Name
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-2 text-gray-700 text-poppins text-[16]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group mb-6 flex-row flex w-[50%]">
        <label className="block text-left text-poppins text-lg font-semibold">
          Email
        </label>
        <input
          type="email"
          className="form-control block w-full px-3 py-2 text-gray-700 text-poppins font-size-16 rounded-md border-r-gray-500 border-l-gray-500 border-t-gray-500 border-b-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-6 flex-row flex w-[50%]">
        <label className="block text-left text-poppins text-lg font-semibold">
          Role
        </label>
        <select
          className="form-select w-1/2 block px-3 py-2 text-gray-700 text-poppins font-size-16 font-weight-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </select>
      </div>

      <div className="w-full flex items-center justify-center">
        <div
          className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
          onClick={() => setEdit(false)}
        >
          cancel
        </div>
        <div
          className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
          onClick={() =>
            setEdit(false) || handleUpdate(editId, name, email, role)
          }
        >
          confirm
        </div>
      </div>
    </form>
  );
}

export default EditUser;
