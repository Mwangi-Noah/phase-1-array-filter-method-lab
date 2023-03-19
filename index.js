function findMatching(drivers, driverName){
    return drivers.filter(function(drivers){
        return drivers.toLowerCase() === driverName.toLowerCase()});
}
function fuzzyMatch(drivers, queryName) {
    let totalChar = queryName.length;
      return drivers.filter(function(driverName){
      return driverName.slice(0, totalChar) === queryName;
    });
}
function matchName(drivers, name) {
    return drivers.filter(function(driver){
        return driver.name === name;
    });
}
      