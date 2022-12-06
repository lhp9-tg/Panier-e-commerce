// Choix du Tab

const tabs = document.querySelectorAll('.nav-link')

window.addEventListener('click', event => {

    if (event.target.classList.contains('nav-link') || event.target.classList.contains('logo')) {
        if (event.target.classList.contains('nav-link')) { 
            event.target.classList.add('active');
            event.target.removeAttribute('href');
            tabs.forEach(element => {
                if (element != event.target) {
                    element.classList.remove('active');
                    element.setAttribute('href', '#')
                }
        });
        }
    }
    if (event.target.classList.contains('pokeballs')) {
        pokeballs ();
    }
    if (event.target.classList.contains('battleItems')) {
        battleItems ();
    }
    if (event.target.classList.contains('medicines')) {
        medicine ();
    }
    if (event.target.classList.contains('TMs')) {
        TMs ();
    }
    if (event.target.classList.contains('logo')) {
        News ();
    }
});


function pokeballs () {
    document.querySelector('.row').innerHTML = "";
    fetch('assets/json/store.json')
        .then(response => response.json())
        .then((data) => {
            let db = data;

            db.items.forEach(element => {

                let id = element.id;
                let name = element.name;
                let category = element.category;
                let image = element.image;
                let overview = element.overview;
                let price = element.price;

                let anchor = document.createElement('div');
                anchor.innerHTML = '<div class="card text-center"><div class="card-body text-center" id='+id+'></div></div>';
                anchor.className = 'col-sm-3';
                
                
                if (category == 'Pokeballs') {

                    anchor = document.querySelector('.row').appendChild(anchor);

                    document.querySelector('.banner').innerHTML = ``
                    
                    let cardId = document.getElementById(id);
                    
                    let cardImg = document.createElement('img');
                    cardImg.className = 'cardImg '
                    cardImg.src = 'assets/img/'+image+'';
                    cardImg.alt = name;
                    cardImg = cardId.appendChild(cardImg);

                    let cardName = document.createElement('p');
                    cardName.textContent = name;
                    cardName.className = 'card-title';
                    cardName = cardId.appendChild(cardName);

                    let cardOverview = document.createElement('p');
                    cardOverview.textContent = overview;
                    cardOverview.className = 'card-text';
                    cardOverview = cardId.appendChild(cardOverview);

                    let cardInput = document.createElement('input');
                    cardInput.placeholder = 'Quantité';
                    cardInput.minLength = 1;
                    cardInput.maxLength = 2;
                    cardInput = cardId.appendChild(cardInput);

                    let cardPrice = document.createElement('div');
                    cardPrice.className = 'card-footer'
                    cardPrice.textContent = price+'¥';
                    cardPrice = cardId.appendChild(cardPrice);
                }
            });
        });
};

function battleItems () {
    document.querySelector('.row').innerHTML = "";
    fetch('assets/json/store.json')
        .then(response => response.json())
        .then((data) => {
            let db = data;

            db.items.forEach(element => {

                let id = element.id;
                let name = element.name;
                let category = element.category;
                let image = element.image;
                let overview = element.overview;
                let price = element.price;

                let anchor = document.createElement('div');
                anchor.innerHTML = '<div class="card text-center"><div class="card-body text-center" id='+id+'></div></div>';
                anchor.className = 'col-sm-3';
                
                    if (category == 'Battle items') {

                        document.querySelector('.banner').innerHTML = ``

                        anchor = document.querySelector('.row').appendChild(anchor);
    
                        let cardId = document.getElementById(id);

                        let cardImg = document.createElement('img');
                    cardImg.className = 'cardImg '
                    cardImg.src = 'assets/img/'+image+'';
                    cardImg.alt = name;
                    cardImg = cardId.appendChild(cardImg);

                    let cardName = document.createElement('p');
                    cardName.textContent = name;
                    cardName.className = 'card-title';
                    cardName = cardId.appendChild(cardName);

                    let cardOverview = document.createElement('p');
                    cardOverview.textContent = overview;
                    cardOverview.className = 'card-text';
                    cardOverview = cardId.appendChild(cardOverview);

                    let cardInput = document.createElement('input');
                    cardInput.placeholder = 'Quantité';
                    cardInput.minLength = 1;
                    cardInput.maxLength = 2;
                    cardInput = cardId.appendChild(cardInput);

                    let cardPrice = document.createElement('div');
                    cardPrice.className = 'card-footer'
                    cardPrice.textContent = price+'¥';
                    cardPrice = cardId.appendChild(cardPrice);
                    }
                });
            });
    };

