const form = document.querySelector('.form')
const addCourseBtn = document.querySelector('.submit')
const formGroup = document.createElement('div')
const labelCourse = document.createElement('label')
const inputCourse = document.createElement('input')
const labelGP = document.createElement('label')
const select = document.createElement('select')
const optionA = document.createElement('option')
const optionB = document.createElement('option')
const optionC = document.createElement('option')
const optionD = document.createElement('option')
const optionE = document.createElement('option')
const optionF = document.createElement('option')
const labelCU = document.createElement('label')
const inputCU = document.createElement('input')
labelCourse.textContent = 'Course code/title:'
inputCourse.setAttribute('placeholder', 'Course Code/Title')

const appendDiv = () => {
    form.append(formGroup)
    formGroup.append(labelCourse)
    formGroup.append(inputCourse)
    formGroup;
};

// console.log(appendDiv())
addCourseBtn.addEventListener('click', appendDiv)