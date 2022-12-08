// Choix et affichage des Tabs

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
        pokeballs();
    }
    if (event.target.classList.contains('battleItems')) {
        battleItems();
    }
    if (event.target.classList.contains('medicines')) {
        medicine();
    }
    if (event.target.classList.contains('TMs')) {
        TMs();
    }
    if (event.target.classList.contains('logo')) {
        News();
    }
});

// Fonctions pour afficher les elements du container

function pokeballs() {
    document.querySelector('.container').innerHTML = `<div class="banner">
    <div class="slider-container bg-primary">
      <span><img class="xmaspikachu" src="assets/img/pokeball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/greatball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/ultraball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/healball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/diveball.png" alt=""></span>        
      
      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/duskball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/netball.png" alt=""></span>        
      
      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/luxuryball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/pokeball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/greatball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/ultraball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/healball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/diveball.png" alt=""></span>        
      
      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/duskball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/netball.png" alt=""></span>        
      
      <span class="h5"> POKEBALLS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/luxuryball.png" alt=""></span>

      <span class="h5"> POKEBALLS CATEGORY </span>
    </div>
  </div>`;
    
    let itemContainer = document.createElement('div');
    itemContainer.className = "thomas";
    itemContainer = document.querySelector('.container').appendChild(itemContainer);

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
                anchor.innerHTML = '<div class="card-body" id=' + id + '>';

                if (category == 'Pokeballs') {

                    anchor.className = 'card card' + id + ' cardthomas text-center';
                    anchor = document.querySelector('.thomas').appendChild(anchor);

                    let cardId = document.getElementById(id);

                    let cardImg = document.createElement('img');
                    cardImg.src = 'assets/img/' + image + '';
                    cardImg.alt = name;
                    cardImg.className = "cardImg"
                    cardImg = cardId.appendChild(cardImg);

                    let cardName = document.createElement('p');
                    cardName.textContent = name;
                    cardName.className = "card-title";
                    cardName = cardId.appendChild(cardName);

                    let cardOverview = document.createElement('p');
                    cardOverview.textContent = overview;
                    cardOverview.className = "card-text"
                    cardOverview = cardId.appendChild(cardOverview);

                    let cardInput = document.createElement('input');
                    cardInput.placeholder = 'Quantity';
                    cardInput.minLength = 1;
                    cardInput.maxLength = 2;
                    cardInput = cardId.appendChild(cardInput);

                    let cardAdd = document.createElement('button');
                    cardAdd.dataset.name = name;
                    cardAdd.dataset.image = image;
                    cardAdd.dataset.price = price;
                    cardAdd.className = 'btn btn-primary add';
                    cardAdd.type = 'button';
                    cardAdd.textContent = "Add";
                    cardAdd = cardId.appendChild(cardAdd);

                    let cardPrice = document.createElement('div');
                    cardPrice.textContent = price + '¥';
                    cardPrice.className = "card-footer"
                    cardPrice = document.querySelector('.card' + id + '').appendChild(cardPrice);
                }
            });
        });
};


