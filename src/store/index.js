import { createStore } from "vuex";

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
      console.log("Hellowwww", state.officers);
    },
  },
  actions: {
    obtainOfficersRows({ commit }) {
      const urlbase = "https://sheets.googleapis.com/v4/spreadsheets/";
      const sheetName = "Officers";
      const sheetID = "1KW7le81HyDx0zvG0wlReLqcEKyFBlBbOTQFawXMmcxc";
      const range = "";
      const key = "AIzaSyDtFVMn_pbQvGR8Q5gRf3jqYjb90VxJKiI";

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
  },
  getters: {
    getOfficers(state) {
      return state.officers;
    },
  },
  modules: {},
});
