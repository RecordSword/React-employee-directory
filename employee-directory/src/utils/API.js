import axios from "axios";

export default {
  // This will grab all the users from the api
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};