function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Déclaration élements du dom
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBgMerci = document.querySelector('.bground-modal-merci')
const btnSubmit = document.querySelector('.btn-submit')
const formulaire = document.getElementById('formulaire');
const first = document.getElementById("first");
const last = document.getElementById("last");
const champEmail = document.getElementById('email');
const champdate = document.getElementById('birthdate')
const champQuantity = document.getElementById('quantity')
const errorFirst = document.querySelector('.error_first')
const errorLast = document.querySelector('.error_last')
const errorEmail = document.querySelector('.error_email')
const errorDate = document.querySelector('.error_date')
const errorQuantity = document.querySelector('.error_quantity')
const checkbBox2Label = document.querySelector('.checkbox2-label')
const checkBox1 = document.querySelector('.checkbox1')
const errorCheckBox1 = document.querySelector('.error_checkbox1')
const close = document.querySelector('.close');
const closeModalMerci = document.querySelector('.close-modal-merci')
const btnMerci = document.querySelector('.btn-merci')
const bgroundModalForm_Merci = document.querySelector('.bground-modal-merci')
// Test VALEUR
console.log();
// launch modal event
// Fait apparaître le formulaire au click sur tout les *btn*
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
// Fait passer le modalBg --> .bground en display block
function launchModal() {
  modalbg.style.display = "block";
}
// Close the BGround 
close.addEventListener('click', () => {
  console.log('close');
  // alert('Etes vous sur') /**Message teste */
  modalbg.style.display = "none"
  modalBgMerci.style.display = "none"
})
//   ******* Début de validation du fromulaire + RegExp **********
  // Écoute de l'événement *First* au changement de focus
first.addEventListener('change', function() {
  validFirst01(this)
})
// Fonction *validfirst* --> RegExp + message liée à la RegExp + message de verification log
function validFirst01(inputFirst) {
  let msgFirst; //Déclaration de *msgFirst*
  errorFirst.innerHTML = msgFirst; // contenu des différant msgFirst injecter dans errorFirst
  console.log(inputFirst.value);
  validFirst = false; //validFirst *false natif*
  // **** début RegExp ****
  if (!/[a-z]/g.test(inputFirst.value)) {
    console.log('Champ first minu');
    msgFirst = "Il manque une miniscules  !"
  } else if (/[0-9]/g.test(inputFirst.value)) {
    console.log('Champ first chiffre');
    msgFirst = "Ne doit pas contenir de chiffre"
  } else if (!/[A-Z]/g.test(inputFirst.value)) {
    console.log('Champ first maj');
    msgFirst = "Il manque une majuscule"
  } else if( inputFirst.value.length < 3 ) {
    console.log("champ first vide");
    msgFirst = "Veuillez mettre plus de 2 lettres contenant des lettres miniscules et majuscules !"
  } else {
    console.log('regExp First ok');
    validFirst = true //Quand validFirst *True* déclanche la dernier condition pour la validation du champ
    errorFirst.innerHTML = "Good"
  }
  // Validation + ajout des classes et message d'erreur
  if (validFirst == true) {
    console.log("validFirst ok");
    errorFirst.innerHTML = ""
    first.classList.remove("modal-shadow-invalid")
    errorFirst.classList.remove("ajoutError")
    first.classList.add("modal-shadow-valid")
    return true
 } else {
  console.log("validFirst nok");
  errorFirst.innerHTML = msgFirst
  first.classList.remove("modal-shadow-valid")
  first.classList.add("modal-shadow-invalid")
  errorFirst.classList.add("ajoutError")
 }
}
// Event chang de last + Message d'erreur
last.addEventListener('change', function() {
validLast01(this)
})
  // Fonction *validLast* --> RegExp + message liée à la RegExp + message de verification log
  function validLast01(inputLast) {
  let msgLast; //Déclaration de *msgLast*
  errorLast.innerHTML = msgLast; // contenu des différant msgLast injecter dans errorLast
  console.log(inputLast.value);
  validLast = false; //validLast *false natif*
  //       **** Début RegExp ****
  if (!/[a-z]/g.test(inputLast.value)) {
  console.log('Champ last minu');
  msgLast = "Il manque une miniscules  !"
  } else if (/[0-9]/g.test(inputLast.value)) {
  console.log('Champ last chiffre');
  msgLast = "Ne doit pas contenir de chiffre"
  } else if( inputLast.value.length < 3 ) {
  console.log("champ last vide");
  msgLast = "Veuillez mettre plus de 2 lettres contenant des lettres miniscules et majuscules !"
  } else {
  console.log('regExp Last ok');
  validLast = true //Quand validLast *True* déclanche la dernier condition pour la validation du champ
  msgLast = ""
  }
  // Validation + ajout des classes et message d'erreur
  if (validLast == true) {
  console.log("validLast ok");
  errorLast.innerHTML = ""
  last.classList.remove("modal-shadow-invalid")
  errorLast.classList.remove("ajoutError")
  last.classList.add("modal-shadow-valid")
  return true
  } else {
  console.log("validLast nok");
  errorLast.innerHTML = msgLast
  last.classList.remove("modal-shadow-valid")
  last.classList.add("modal-shadow-invalid")
  errorLast.classList.add("ajoutError")
  return false
  }
}
// Événement sur le formulaire ! Bloc l'envoi du formulaire if = true / else = false
formulaire.addEventListener('submit', function(e) {
  e.preventDefault()
  if (validLast01(last) && validFirst01(first)) {
    console.log("form champ First/Last");
    modalBgMerci.style.display = "block"
    modalbg.style.display = "none"
  } else {
    console.log("form champ First/Last nok");
    alert("Formulaire non valide")
  }
})
// Événement sur le *btnMerci* ! Envoie le formulaire et ferme la modalMerci
btnMerci.addEventListener('click', function (){
formulaire.submit()
modalBgMerci.style.display = "none"
})
// Événement *btnMerci* ferme la modalMerci
closeModalMerci.addEventListener('click', () =>{
  console.log("close merci");
  formulaire.submit()
  modalBgMerci.style.display = "none"
})

