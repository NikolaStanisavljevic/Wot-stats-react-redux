import { GET_STATS } from "./types";
import axios from "axios";

export function getStats() {
  return function(dispatch) {
    axios
      .get(
        "https://api.worldoftanks.eu/wot/account/info/?application_id=268da3900b7cb1333a199e12812df394&account_id=517377297"
      )
      .then(res => {
        const stats = [res.data.data[517377297].statistics.all];
        dispatch({
          type: GET_STATS,
          payload: stats
        });
      });
  };
}
