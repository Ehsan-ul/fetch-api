// console.log(window)

// API Website Link: http://www.icndb.com/api/

document.getElementById('get-data').addEventListener('click', getData);

function getData() {
  fetch('http://api.icndb.com/jokes/random')
    // signle return e {} bracket deya lage nah
    .then(res => res.json())
    .then(data => { console.log(data); })
    .catch(err => { console.log(err); });
}