function battleItems() {
    document.querySelector('.container').innerHTML = `<div class="banner">
    <div class="slider-container bg-secondary">
      <span><img class="xmaspikachu" src="assets/img/direhit.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/guardspec.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xaccuracy.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xattack.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xdefense.png" alt=""></span>        
      
      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xsp.atk.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xsp.def.png" alt=""></span>        
      
      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xspeed.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/direhit.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/guardspec.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xaccuracy.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xattack.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xdefense.png" alt=""></span>        
      
      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xsp.atk.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xsp.def.png" alt=""></span>        
      
      <span class="h5"> BATTLE ITEMS CATEGORY </span>
      <span><img class="xmaspikachu" src="assets/img/xspeed.png" alt=""></span>

      <span class="h5"> BATTLE ITEMS CATEGORY </span>
    </div>
  </div>`;

    let itemContainer = document.createElement('div');
    itemContainer.className = "thomas";
    itemContainer = document.querySelector('.container').appendChild(itemContainer);

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
                anchor.innerHTML = '<div class="card-body" id=' + id + '>';

                if (category == 'Battle items') {

                    anchor.className = 'card card' + id + ' cardthomas text-center';
                    anchor = document.querySelector('.thomas').appendChild(anchor);

                    let cardId = document.getElementById(id);

                    let cardImg = document.createElement('img');
                    cardImg.src = 'assets/img/' + image + '';
                    cardImg.alt = name;
                    cardImg.className = "cardImg"
                    cardImg = cardId.appendChild(cardImg);

                    let cardName = document.createElement('p');
                    cardName.textContent = name;
                    cardName.className = "card-title";
                    cardName = cardId.appendChild(cardName);

                    let cardOverview = document.createElement('p');
                    cardOverview.textContent = overview;
                    cardOverview.className = "card-text"
                    cardOverview = cardId.appendChild(cardOverview);

                    let cardInput = document.createElement('input');
                    cardInput.placeholder = 'Quantity';
                    cardInput.minLength = 1;
                    cardInput.maxLength = 2;
                    cardInput = cardId.appendChild(cardInput);

                    let cardAdd = document.createElement('button');
                    cardAdd.dataset.name = name;
                    cardAdd.dataset.image = image;
                    cardAdd.dataset.price = price;
                    cardAdd.className = 'btn btn-primary add';
                    cardAdd.type = 'button';
                    cardAdd.textContent = "Add";
                    cardAdd = cardId.appendChild(cardAdd);

                    let cardPrice = document.createElement('div');
                    cardPrice.textContent = price + '¥';
                    cardPrice.className = "card-footer"
                    cardPrice = document.querySelector('.card' + id + '').appendChild(cardPrice);
                }
            });
        });
};

function medicine() {
    document.querySelector('.container').innerHTML = `<div class="banner">
    <div class="slider-container bg-success">
    <span><img class="xmaspikachu" src="assets/img/antidote.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/awakening.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/bunrheal.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/iceheal.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/fullrestore.png" alt=""></span>        
    
    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/potion.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/superpotion.png" alt=""></span>        
    
    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/hyperpotion.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/maxpotion.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/ether.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/maxether.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/elixir.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/maxelixir.png" alt=""></span>        
    
    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/revive.png" alt=""></span>

    <span class="h5"> MEDICINE CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/maxrevive.png" alt=""></span>        

    <span class="h5"> MEDICINE CATEGORY </span>

    </div>
  </div>`;

    let itemContainer = document.createElement('div');
    itemContainer.className = "thomas";
    itemContainer = document.querySelector('.container').appendChild(itemContainer);

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
                anchor.innerHTML = '<div class="card-body" id=' + id + '>';

                if (category == 'Medicine') {

                    anchor.className = 'card card' + id + ' cardthomas text-center';
                    anchor = document.querySelector('.thomas').appendChild(anchor);

                    let cardId = document.getElementById(id);

                    let cardImg = document.createElement('img');
                    cardImg.src = 'assets/img/' + image + '';
                    cardImg.alt = name;
                    cardImg.className = "cardImg"
                    cardImg = cardId.appendChild(cardImg);

                    let cardName = document.createElement('p');
                    cardName.textContent = name;
                    cardName.className = "card-title";
                    cardName = cardId.appendChild(cardName);

                    let cardOverview = document.createElement('p');
                    cardOverview.textContent = overview;
                    cardOverview.className = "card-text"
                    cardOverview = cardId.appendChild(cardOverview);

                    let cardInput = document.createElement('input');
                    cardInput.placeholder = 'Quantity';
                    cardInput.minLength = 1;
                    cardInput.maxLength = 2;
                    cardInput = cardId.appendChild(cardInput);

                    let cardAdd = document.createElement('button');
                    cardAdd.dataset.name = name;
                    cardAdd.dataset.image = image;
                    cardAdd.dataset.price = price;
                    cardAdd.className = 'btn btn-primary add';
                    cardAdd.type = 'button';
                    cardAdd.textContent = "Add";
                    cardAdd = cardId.appendChild(cardAdd);

                    let cardPrice = document.createElement('div');
                    cardPrice.textContent = price + '¥';
                    cardPrice.className = "card-footer"
                    cardPrice = document.querySelector('.card' + id + '').appendChild(cardPrice);
                }
            });
        });
};

