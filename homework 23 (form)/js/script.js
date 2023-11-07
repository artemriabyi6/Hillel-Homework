form.addEventListener('submit', () => {
  event.preventDefault()
  const form = document.querySelector('#form')
  const userName = document.querySelector('#username')
  const birthdayData = document.querySelector('#birthdaydata')
  const gender = document.querySelector('input[name = "gender"]:checked').value;
  const city = document.querySelector('#city')
  const adress = document.querySelector('#adress')
  var languages = [];
  var languageCheckboxes = form.querySelectorAll('input[name="languages"]:checked');
  for (var i = 0; i < languageCheckboxes.length; i++) {
    languages.push(languageCheckboxes[i].value);
  }

  const title = document.querySelector('h2')
  title.textContent = 'Registration result'

  const p1 = document.querySelector('#form1')
  p1.textContent = `Username: ${userName.value}`

  const p2 = document.querySelector('#form2')
  p2.textContent = `Birth of data: ${birthdayData.value}`

  const p3 = document.querySelector('#form3')
  p3.textContent = `Gender: ${gender}`

  const p4 = document.querySelector('#form4')
  p4.textContent = `City: ${city.value}`

  const p5 = document.querySelector('#form5')
  p5.textContent = `Adress: ${adress.value}`

  const p6 = document.querySelector('#form6')
  p6.textContent = `Languages: ${languages.join(", ")}`
})



// const form = document.querySelector('#form')
// const genderRadios = document.getElementsByName("gender");
// console.log(genderRadios)
// // const userName = document.querySelector('#username')
// // const birthdayData = document.querySelector('#birthdaydata')
// // const city = document.querySelector('#city')
// // const adress = document.querySelector('#adress')
// // const p1 = document.querySelector('#form1')
// // const p2 = document.querySelector('#form2')
// const p3 = document.querySelector('#form3')
// // const p4 = document.querySelector('#form4')
// // const p5 = document.querySelector('#form5')
// // const p6 = document.querySelector('#form6')

// let chekedGender 

// genderRadios.addEventListener('click', (e) => chekedGender =  e.target.value)
  
//   // Додаємо обробник події change для кожної радіокнопки
// //   for (let i = 0; i < genderRadios.length; i++) {
// //     genderRadios[i].addEventListener("change", handleRadioChange);
// //   }
// form.addEventListener('submit', event => {
//     event.preventDefault()
//    console.log(chekedGender)
// })


//  window.addEventListener('submit', () => {
//      event.preventDefault()
//      p1.textContent = `Username: ${userName.value}`
//      p2.textContent = `birth of date: ${birthdayData.value}`
//       p3.textContent = `Gender: ${gender}`
//      p4.textContent = `City: ${city.value}`
//      p5.textContent = `adress: ${adress.value}`
//      p6.textContent = `Languages: ${userName.value}`
//      })


    //  document.addEventListener('click', e => {
    //     if(e.target.tagName === 'A') {
    //        console.log('hello')
    //        e.preventDefault()
    //        route(e)
    //     }
    //     e.preventDefault()
    //     console.log(e.target)
    // })
    
    // const route = (e) => {
    //     window.history.pushState({}, '', e.target.href)
    //     handleLocation()
    // }
    
    
    // const routers = {
    //     '/': 'index.html',
    //     '/submit': 'submit.html'
    // }

    // const handleLocation = async () => {
    //     const path = window.location.pathname
    //     const html = await fetch(routers[path]).then(data => data.text())
    //     document.querySelector('.container').innerHTML = html
    // }

    // window.route = route

    
    // const form = document.getElementById("registrationForm");
    // form.addEventListener('submit', function (event){
    //     event.preventDefault();
    //     const firstName = document.getElementById("first_name").value;
    //     const lastName = document.getElementById("last_name").value;
    //     const birthDate = document.getElementById("birthdate").value;
        
    //     const city = document.getElementById("city").value;
    //     const address = document.getElementById("address").value;
    //     let languages = [];
    //     const languageCheckboxes = document.querySelectorAll('input[name="languages[]"]:checked');
    
    //     for (let i = 0; i < languageCheckboxes.length; i++) {
    //         languages.push(languageCheckboxes[i].value);
    //     }
    
    //     const table = document.createElement('table');
    //     const tbody = document.createElement('tbody');
    
    
    //     const data = [
    //         { label: "First Name: ", value: firstName },
    //         { label: "Last Name: ", value: lastName },
    //         { label: "Date of Birth: ", value: birthDate },
    //         { label: "Gender: ", value: gender },
    //         { label: "City: ", value: city },
    //         { label: "Address: ", value: address },
    //         { label: "Languages: ", value: languages.join(", ") },
    //     ];
    
    //     data.forEach(function (item) {
    //         const row = tbody.insertRow();
    //         const cell1 = row.insertCell(0);
    //         const cell2 = row.insertCell(1);
    //         cell1.textContent = item.label;
    //         cell2.textContent = item.value;
    //     });
    
    //     table.appendChild(tbody);
    
    //     const userDataDiv = document.getElementById('userData');
    //     userDataDiv.innerHTML = '';
    
    //     userDataDiv.appendChild(table);
    // });