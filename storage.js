(function () { 
    let buttons = document.querySelectorAll('.container__seat');

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        let btnId = `seat-${i}`;

        if (localStorage.getItem(btnId) === 'true') {
            button.classList.add('active');
            button.setAttribute('title', "Booked");
        }

        button.addEventListener('click', () => {
            button.classList.toggle('active');
            let state = button.classList.contains('active');
            localStorage.setItem(btnId, '' + state);
            if (state) {
                button.setAttribute('title', "Booked");
            } else {
                button.setAttribute('title', "Available");
            }
        });
    }
    

    let movieForm = document.getElementById('movie');
    let dateForm = document.getElementById('date');
    let hourForm = document.getElementById('hour');

    if (!localStorage.getItem('movie')) {
        saveData();
    }

    loadData();
    
    movieForm.onchange = saveData;
    dateForm.onchange = saveData;
    hourForm.onchange = saveData;


    function saveData() {
        localStorage.setItem('movie', movieForm.value);
        localStorage.setItem('date', dateForm.value);
        localStorage.setItem('hour', hourForm.value);
    }

    function loadData() {
        let currentMovie = localStorage.getItem('movie');
        let currentDate = localStorage.getItem('date');
        let currentHour = localStorage.getItem('hour');

        movieForm.value = currentMovie;
        dateForm.value = currentDate;
        hourForm.value = currentHour;
    }
})();
