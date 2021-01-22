const getCurrentTime = () => {
    const today: any = new Date();
    const date: any = `${today.getFullYear()}-${today.getMonth()}-${today.getDate}`
    const time: any = `${today.getHours}:${today.getMinutes()}:${today.getSeconds()}`
    const dateTime: any = `${date} ${time}`
    return dateTime
}

export default getCurrentTime