function TMs() {
    document.querySelector('.container').innerHTML = `<div class="banner">
    <div class="slider-container bg-info">
    <span><img class="xmaspikachu" src="assets/img/tmdragon.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmelectric.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmfairy.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmfire.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmflying.png" alt=""></span>        
    
    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmgrass.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmice.png" alt=""></span>        
    
    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmpoison.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmwater.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmdragon.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmelectric.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmfairy.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmfire.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmflying.png" alt=""></span>        
    
    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmgrass.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmice.png" alt=""></span>        
    
    <span class="h5"> TMS CATEGORY </span>
    <span><img class="xmaspikachu" src="assets/img/tmpoison.png" alt=""></span>

    <span class="h5"> TMS CATEGORY </span>
    

    </div>
  </div>`;

    let itemContainer = document.createElement('div');
    itemContainer.className = "thomas";
    itemContainer = document.querySelector('.container').appendChild(itemContainer);

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
                anchor.innerHTML = '<div class="card-body" id=' + id + '>';

                if (category == 'TMs') {

                    anchor.className = 'card card' + id + ' cardthomas text-center';
                    anchor = document.querySelector('.thomas').appendChild(anchor);

                    let cardId = document.getElementById(id);

                    let cardImg = document.createElement('img');
                    cardImg.src = 'assets/img/' + image + '';
                    cardImg.alt = name;
                    cardImg.className = "cardImg1"
                    cardImg = cardId.appendChild(cardImg);

                    let cardName = document.createElement('p');
                    cardName.textContent = name;
                    cardName.className = "card-title";
                    cardName = cardId.appendChild(cardName);

                    let cardOverview = document.createElement('p');
                    cardOverview.textContent = overview;
                    cardOverview.className = "card-text"
                    cardOverview = cardId.appendChild(cardOverview);

                    let cardInput = document.createElement('input');
                    cardInput.placeholder = 'Quantity';
                    cardInput.minLength = 1;
                    cardInput.maxLength = 2;
                    cardInput = cardId.appendChild(cardInput);

                    let cardAdd = document.createElement('button');
                    cardAdd.dataset.name = name;
                    cardAdd.dataset.image = image;
                    cardAdd.dataset.price = price;
                    cardAdd.className = 'btn btn-primary add';
                    cardAdd.type = 'button';
                    cardAdd.textContent = "Add";
                    cardAdd = cardId.appendChild(cardAdd);

                    let cardPrice = document.createElement('div');
                    cardPrice.textContent = price + '¥';
                    cardPrice.className = "card-footer"
                    cardPrice = document.querySelector('.card' + id + '').appendChild(cardPrice);
                }
            });
        });
};

function News() {
    document.querySelector('.container').innerHTML = "";
}

// UX

let regex = /^[1-9]{1}[0-9]{0,1}$/;

// window.addEventListener('keydown', element => {
//     if ((element.key === 'Enter')) {
//         if (regex.test(element.target.value)) {
//             let quantity = element.target.value;
//             let id = element.target.parentNode.id;
//             element.target.value = "";
//         } 
//         else {
//             console.log("Veuillez saisir un élément valide");
//             // message.textContent = "Veuillez saisir un élément valide";
//         };
//     };
// });


window.addEventListener('click', element => {
    if ((element.target.classList.contains('add'))) {
        if (regex.test(element.target.previousSibling.value)) {

            let id = element.target.parentNode.id;
            let quantity = element.target.previousSibling.value;

            let modal = document.querySelector('.modal-body');
            let modalLine = document.createElement('li');
            modalLine.innerHTML = `
            <div><img class="cartItem" src="assets/img/${element.target.dataset.image}"/></div><div class="h5 text">${element.target.dataset.name}</div>${element.target.dataset.price}¥<div>x${quantity}</div><button type="button" class="btn"><img class="Editer" src="https://img.icons8.com/color-glass/38/null/edit--v1.png"/></button><button type="button" class="btn"><img class="Supprimer" src="https://img.icons8.com/fluency/38/null/delete-forever.png"/></button></li>`;
            modalLine = modal.appendChild(modalLine);

            const toastLiveExample = document.getElementById('liveToast')
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()

            document.querySelector('#ShoppingCart').src = "assets/img/panier-fill.png"
        }
        else {
            console.log("Veuillez saisir un élément valide");
            const toastLiveExample = document.getElementById('liveToast1')
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
            // message.textContent = "Veuillez saisir un élément valide";
        };
    };
});



// const toastTrigger = document.getElementById('liveToastBtn')
//     const toastLiveExample = document.getElementById('liveToast')
//     if (toastTrigger) {
//       toastTrigger.addEventListener('click', () => {
//         const toast = new bootstrap.Toast(toastLiveExample)

//         toast.show()
//       })
//     }

