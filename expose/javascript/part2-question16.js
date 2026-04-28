let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (stat in statistics) {
    let value = statistics[stat];
    if (stat[0] == 'r' || value % 2 != 0) {
        console.log(value);
    }
}