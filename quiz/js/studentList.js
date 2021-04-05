

const displayStudentList = function (students){
    const listElement = document.createElement("div");
    listElement.classList.add("students");
    let randomStudents = students.sort(() => Math.random() - 0.5)
    randomStudents.forEach(student =>{
        let studentButton = document.createElement("button");
        studentButton.classList.add("student")
        studentButton.innerText = student
        listElement.appendChild(studentButton)
    })
    return listElement;
}

export{
    displayStudentList
}

