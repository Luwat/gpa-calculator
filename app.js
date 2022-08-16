const form = document.querySelector('.form')
const addCourseBtn = document.querySelector('.submit')
// const formGroup = document.createElement('div')
// const labelCourse = document.createElement('label')
// const inputCourse = document.createElement('input')
// const labelGP = document.createElement('label')
// const select = document.createElement('select')
// const optionA = document.createElement('option')
// const optionB = document.createElement('option')
// const optionC = document.createElement('option')
// const optionD = document.createElement('option')
// const optionE = document.createElement('option')
// const optionF = document.createElement('option')
// const labelCU = document.createElement('label')
// const inputCU = document.createElement('input')
// labelCourse.textContent = 'Course code/title:'
// inputCourse.setAttribute('placeholder', 'Course Code/Title')

const appendDiv = () => {
    form.innerHTML += `
        <div class="form-group">
            <label for="course-code">Course code/title:</label>
            <input type="text" name="" placeholder="Course Code/Title">
            <label for="grade-points">Grade Points:</label>
            <select name="gp" >
                <option value="">Choose Grade point</option>
                <option value="5">A</option>
                <option value="4">B</option>
                <option value="3">C</option>
                <option value="2">D</option>
                <option value="1">E</option>
                <option value="0">F</option>
            </select>
            <label for="credit-unit">Credit Unit</label>
            <input type="text" name="cu" placeholder="Credit Unit">
        </div>`;
};

addCourseBtn.addEventListener('click', appendDiv)