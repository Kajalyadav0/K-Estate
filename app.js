let people = document.getElementById('people');
let people_less = document.getElementById('people_less');
let people_more = document.getElementById('people_more');

let people_index = 4;

people_less.addEventListener('click', () => {
    people_index -= 1;

if (people_index <= 0) {
    people_index = 1;
    people.value = people_index + 'People';
} else {
    people.value = people_index + ' People';
}
})

people_more.addEventListener('click', () => {
    people_index += 1;

if (people_index >= 4) {
    people_index = 4;
    people.value = people_index + 'People';
} else {
    people.value = people_index + ' People';
}
})

let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');

checkin.addEventListener('change', ()=> {
    let checkin_value = checkin_value;
    // console.log(checkin_value);

    let dates = new Date(checkin_value);
    let dates2 = new Date();
    const week = ['Sun','Mon','Tus','Wed','Thu','Fri','Sat']
    let day = week[dates.getDay()];
    // console.log(day);
    let date = checkin_value.slice(8,10);
    let months = ['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
    let month = months[dates.getMonth()];

    if(datas < dates2){
         console.log("No Date");
    }
    else{
     checkin_date.innerText = day +"," + date + " " + month;
    }
})