// // 1. Sukurti JSON failą, kuriame bus patalpintas filmų sąrašas (mažiausiai 10 filmų).
// 2. Kiekvienas filmas turės šias savybes (naudotis IMDb):
// 2.1. Pavadinimą.
// 2.2. Įvertinimą ir įvertinimų kiekį.
// 2.3. Išleidimo metus.
// 2.4. Trumpą aprašymą.
// 2.5. Žanrų sąrašą.
// 2.6. Režisierius.
// 2.7. Pagrindiniai aktoriai.
// Reikes i6 json failo formato padaryti diva kuriame bus kiekvieno objekto informacija.

// fetch(`obj.json`)
//  .then(response => response.json())
//  .then(data => {
//   console.log(data)
//   console.log(data.name)
//   console.log(data.age)
//  })

 fetch('obj.json')
 .then(response => response.json())
 .then(data => {
  // console.log(data.name)
  data.forEach(object=>{
    //select main container, create div item
  let mainContainer = document.querySelector('.main-container')
  let divItem = document.createElement('div')
  divItem.style.border = 'solid'

  //name
  let name = document.createElement('p')
  name.innerHTML = `<strong>Name:</strong> ${object.name}`

  let rating = document.createElement('p')
  rating.innerHTML = `<strong>Rating:  </strong> <strong>Stars:</strong> ${object.rating[0]} <strong>Rates:</strong> ${object.rating[1]}`


  //Išleidimo data
  let realease = document.createElement('p')
  realease.innerHTML = `<strong>Realease date:</strong> ${object.released}`

  // Trumpą aprašymą.
  let description = document.createElement('p')
  description.innerHTML = `<strong>Description:</strong> ${object.description}`

  // Žanrų sąrašą.
  let ganresUl = document.createElement('ul')
  let ganresUlName = document.createElement('p')
  ganresUlName.innerHTML = `<strong>Ganres: </strong>`

  object.ganres.forEach(item=>{
    let ganresLi = document.createElement('li')
    ganresLi.textContent = item
    ganresUl.append(ganresLi)
    divItem.append(ganresUl)
  })

  let director = document.createElement('p')
  director.innerHTML = `<strong>Director: </strong>${object.director}`

  // Pagrindiniai aktoriai.
  let actorsUl = document.createElement('ul')
  let actorsUlName = document.createElement('p')
  actorsUlName.innerHTML = `<strong>Actors: </strong>`

  object.actors.forEach(item=>{
    let actorsLi = document.createElement('li')
    actorsLi.textContent = item
    actorsUl.append(actorsLi)
    divItem.append(actorsUl)
  })

  divItem.append(name, rating, realease, description, ganresUlName, ganresUl, director, actorsUlName, actorsUl)
  mainContainer.append(divItem)
})
 })
