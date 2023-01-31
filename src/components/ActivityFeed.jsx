import React, { useEffect, useState } from "react";
import axios from "axios";

const ActivityFeed = (activities, setActivities) => {
  const getActivities = () => {
    axios
      .get(
        `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app//activities`
      )
      .then((res) => {
        console.log(res.data);
        setActivities(res.data);
      })
      .catch((error) => {
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  useEffect(() => {
    getActivities();
  }, []);

  return <div></div>;
};

export default ActivityFeed;
