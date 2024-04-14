const getTimeStamps = () => {
    const timeStamps = [];
    for (let i = 0; i <= 16; i++) {
        let time = (i + 8) % 13
        time = time == 0 ? 12:time
        timeStamps.push(`${time}:00 ${i+8 < 12 ? 'AM':'PM'}`)
        timeStamps.push(`${time}:30 ${i+8 < 12 ? 'AM':'PM'}`)
    }
    return timeStamps
}

export default getTimeStamps