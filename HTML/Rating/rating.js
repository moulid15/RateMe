let total = Number(0);
let count = 0;

let map1 = {
    "str5" : 0,
    "str4" : 0,
    "str3" : 0,
    "str2" : 0,
    "str1" : 0,
};

let image_array = ['https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/199524_168411869877767_5197093_n.jpg?_nc_cat=109&_nc_ht=scontent-lga3-1.xx&oh=2d89021c93fb15f4c367365479055a82&oe=5C8D310A',
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/229039_185352478183706_3845604_n.jpg?_nc_cat=108&_nc_ht=scontent-lga3-1.xx&oh=41419d9985db4a2df5c529a1ffd61a6d&oe=5CCA9A3F',
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/377351_271192049599748_1584526575_n.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=e8806ec4974a1a53704d9d8e85e6a6bb&oe=5CB68FF6',
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/380141_290986967620256_217488573_n.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=97fb49ed583ac76ecd451bb6582cd8cc&oe=5CBD9E09',
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/395660_313539165365036_2144086540_n.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=ffef303a98423777c39cdcd3496f0861&oe=5C8D160B'];
let index_a = 0;
let index_b = 1;
let index_c = 2;
function slideShowTransition(forward) {
    let temp_array=[index_a,index_b,index_c];
    let decrement = (forward) ? 1 : -1;
    for(let i in temp_array){
        temp_array[i]+= decrement;
        if(temp_array[i] < 0){
            temp_array[i] = image_array.length-1;
        }
        if(temp_array[i] == image_array.length){
            temp_array[i] = 0;
        }
    }
    setSlideShow(temp_array[0],temp_array[1],temp_array[2]);
}

function setSlideShow(img_a, img_b,img_c){
    let img_before = document.getElementById('img_before');
    img_before.src = image_array[img_a];
    let img_now = document.getElementById('img_now');
    img_now.src = image_array[img_b];
    let img_after = document.getElementById('img_after');
    img_after.src = image_array[img_c];
}
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

function autosizeTextArea(){
    let tx = document.getElementsByTagName('textarea');
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;text-overflow: ellipsis');
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = 'auto';
        let max_height = Number(this.style.maxHeight.substring(0,this.style.maxHeight.length-2));
        this.style.height = (this.scrollHeight > max_height) ? this.style.maxHeight : this.scrollHeight + 'px';
//        this.style.height = (this.scrollHeight) + 'px';
    }
}

function showModal(){
    let modal_ele = document.getElementById('myModal');
    modal_ele.style.display = 'block';
    let body = document.body;
    body.style.overflow = 'hidden';
}

function closeModal(){
    let modal_ele = document.getElementById('myModal');
    modal_ele.style.display = 'none';
    let body = document.body;
    body.style.overflow = 'visible';
}

function setScrollLimit(){
    let profile_post_ele = document.getElementById('profile_post');
    let bio_ele = document.getElementById('bio');
    let feed_ele = document.getElementById('feed');
    profile_post_ele.style.maxHeight = bio_ele.offsetTop + feed_ele.offsetTop + 'px';
}

function onMouseProfile() {
    let select_profile = document.getElementsByClassName('select_profile');
    select_profile[0].style.display = 'block';
}

function outMouseProfile(){
    let select_profile = document.getElementsByClassName('select_profile');
    select_profile[0].style.display = 'none';
}
