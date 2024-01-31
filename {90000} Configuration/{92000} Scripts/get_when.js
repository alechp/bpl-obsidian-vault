// Day examples: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
// Label examples: when-mon, when-tue, when-web, when-thu, when-fri, when-sat, when-sun
// Return `when-mon` if today is Monday, `when-tue` if today is Tuesday, and so on
function getWhen(type) {
  const today = new Date().getDay() - 1; // 0-6
  if(type=="label") {
    var days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    return `when-${days[today]}`;
  } else {
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days[today];
  }
}

module.exports = getWhen;
