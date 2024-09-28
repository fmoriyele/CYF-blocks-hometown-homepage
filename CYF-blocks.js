var places, click_count;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


places = ['place 1', 'place 2', 'place 3'];
click_count = 0;

if (false) {
}


document.getElementById('list-button').addEventListener('click', (event) => {
  if (click_count < 3) {
    places.push(document.getElementById('text').value);
    places.shift();
    click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  }
  if (click_count == 3) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = places;

    element_list.appendChild(new_li);
    let element_random_place = document.getElementById('random-place');
    element_random_place.innerText = randomMember(places);
    click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  }

});

document.getElementById('reset-button').addEventListener('click', (event) => {
  while (!(click_count == 0)) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    places.shift();
    click_count = (typeof click_count === 'number' ? click_count : 0) + -1;
  }
  if (click_count == 0) {
    places = ['place 1', 'place 2', 'place 3'];
    let element_random_place2 = document.getElementById('random-place');
    element_random_place2.innerText = '___';
  }

});