const personForm = document.querySelector('#personForm')

function handleSubmit(e) {
    e.preventDefault()
    const f = e.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value

}

personForm.addEventListener('submit', handleSubmit)