function medicine () {
    document.querySelector('.row').innerHTML = "";
    fetch('assets/json/store.json')
        .then(response => response.json())
        .then((data) => {
            let db = data;

            db.items.forEach(element => {

                let id = element.id;
                let name = element.name;
                let category = element.category;
                let image = element.image;
                let overview = element.overview;
                let price = element.price;

                let anchor = document.createElement('div');
                anchor.innerHTML = '<div class="card text-center"><div class="card-body text-center" id='+id+'></div></div>';
                anchor.className = 'col-sm-3';

                    if (category == 'Medicine') {
                        document.querySelector('.banner').innerHTML = ``

                        anchor = document.querySelector('.row').appendChild(anchor);
    
                        let cardId = document.getElementById(id);

                        let cardImg = document.createElement('img');
                        cardImg.className = 'cardImg '
                        cardImg.src = 'assets/img/'+image+'';
                        cardImg.alt = name;
                        cardImg = cardId.appendChild(cardImg);

                        let cardName = document.createElement('p');
                        cardName.textContent = name;
                        cardName.className = 'card-title';
                        cardName = cardId.appendChild(cardName);

                        let cardOverview = document.createElement('p');
                        cardOverview.textContent = overview;
                        cardOverview.className = 'card-text';
                        cardOverview = cardId.appendChild(cardOverview);

                        let cardInput = document.createElement('input');
                        cardInput.placeholder = 'Quantité';
                        cardInput.minLength = 1;
                        cardInput.maxLength = 2;
                        cardInput = cardId.appendChild(cardInput);

                        let cardPrice = document.createElement('div');
                        cardPrice.className = 'card-footer'
                        cardPrice.textContent = price+'¥';
                        cardPrice = cardId.appendChild(cardPrice);
                    }
                });
            });
    };

function TMs () {
    document.querySelector('.row').innerHTML = "";
    fetch('assets/json/store.json')
        .then(response => response.json())
        .then((data) => {
            let db = data;

            db.items.forEach(element => {

                let id = element.id;
                let name = element.name;
                let category = element.category;
                let image = element.image;
                let overview = element.overview;
                let price = element.price;

                let anchor = document.createElement('div');
                anchor.innerHTML = '<div class="card text-center"><div class="card-body text-center" id='+id+'></div></div>';
                anchor.className = 'col-sm-3';

                if (category == 'TMs') {
                    document.querySelector('.banner').innerHTML = ``

                    anchor = document.querySelector('.row').appendChild(anchor);

                    let cardId = document.getElementById(id);

                    let cardImg = document.createElement('img');
                    cardImg.className = 'cardImg '
                    cardImg.src = 'assets/img/'+image+'';
                    cardImg.alt = name;
                    cardImg = cardId.appendChild(cardImg);

                    let cardName = document.createElement('p');
                    cardName.textContent = name;
                    cardName.className = 'card-title';
                    cardName = cardId.appendChild(cardName);

                    let cardOverview = document.createElement('p');
                    cardOverview.textContent = overview;
                    cardOverview.className = 'card-text';
                    cardOverview = cardId.appendChild(cardOverview);

                    let cardInput = document.createElement('input');
                    cardInput.placeholder = 'Quantité';
                    cardInput.minLength = 1;
                    cardInput.maxLength = 2;
                    cardInput = cardId.appendChild(cardInput);

                    let cardPrice = document.createElement('div');
                    cardPrice.className = 'card-footer'
                    cardPrice.textContent = price+'¥';
                    cardPrice = cardId.appendChild(cardPrice);
                }
                });
            });
    };




//     console.log(document.querySelector(element).classList != 'active');
//     if (document.querySelector(element).classList != 'active') {
//         document.querySelector('.tab').id = 'landing';
//     }



//     // document.querySelector(element).addEventListener('click', () => {
//     //     if (element.classList != 'active') {
//     //         element. = 'active';

//     //     }
//     // });
// });




// UX

// let regex = /^[1-9]{1}[0-9]{0,1}$/;

// window.addEventListener('keydown', element => {
//     if ((element.key === 'Enter')) {
//         if (regex.test(element.target.value)) {
//             console.log('hello')
//             quantity = element.target.value;
//             console.log(quantity);
            










//         } 
//         else {
//             message.textContent = "Veuillez saisir un élément valide";
//         };
//     };
// });

// Modal