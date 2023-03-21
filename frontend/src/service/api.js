import axios from "axios";
const URL = "http://localhost:8000/users";
export const addUser = async (data) => {
  console.log(data);
  try {
    return await axios(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}`);
  } catch (error) {
    console.log(error);
  }
};
export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};


export const editUser = async (data,id) => {
    console.log(data);
    try {
      return await axios(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  