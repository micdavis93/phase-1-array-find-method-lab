function superbowlWin(record) {
    const result = record.find(record => record.result === "W");
    result === "W" ? record.year : "";
}