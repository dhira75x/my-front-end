const convertDateStringToTime = (date) => {

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    const time = `${formattedHours}:${formattedMinutes}`;

    return time;
}

export default convertDateStringToTime