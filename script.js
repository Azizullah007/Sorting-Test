let counter = 1;
let data = [];
function AddDetails(){
  var button = document.getElementById('button');
  button.addEventListener('click', SaveDetails, false);
  let sortBy = document.getElementById('sortBy');
  sortBy.addEventListener('change', SortAndDisplay, false);
  document.getElementById('userID').value = counter;
}
function SortAndDisplay(){
  let sortBy = document.getElementById('sortBy').value;
  if(sortBy === "userID"){
    data.sort(function (a, b) {
      return a.id - b.id;
    });
  }
  else{
    sortByNameOrOccupation(sortBy);
  }
  displayAfterSort();
  
  
}
function SaveDetails(){


  let name = document.getElementById('userName');
  let occupation = document.getElementById('userOccupation');
  data.push({id: counter, name: name.value, occupation: occupation.value });
  counter++;
  document.getElementById('userID').value = counter;
  name.value='';
  occupation.value ='';

  let outputSection  = document.getElementById('output');
  let outputData = data[data.length - 1];
  let newP = document.createElement('p');
  newP.textContent = outputData['id'] + " " + outputData['name'] + "  "+outputData['occupation'];
  outputSection.appendChild(newP);


}

function sortByNameOrOccupation(attribute){
  data.sort(function(a, b) {
    var nameA = a[attribute].toUpperCase();
    var nameB = b[attribute].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
}

function displayAfterSort(){
  let outputSection  = document.getElementById('output');
  outputSection.innerHTML = '';
  let fragment = document.createDocumentFragment();
  data.forEach(function(d) {
      let p = document.createElement('p');
      p.textContent = d['id'] + "  " + d['name'] + "  "+d['occupation'];
      fragment.appendChild(p);
  });
  outputSection.appendChild(fragment);

}


window.addEventListener('load', AddDetails, false);