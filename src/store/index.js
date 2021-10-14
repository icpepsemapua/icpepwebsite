import { createStore } from "vuex";
const urlbase = "https://sheets.googleapis.com/v4/spreadsheets/";
const sheetID = "1KW7le81HyDx0zvG0wlReLqcEKyFBlBbOTQFawXMmcxc";
const range = "";
const key = "AIzaSyDtFVMn_pbQvGR8Q5gRf3jqYjb90VxJKiI";

const convertImgURL = (imgURL) => {
  const extractedImgID =
    imgURL.replace("https://drive.google.com/file/d/", "").split("/")[0] || "";
  if (extractedImgID === "." || extractedImgID === "") {
    return imgURL;
  } else return `https://drive.google.com/uc?export=view&id=${extractedImgID}`;
};

const convertDate = (date, time = []) => {
  const dateArray = date.split("/");
  console.log(time.length);
  if (time.length > 0) {
    const timeArray = time.split(":");
    return new Date(
      dateArray[2],
      dateArray[0] - 1,
      dateArray[1],
      timeArray[0],
      timeArray[1]
    );
  } else {
    console.log(dateArray);
    return new Date(dateArray[2], dateArray[0] - 1, dateArray[1]);
  }
};

const convertBoolean = (boolString) => {
  if (boolString === "TRUE") {
    return true;
  } else {
    return false;
  }
};

export default createStore({
  state: {
    officers: [],
    webdev: [],
    events: [],
    eventsBottom: [],
    mainEvent: {},
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
          showEventButton: convertBoolean(eventData[i][8]),
        });
      }
      state.events = eventArray;
    },
    obtainBottomEventsRows(state, eventBottomData) {
      let eventsBottomArray = [];
      for (let i = 1; i < eventBottomData.length; i++) {
        eventsBottomArray.push({
          id: i,
          img: convertImgURL(eventBottomData[i][0]),
          title: eventBottomData[i][1],
        });
      }
      state.eventsBottom = eventsBottomArray;
    },
    obtainMainEvent(state, mainEventData) {
      state.mainEvent = {
        id: 1,
        img: convertImgURL(mainEventData[1][0]),
        title: mainEventData[1][1],
        description: mainEventData[1][2],
        deadline: convertDate(mainEventData[1][3]),
      };
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
    obtainBottomEventsRows({ commit }) {
      const sheetName = "EventsBottom";
      fetch(
        `${urlbase}${sheetID}/values/${sheetName}${
          range ? "!" + range : ""
        }?key=${key}`
      )
        .then((res) => {
          if (res.ok) {
            res
              .json()
              .then((e) => commit("obtainBottomEventsRows", e.values))
              .catch((error) => console.log(error));
          }
        })
        .catch((e) => console.log(e));
    },
    obtainMainEvent({ commit }) {
      const sheetName = "Main Event";
      fetch(
        `${urlbase}${sheetID}/values/${sheetName}${
          range ? "!" + range : ""
        }?key=${key}`
      )
        .then((res) => {
          if (res.ok) {
            res
              .json()
              .then((e) => commit("obtainMainEvent", e.values))
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
    getBottomEvents(state) {
      return state.eventsBottom;
    },
    getMainEvent(state) {
      return state.mainEvent;
    },
  },
  modules: {},
});
