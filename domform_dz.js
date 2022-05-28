let inp = document.querySelectorAll('.inp')
// let btn = document.querySelector('.button')


let form = document.forms.register
let inputs = form.querySelectorAll('input')

// regex


let pattern = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    // password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/,
    phone: /(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})/g,
    age: /^\S[0-9]{0,3}$/,
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    mom: /^[a-z ,.'-]+$/i,
    pap: /^[a-z ,.'-]+$/i,
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}

inp.forEach(inp => {
    inp.onkeyup = () => {
        validate(inp, pattern[inp.name])
    }
});


form.onsubmit = event => {
    event.preventDefault()
    let arr = []

    inp.forEach(inp => {
        if (inp.classList.contains('invalid') || inp.value.length === 0) {
            inp.classList.add('invalid')

            let label = inp.nextSibling.nextSibling.nextSibling.nextSibling
            let element = inp.nextSibling.nextSibling
            element.style.display = 'block'

            label.innerHTML = `please enter ur ${inp.name}`
            label.style.color = "red"
        }
    })
}


function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
}