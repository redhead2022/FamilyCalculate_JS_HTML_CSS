const members = document.querySelector(".people");

const buttonOne = document.querySelector("#btn");
buttonOne.addEventListener("click", (e) => {
        e.preventDefault();
        const holidays = +document.querySelector(".holidays").value;
        const stydying = +document.querySelector(".stydying").value;
        const sport = +document.querySelector(".sport").value;
        const beauty = +document.querySelector(".beauty").value;
        const clothes = +document.querySelector(".clothes").value;
        const health = +document.querySelector(".health").value;
        const family = +document.querySelector(".family").value;
        const food = +document.querySelector(".food").value;
        const people = members.value;
        
        if (holidays === "" || stydying === "" || sport === "" || beauty === "" || clothes === "" || health === "" || family === "" || food === "") {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Заполни, пожалуйста, графу!',
              });
    
              return false;
        }
    
        if (holidays < 1 || stydying < 1 || sport < 1 || beauty < 1 || clothes < 1 || health < 1 || family < 1 || food < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Заполни, пожалуйста, графу!',
              });
    
              return false;
        }
    
        if (isNaN(holidays) || isNaN(stydying) || isNaN(sport) || isNaN(beauty) || isNaN(clothes) || isNaN(health) || isNaN(family) || isNaN(food)) {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Нужно ввести число!',
              });
    
              return false;
    }
    
        let totalSum = holidays + stydying + sport + beauty + clothes + health + family + food;
        let lengthCategory = document.querySelectorAll("#category");
        let length = lengthCategory.length;
        let totalCategory = totalSum / length;
        let monthPerson = totalSum * (1 / people);
    
        totalSum = totalSum.toFixed(2);
        totalCategory = totalCategory.toFixed(2);
        monthPerson = monthPerson.toFixed(2);
    
    
        document.querySelector("#monthFamily").textContent = totalSum;
        document.querySelector("#monthCategory").textContent = totalCategory;
        document.querySelector("#monthPerson").textContent = monthPerson;
    });

const buttonTwo = document.querySelector("#members");
buttonTwo.addEventListener("click", (e) => {
    e.preventDefault();        
    members.style.display = "block";
});