// Fonction pour les champ *Email* *Date* *Quantité* et *Ville*
function form5() {
//Evenement de ChampEmail Validation --> Ajout et suppression de classe
champEmail.addEventListener('input', () => {
  if(champEmail.validity.valid){
    console.log("Good validation champ Email");
    champEmail.classList.remove('modal-shadow-invalid')
    champEmail.classList.add('modal-shadow-valid')
    errorEmail.innerHTML = ""
  } else {
    console.log("Email incorrecte");
    champEmail.classList.remove('modal-shadow-valid')
    champEmail.classList.add('modal-shadow-invalid')
    errorEmail.innerHTML = "Champ Email incorrecte"
    errorEmail.classList.add('ajoutError')
  }
})
//Evenement de ChampDate Validation --> Ajout et suppression de classe
console.log(champdate.value);

champdate.addEventListener('click', () => {
  if (champdate.validity.valid == true) {
    console.log("Good Date");
    console.log(champdate.validity.valid);
    errorDate.innerHTML = ""
    champdate.classList.remove('modal-shadow-invalid')
    champdate.classList.add('modal-shadow-valid')
  } else {
    console.log('Bad date');   
    console.log(champdate.validity.valid);
    errorDate.innerHTML = " Date non communiquer ou non correct !! ";
    champdate.classList.remove('modal-shadow-valid')
    champdate.classList.add('modal-shadow-invalid')
    errorDate.classList.add('ajoutError')
  }
})
//Evenement de ChampQuantity Validation --> Ajout et suppression de classe
champQuantity.addEventListener('invalid', () => {
  if (champQuantity.value === '') {
    console.log('NO quantity');
    errorQuantity.innerHTML = " Aucune donnée entrée ! "
    champQuantity.classList.remove('modal-shadow-valid')
    champQuantity.classList.add('modal-shadow-invalid')
    errorQuantity.classList.add('ajoutError')
  } else {
    console.log('Quantity OK');
    errorQuantity.innerHTML = ""
    champQuantity.classList.remove('modal-shadow-invalid')
    champQuantity.classList.add('modal-shadow-valid')
  }
});//Evenement de ChampQuantity Validation --> Ajout et suppression de classe
champQuantity.addEventListener('input', () => {
  if( champQuantity.validity.valid) {
    console.log("Quantity Ok");
    errorQuantity.innerHTML = ""
    champQuantity.classList.remove('modal-shadow-invalid')
    champQuantity.classList.add('modal-shadow-valid')
  }
})
}
// Fonction pour condition d'utilisation 
const  condition = document.getElementById('checkbox1')
const cocher055 = document.querySelector("input[value = 'cocher055']")
condition.addEventListener('click', () => {
  console.log(cocher055.checked);
  if (cocher055.checked) {
    console.log("Case des conditions cocher");
    errorCheckBox1.innerHTML = ""
  } else {
    errorCheckBox1.innerHTML = " Vous n'avez pas chocher la case des conditions"
    errorCheckBox1.classList.add('ajoutError')
  }
})
//Evenement au click du bouton envoyer pour le formulaire
formulaire.addEventListener('click', form5)


