import { createStore } from "vuex";

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
      state.officers = officerData;
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
