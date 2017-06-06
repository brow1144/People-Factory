const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  const favoriteColor = f.favoriteColor.value
  const age = f.age.value

  // const colorDiv = `
  //   <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
  // `
  
  // const boldedName = document.createElement('strong')
  // boldedName.textContent = name
  // details.appendChild(boldedName)

  
  //   details.innerHTML = `
  //     <ul>
  //       <li>Name: ${name}</li>
  //       <li>Favorite Color: ${colorDiv}</li>
  //       <li>Age: ${age}</li>
  //     </ul>
  //     `

    function addCustomList() {
        const uList = document.createElement('ul')

        const l1Item = document.createElement('li')
        l1Item.textContent = `Name: ${name}`
        
        const l2Item = document.createElement('li')
        l2Item.textContent = `Favorite Color: `
        const colorDiv = document.createElement('div')
        colorDiv.style.backgroundColor = `${favoriteColor}`
        colorDiv.style.width = '100px';
        colorDiv.style.height = '50px'
        l2Item.appendChild(colorDiv)

        const l3Item = document.createElement('li')
        l3Item.textContent = `Age: ${age}`

        uList.appendChild(l1Item)
        uList.appendChild(l2Item)
        uList.appendChild(l3Item)
        
        details.appendChild(uList)
    }

    addCustomList()
    
}

personForm.addEventListener('submit', handleSubmit)