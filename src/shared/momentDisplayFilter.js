import moment from 'moment';

export default function (ms) {

    return moment(ms).format("dddd, MMMM D, YYYY");

}