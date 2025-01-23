// 4---------- print filtered students ----------
function printFilteredStudents(filteredStudents){
    document.getElementsByTagName(`table`)[0].style.display = `block`;
    for (i = 0; i < filteredStudents.length; i++){
        let newTr = document.createElement('tr');
        document.getElementsByTagName(`tbody`)[0].appendChild(newTr);

        let tdFirstName = document.createElement('td');
        tdFirstName.innerText = filteredStudents[i].firstName

        let tdLastName = document.createElement('td');
        tdLastName.innerText = filteredStudents[i].lastName

        let tdCity = document.createElement('td');
        tdCity.innerText = filteredStudents[i].city

        let tdAge = document.createElement('td');
        tdAge.innerText = filteredStudents[i].age

        let tdGender = document.createElement('td');
        tdGender.innerText = filteredStudents[i].gender

        let tdAvgGrade = document.createElement('td');
        tdAvgGrade.innerText = filteredStudents[i].averageGrade

        newTr.append(tdFirstName, tdLastName, tdCity, tdAge, tdGender, tdAvgGrade); 
    }
}

// 3------- filter all students ---------
function filterStudents(students, filter){
    sortedStudents = students.sort((a, b) => a.firstName.localeCompare(b.firstName));
    if (filter === "firstFilter") {
        filteredStudents = sortedStudents.filter((element) => {
            if (element.averageGrade > 3) {
                return element
            }
        });
    }else if (filter === "secondFilter") {
        filteredStudents = sortedStudents.filter((element) => {
            if ((element.averageGrade === 5)&&(element.gender === "Female")) {
                return element
            }
        });
    }else if (filter === "thirdFilter") {
        filteredStudents = sortedStudents.filter((element) => {
            if ((element.city === "Skopje")&&(element.gender === "Male")&&(element.age > 18)) {
                return element
            }
        });
    }else if (filter === "fourthFilter") {
        filteredStudents = sortedStudents.filter((element) => {
            if ((element.age > 24)&&(element.gender === "Female")) {
                return element
            }
        });
    }else if (filter === "fifthFilter") {
        filteredStudents = sortedStudents.filter((element) => {
            if ((element.firstName[0] === "B")&&(element.gender === "Male")&&(element.averageGrade > 2)) {
                return element
            }
        });
    }else {
        filteredStudents = sortedStudents;
    }
    printFilteredStudents(filteredStudents);
}

// 2----- API call and get the list of students --------
function getAllStudents (filter) {
    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
    .then((response) => response.json())
    .then((students) => {
        console.log(students)
        filterStudents(students, filter);
    })
};

// 1----------- select filter -------------
let filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector('table tbody').replaceChildren();
    filter = document.getElementById("filter").value
    console.log(filter);
    getAllStudents(filter)
})

