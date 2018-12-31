let total = Number(0);
let count = 0;

let map1 = {
    "str5" : 0,
    "str4" : 0,
    "str3" : 0,
    "str2" : 0,
    "str1" : 0,
};

function addFive(){
    total += 5;
    count += 1;
    map1["str5"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    myChart.data.datasets[0].data[4]=map1['str5'];
    myChart.update();
}

function addFour(){
    total += 4;
    count += 1;
    map1["str4"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    myChart.data.datasets[0].data[3]=map1['str4'];
    myChart.update();
}

function addThree(){
    total += 3;
    count += 1;
    map1["str3"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    myChart.data.datasets[0].data[2]=map1['str3'];
    myChart.update();
}

function addTwo(){
    total += 2;
    count += 1;
    map1["str2"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    myChart.data.datasets[0].data[1]=map1['str2'];
    myChart.update();
}

function addOne(){
    total += 1;
    count += 1;
    map1["str1"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    myChart.data.datasets[0].data[0]=map1['str1'];
    myChart.update();
}

function average() {
    let average = total / count;
    return average.toFixed(2);
}

