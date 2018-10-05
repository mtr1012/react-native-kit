// show time ago
import moment from 'moment';
import _ from 'lodash';

const MIN_IN_MILIS = 60 * 1000;
const HOUR_IN_MILIS = 60 * MIN_IN_MILIS;
const DAY_IN_MILIS = 24 * HOUR_IN_MILIS;
const MONTH_IN_MILIS = 30 * DAY_IN_MILIS;
const YEAR_IN_MILIS = 365 * DAY_IN_MILIS;

const SIMPLE_DATE_FORMAT = 'DD MMM YY';
const SIMPLE_TIME_24_FORMAT = 'H:mm';
const STOP_TIME_FORMAT = 'mM:ss:SS';
const DOB_FORMAT = 'DD MMM YY';
const SIMPLE_DATE_TIME_FORMAT = 'H:mm DD MMM YY';
const DATE_TIME_FORMAT = 'DD MMM YY HH:mm';
const HALF_OF_DAY = 12 * 60 * 60 * 1000;
//29 May 16


export default {
  simpleDateFormat: (timeInMillis) =>{
    let date = new Date(timeInMillis);
    return date ? moment(date).format(SIMPLE_DATE_FORMAT) : '';
  },

  timeAgo: (timeInMilis) => {
    const date = new Date();
    const diff = date.getTime() - timeInMilis;

    if (diff >= YEAR_IN_MILIS) {
      const noOfYear = Math.round(diff / YEAR_IN_MILIS);
      return noOfYear > 1 ? `${noOfYear} years ago` : `${noOfYear} year ago`;
    }
    if (diff >= MONTH_IN_MILIS) {
      const noOfMonth = Math.round(diff / MONTH_IN_MILIS);
      return noOfMonth > 1 ? `${noOfMonth} months ago` : `${noOfMonth} month ago`;
    }
    if (diff >= DAY_IN_MILIS) {
      const noOfDay = Math.round(diff / DAY_IN_MILIS);
      return noOfDay > 1 ? `${noOfDay} days ago` : `${noOfDay} day ago`;
    }
    if (diff >= HOUR_IN_MILIS) {
      const noOfHour = Math.round(diff / HOUR_IN_MILIS);
      return noOfHour > 1 ? `${noOfHour} hours ago` : `${noOfHour} hour ago`;
    }
    if (diff >= MIN_IN_MILIS) {
      const noOfMin = Math.round(diff / MIN_IN_MILIS);
      return noOfMin > 1 ? `${noOfMin} minutes ago` : `${noOfMin} minute ago`;
    }
    return 'just now';
  },

  timeToHHMMSS: (timeMilis) => {
    let hours = Math.floor(timeMilis / 3600);
    let minutes = Math.floor((timeMilis - (hours * 3600)) / 60);
    let seconds = Math.floor(timeMilis - (hours * 3600) - (minutes * 60));

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    // return hours + ':' + minutes + ':' + seconds;
    if (hours > 0) {
      return `${hours}:${minutes}:${seconds}`;
    }
    return `${minutes}:${seconds}`;
  },

  timeToHHMM: (timeMilis) => {
    let date = new Date(timeMilis);
    return moment(date).format(SIMPLE_TIME_24_FORMAT);
  },

  timeToDDDMMMYY: (timeMilis) => {
    let date = new Date(timeMilis);
    let a = moment();
    let b = moment(timeMilis);
    let diff = a.diff(b, 'days');
    if (diff === 0) {
      return moment(date).format('hh:mm');
    }
    if (diff === 1) {
      return 'yesterday';
    }
    return moment(date).format('ddd DD MMM YY');
  },

  timeTodddDDMMMYY: (timeMilis) => {
    let date = new Date(timeMilis);
    return moment(date).format('ddd DD MMM YY');
  },

  timeTodddDDMMM: (timeMilis) => {
    let date = new Date(timeMilis);
    return moment(date).format('ddd DD MMM');
  },

  timeDob: (timeMilis) => {
    if (timeMilis == null) {
      return moment(0).format('DD MMM YY');
    }
    if (timeMilis < 0) {
      return moment(0).add(100, 'year').add(timeMilis, 'ms').format('DD MMM YY');
    }
    return moment(timeMilis).format('DD MMM YY');
  },


  dateWithFormat: (date, format) => {
    return moment(date).format(format);
  },

  getDiffYears: (firstDay, lastDay) => {
    let a = moment(firstDay);
    let b = moment(lastDay);
    return a.diff(b, 'years');
  },

  getDiffDays: (firstDay, lastDay) => {
    let a = moment(firstDay).startOf('day');;
    let b = moment(lastDay).startOf('day');;
    return a.diff(b, 'days');
  },

  getStartOfDay: (timeMilis) => {
    var start = new Date(timeMilis);
    start.setHours(0, 0, 0, 0);
    return start.getTime();
  },

  getEndOfDay: (timeMilis) => {
    var end = new Date(timeMilis);
    end.setHours(23, 59, 59, 999);
    return end.getTime();
  },

  simpleDateTimeFormat: (timeInMillis) => {
    let date = new Date(timeInMillis);
    return date ? moment(date).format(SIMPLE_DATE_TIME_FORMAT) : '';
  },

  toTimeFromMinute: (minutes) => {
    const formattedHours = ('0' + Math.floor(minutes / 60)).slice(-2);
    const formattedMinutes = ('0' + Math.floor(minutes % 60)).slice(-2);
    return formattedHours + ':' + formattedMinutes;
  },

  getTotalMinuteFromStartOfDay: (timeInMillis) => {
    const date = new Date(timeInMillis);
    return getMinutesFromStartOfDay(date.getHours(), date.getMinutes());
  },

  getMinutesFromStartOfDay: (hourOfDay, minute) => {
    return hourOfDay * 60 + minute;
  },
  roundMiliToMinute: (milisecconds) => {
    return 60000 * Math.round(milisecconds / 60000)
  },

  mediaTimeTitle: () => {
    return moment().format('DD MMM YY');
  },

  getMiliSecondInDay: () => {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var mi = now.getMilliseconds();
    return h * HOUR_IN_MILIS + m * MIN_IN_MILIS + s * 1000 + mi
  }
};
