// module to create date

// this is an anonymous function that is called with getDate()
module.exports.getDate = function(){
  let today = new Date();

  // create an options object to simplify .toLocaleDateString() call
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  // renders the date like September 12, 1837
  return day = today.toLocaleDateString("en-US", options);
}

// "exports" is shorthand for the module.exports used above
exports.getDay = function(){
  let today = new Date();

  // create an options object to simplify .toLocaleDateString() call
  const options = {
    weekday: "long",
  }

  // renders the day like "Wednesday"
  return day = today.toLocaleDateString("en-US", options);
}
