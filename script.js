const form= document.querySelector('form');
const search = document.querySelector('#search');
const faculties = document.querySelector('#students');

form.addEventListener('submit', insertStudent);
search.addEventListener('keyup', searchStudent);
faculties.addEventListener('click', removeStudent);

function insertStudent(e){
    e.preventDefault();
    
    let nim= document.querySelector('#nim');
    let nama=document.querySelector('#nama');
    let gender= document.querySelector('#gender')
    let faculty= document.querySelector('#faculty')
    let programStudy= document.querySelector('#programStudy')


    const li = document.createElement('li');
  li.className = 'list-item';

  const liText = document.createTextNode(`${nama.value}     ${nim.value}     ${gender.value}     ${faculty.value}    ${programStudy.value}`);
  li.appendChild(liText);

  console.log(li);



  let deleteLink = document.createElement('a');
  deleteLink.className = 'delete';
  deleteLink.setAttribute('href', '#students');
  deleteLink.appendChild(document.createTextNode('Delete'));

  li.appendChild(deleteLink);

  // add li element to the parent ul element
  const ul = document.querySelector('#students');
  ul.appendChild(li);

  nim.value = '';
  nama.value = '';
  gender.value = '';
  faculty.value = '';
  programStudy.value = '';
  




}

function removeStudent(event) {
    if(event.target.classList.contains('delete')) {
        alert("This Student will be removed");
        const li = event.target.parentElement;
        faculties.removeChild(li);
    }
}

function searchStudent(event) {
    let searchText = event.target.value.toLowerCase();
  
    let listOfStudents = [...document.querySelectorAll('li')];
    
    listOfStudents.forEach((nama) => {
      let studentName = nama.firstChild.textContent;
  
      if(studentName.toLowerCase().indexOf(searchText) != -1) {
        nama.style.display = 'block';
      } else {
        nama.style.display = 'none';
      }
    });
  }