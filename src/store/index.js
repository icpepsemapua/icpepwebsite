import { createStore } from "vuex";
const urlbase = "https://sheets.googleapis.com/v4/spreadsheets/";
const sheetID = "1KW7le81HyDx0zvG0wlReLqcEKyFBlBbOTQFawXMmcxc";
const range = "";
const key = "AIzaSyDtFVMn_pbQvGR8Q5gRf3jqYjb90VxJKiI";

const convertImgURL = (imgURL) => {
  const extractedImgID =
    imgURL.replace("https://drive.google.com/file/d/", "").split("/")[0] || "";
  if (extractedImgID !== "." || extractedImgID !== "") {
    return `https://drive.google.com/uc?export=view&id=${extractedImgID}`;
  } else return imgURL;
};

const convertDate = (date, time) => {
  const dateArray = date.split("/");
  const timeArray = time.split(":");
  console.log(dateArray);
  console.log(timeArray);
  return new Date(
    dateArray[2],
    dateArray[0] - 1,
    dateArray[1],
    timeArray[0],
    timeArray[1]
  );
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
    },
    obtainEventsRows(state, eventData) {
      let eventArray = [];
      for (let i = 1; i < eventData.length; i++) {
        eventArray.push({
          id: i,
          img: convertImgURL(eventData[i][0]),
          title: eventData[i][1],
          type: eventData[i][2],
          desc: eventData[i][3],
          date: convertDate(eventData[i][4], eventData[i][5]),
          endDate: convertDate(eventData[i][6], eventData[i][7]),
          showEventButton: eventData[i][8],
        });
      }
      state.events = eventArray;
      console.log("Hellowwww", state.events);
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
    obtainEventsRows({ commit }) {
      const sheetName = "Events";
      fetch(
        `${urlbase}${sheetID}/values/${sheetName}${
          range ? "!" + range : ""
        }?key=${key}`
      )
        .then((res) => {
          if (res.ok) {
            res
              .json()
              .then((e) => commit("obtainEventsRows", e.values))
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
    getEvents(state) {
      return state.events;
    },
  },
  modules: {},
});
