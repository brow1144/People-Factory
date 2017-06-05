const personForm = document.querySelector('#personForm')

function handleSubmit(e) {
    e.preventDefault()
    const f = e.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + 's favorite color is ' + f.colorName.value
    /*const color = document.getElementById('colorLabel')
    color.className = 'cool-stuff'*/
    document.body.style.backgroundColor = f.colorName.value;
}

personForm.addEventListener('submit', handleSubmit)











