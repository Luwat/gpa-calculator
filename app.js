const form = document.querySelector('.form')
const addCourseBtn = document.querySelector('.submit')


const appendDiv = (e) => {
    
    if (e.target.matches('.submit')) {
        const formGroup = document.createElement('div')
        const labelCourse = document.createElement('label')
        const inputCourse = document.createElement('input')
        const labelGP = document.createElement('label')
        const select = document.createElement('select')
        const optionA = document.createElement('option')
        const optionChoose = document.createElement('option')
        const optionB = document.createElement('option')
        const optionC = document.createElement('option')
        const optionD = document.createElement('option')
        const optionE = document.createElement('option')
        const optionF = document.createElement('option')
        const labelCU = document.createElement('label')
        const inputCU = document.createElement('input')
        formGroup.classList.add('form-group')
        labelCourse.innerText = 'Course code/title: '
        inputCourse.setAttribute('placeholder', 'Course Code/Title')
        labelGP.innerText = 'Grade Points: '
        optionChoose.innerText = 'Choose Grade Point'
        select.append(optionChoose)
        select.append(optionA)
        select.append(optionB)
        select.append(optionC)
        select.append(optionD)
        select.append(optionE)
        select.append(optionF)
        formGroup.append(labelCourse)
        formGroup.append(inputCourse)
        formGroup.append(labelGP)
        formGroup.append(select)
          
        form.append(formGroup)
    }
};

addCourseBtn.addEventListener('click', appendDiv)