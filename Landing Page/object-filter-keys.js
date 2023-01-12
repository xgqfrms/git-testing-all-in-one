
async search() {
  const params = {};
  for (let [key, value] of Object.entries(this.searchData)) {
    // console.log(`key, value =`, key, value);
    if(key !== "interviewStatus") {
      if(key === "status" && this.form.status === "1" || key === "isChoooseAllDelivery" && this.form.status !== "1") {
        // ignore
      } else {
        params[key] = value;
      }
    }
  }
}


async search() {
  const params = {};
  for (let key in this.searchData) {
    // console.log(`key =`, key);
    if(key !== "interviewStatus") {
      if(key === "status" && this.form.status === "1" || key === "isChoooseAllDelivery" && this.form.status !== "1") {
        // ignore
      } else {
        params[key] = this.searchData[key];
      }
    }
  }
}


// this.form = {status: "1", ...}
// this.searchData = {status: "2", interviewStatus: "1", isChoooseAllDelivery: false, ...}
async search() {
  const params = {};
  let keys = Object.keys(this.searchData).filter(key => key !== "interviewStatus");
  if(this.form.status === "1") {
    keys = keys.filter(key => key !== "status");
  } else {
    keys = keys.filter(key => key !== "isChoooseAllDelivery");
  }
  for (let key in keys) {
    params[key] = this.searchData[key];
  }
}

async search() {
  let keys = Object.keys(this.searchData).filter(key => key !== "interviewStatus");
  if(this.form.status === "1") {
    keys = keys.filter(key => key !== "status");
  } else {
    keys = keys.filter(key => key !== "isChoooseAllDelivery");
  }
  // const params = keys.reduce((obj, key) => {
  //   obj[key] = this.searchData[key];
  //   return obj;
  // }, {});
  // const params = keys.reduce((obj, key) => {
  //   return Object.assign(obj, {
  //     [key]: this.searchData[key],
  //   });
  // }, {});
  const params = keys.reduce((obj, key) => {
    return {
      ...obj,
      [key]: this.searchData[key],
    };
  }, {});
}



// this.form = {status: "1", ...}
// this.searchData = {status: "2", interviewStatus: "1", isChoooseAllDelivery: false, ...}
async search() {
  const params = {};
  const {interviewStatus: ignore, status, isChoooseAllDelivery, ...rest} = dataObj;
  if(this.form.status === "1") {
    params = {
      ...rest,
      isChoooseAllDelivery,
    };
  } else {
    params = {
      ...rest,
      status,
    };
  }
}

