import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (usertype, username, email, password) => {
    return axios.post('api/signup', { usertype: usertype, username: username, email: email, password: password });
  },

  // Pets
  getPets: function () {
    return axios.get("/api/pets");
  },

  getPet: function (id) {
    return axios.get("/api/pets/" + id);
  },

  deletePet: function (id) {
    return axios.delete("/api/pets/" + id);
  },

  savePet: function (userID, data) {
    return axios.post("/api/addpet/" + userID, data);
  },

  // Condition
  getCondition: function () {
    return axios.get("/api/condition");
  },

  deleteCondition: function (id) {
    return axios.delete("/api/condition/" + id);
  },

  saveCondition: function (petID, data) {
    return axios.post("/api/addcondition/" + petID, data);
  },

  // Weight
  getWeight: function () {
    return axios.get("/api/weight");
  },

  deleteWeight: function (id) {
    return axios.delete("/api/weight/" + id);
  },

  saveWeight: function (petID, data) {
    return axios.post("/api/addweight/" + petID, data);
  },

  // Medication
  getMedication: function () {
    return axios.get("/api/medication");
  },

  deleteMedication: function (id) {
    return axios.delete("/api/medication/" + id);
  },

  saveMedication: function (petID, data) {
    return axios.post("/api/addmedi/" + petID, data);
  },

  // Immunization
  getImmunization: function () {
    return axios.get("/api/immunization");
  },

  deleteImmunization: function (id) {
    return axios.delete("/api/immunization/" + id);
  },

  saveImmunization: function (petID, data) {
    return axios.post("/api/addimmu/" + petID, data);
  },

  // DNA
  getDNA: function () {
    return axios.get("/api/dna");
  },

  deleteDNA: function (id) {
    return axios.delete("/api/dna/" + id);
  },

  saveDNA: function (petID, data) {
    return axios.post("/api/adddna/" + petID, data);
  },

};








