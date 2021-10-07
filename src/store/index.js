import { createStore } from "vuex";
const urlbase = "https://sheets.googleapis.com/v4/spreadsheets/";
const sheetID = "1KW7le81HyDx0zvG0wlReLqcEKyFBlBbOTQFawXMmcxc";
const range = "";
const key = "AIzaSyDtFVMn_pbQvGR8Q5gRf3jqYjb90VxJKiI";

const convertImgURL = (imgURL) => {
  const extractedImgID =
    imgURL.replace("https://drive.google.com/file/d/", "").split("/")[0] || "";
  if (extractedImgID !== ".") {
    return `https://drive.google.com/uc?export=view&id=${extractedImgID}`;
  } else return imgURL;
};

export default createStore({
  state: {
    officers: [],
    webdev: [],
    events: [],
    eventsBottom: [],
    mainEvent: [],
  },
  mutations: {
    obtainOfficersRows(state, officerData) {
      let officersArray = [];
      for (let i = 1; i < officerData.length; i++) {
        officersArray.push({
          id: i,
          name: officerData[i][0],
          role: officerData[i][1],
          img: convertImgURL(officerData[i][2]),
        });
      }
      state.officers = officersArray;
    },
    obtainWebDevRows(state, webDevData) {
      let webDevArray = [];
      for (let i = 1; i < webDevData.length; i++) {
        webDevArray.push({
          id: i,
          name: webDevData[i][0],
          img: convertImgURL(webDevData[i][1]),
        });
      }
      state.webdev = webDevArray;
      console.log("Hellowwww", state.webdev);
    },
  },
  actions: {
    obtainOfficersRows({ commit }) {
      const sheetName = "Officers";
      fetch(
        `${urlbase}${sheetID}/values/${sheetName}${
          range ? "!" + range : ""
        }?key=${key}`
      )
        .then((res) => {
          if (res.ok) {
            res
              .json()
              .then((e) => commit("obtainOfficersRows", e.values))
              .catch((error) => console.log(error));
          }
        })
        .catch((e) => console.log(e));
    },
    obtainWebDevRows({ commit }) {
      const sheetName = "Web Team";
      fetch(
        `${urlbase}${sheetID}/values/${sheetName}${
          range ? "!" + range : ""
        }?key=${key}`
      )
        .then((res) => {
          if (res.ok) {
            res
              .json()
              .then((e) => commit("obtainWebDevRows", e.values))
              .catch((error) => console.log(error));
          }
        })
        .catch((e) => console.log(e));
    },
  },
  getters: {
    getOfficers(state) {
      return state.officers;
    },
    getWebDev(state) {
      return state.webdev;
    },
  },
  modules: {},
});
