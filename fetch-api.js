// console.log(window)

// API Website Link: http://www.icndb.com/api/

document.getElementById('get-data').addEventListener('click', getData);

function getData() {
  fetch('http://api.icndb.com/jokes/random')
    .then((res) => {
      console.log(res.json());
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data.value.joke;
    })
    .then((v) => {
      console.log(v);
    })
    .catch((err) => {
      console.log(err);
    });
}


