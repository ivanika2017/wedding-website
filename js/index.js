var weeks_name_array = ['неделя', 'недели', 'недель'];
var days_name_array = ['день', 'дня', 'дней'];
var hours_name_array = ['час', 'часа', 'часов'];
var min_name_array = ['минута', 'минуты', 'минут'];
var sec_name_array = ['секунда', 'секунды', 'секунд'];
var goal = new Date("June 17, 2017 07:00:00");
var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

function tic_date() {
    var current = new Date();
    var difference = new Date(goal - current);

    var diffDays = Math.round(difference.getTime() / oneDay);// Math.round(Math.abs((goal.getTime() - current.getTime())/(oneDay)));
    var week = Math.floor(diffDays / 7);// - d.getMonth();
    var days = diffDays - (Math.floor(diffDays / 7)) * 7;
    var hours = difference.getHours();
    var minutes = difference.getMinutes();
    var seconds = difference.getSeconds();

    $("#num-week").html(week);
    $("#num-day").html(days);
    $("#num-hours").html(hours);
    $("#num-min").html(minutes);
    $("#num-sec").html(seconds);

    $("#title-week").html(declOfNum(week, weeks_name_array));
    $("#title-day").html(declOfNum(days, days_name_array));
    $("#title-hours").html(declOfNum(hours, hours_name_array));
    $("#title-min").html(declOfNum(minutes, min_name_array));
    $("#title-sec").html(declOfNum(seconds, sec_name_array));

}

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}