function fetchDogs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl).then(res => res.json()).then(showDogs);
  }
  
  function showDogs (dogs){
    let dogDiv = document.querySelector('#dog-image-container');
    dogs.message.forEach(dogURL => {
      dogDiv.innerHTML += `
        <img src="${dogURL}"><br>
      `
    })
  }
  
  function fetchAllDogs(filter = "") {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then(res => res.json()).then(breeds => {showBreeds(breeds, filter)});
  }
  
  function showBreeds  (breeds, filter) {
    ul = document.querySelector('#dog-breeds');
    if (filter === "") {
      for(const breed in breeds.message) {
      ul.innerHTML += `
        <li id="${breed}">${breed}</li>
      `
    }} else {
      ul.innerHTML = ''
      for(const breed in breeds.message) {
        if (breed[0] === filter) {
          ul.innerHTML += `
            <li id="${breed}">${breed}</li>
          `
        }
      }
    }
  }
  
  function changeBreedColor (e){
    if (e.target.tagName === 'LI') {
      e.target.style.color = "Blue"
    }
  }
  
  const filterBreeds = e => {
    let filter = e.target.value;
    fetchAllDogs(filter);
  }
console.log('%c HI', 'color: firebrick')
