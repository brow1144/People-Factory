
const personForm = document.querySelector('#personForm')

function handleSubmit(e) {
    e.preventDefault()
    const f = e.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + 's favorite color is ' + f.colorName.value

    document.body.style.backgroundColor = f.colorName.value
    
    //Input was being difficult so I added a for loop to change all of them
    const inputBackground = document.getElementsByTagName('input')
    for(var i = 0; i < inputBackground.length; i++) {
        if(inputBackground[i].type == "text") {
            inputBackground[i].style.backgroundColor = f.colorName.value;
            inputBackground[i].style.borderBottom = '2px solid #585858'
        }
    }

    const button = document.getElementsByTagName('button')
    for(var i = 0; i < button.length; i++) {
        if(button[i].type == 'submit') {
            button[i].style.backgroundColor = "#585858";
        }
    }
    const paragraphDiv = document.getElementById('paragraphDiv')
    paragraphDiv.style.borderColor = "#585858"

    const emptyParagraph = document.getElementById('emptyParagraph')
    emptyParagraph.textContent = 'Wow! your favorite color is ' + f.colorName.value + 
                                 '! Thats not quiet as cool as green but I guess its alright.' +
                                 ' Could you tell that my favorite color is green by the colors on the main page?!'
    
}

personForm.addEventListener('submit', handleSubmit)











