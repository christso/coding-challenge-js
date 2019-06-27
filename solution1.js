var solution = function (A) {
  A.sort((a,b) => a > b);

  let pArr = new Array();
  A.forEach((value, index) => {
    var pValue = pArr.length > 0 ? pArr[pArr.length - 1] : null;
    if (value > 0 && pValue && value - pValue > 1) {
      return;
    }

    pArr.push(value);
  });

  var lastValue = pArr[pArr.length - 1];
  return Math.max(1, lastValue + 1);
};

module.exports = solution;