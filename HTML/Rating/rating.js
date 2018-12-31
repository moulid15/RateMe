let total = Number(0);
let count = 0;

let map1 = {
    "str5" : 34,
    "str4" : 70,
    "str3" : 80,
    "str2" : 10,
    "str1" : 8,
};

function addFive(){
    total += 5;
    count += 1;
    map1["str5"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();

}

function addFour(){
    total += 4;
    count += 1;
    map1["str4"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();

}

function addThree(){
    total += 3;
    count += 1;
    map1["str3"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();

}

function addTwo(){
    total += 2;
    count += 1;
    map1["str2"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();

}

function addOne(){
    total += 1;
    count += 1;
    map1["str1"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();

}

function average(){
    let average = total / count;
    return average.toFixed(2);
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}