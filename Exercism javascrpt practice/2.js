let EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(num){
    return Number(EXPECTED_MINUTES_IN_OVEN) - Number(num) 
}

function preparationTimeInMinutes(numOfLayer){
    return Number(numOfLayer)*2
}

function totalTimeInMinutes(numOfLayer, actualMinutesInOven){
    return Number(numOfLayer)*2 + Number(actualMinutesInOven);
}