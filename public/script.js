// toggle menu
    var small_menu = document.querySelector('.toggle_menu')
        var menu = document.querySelector('.menu')
        small_menu.onclick = function(){
            small_menu.classList.toggle('active')
            menu.classList.toggle('responsive')
        }





        // validation de mots de passe

        var passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length < 8) {
        passwordInput.setCustomValidity('Le mot de passe doit contenir au moins 8 caractères.');
    } else if (!/\d/.test(passwordInput.value)) {
        passwordInput.setCustomValidity('Le mot de passe doit contenir au moins un chiffre.');
    } else if (!/[a-z]/.test(passwordInput.value)) {
        passwordInput.setCustomValidity('Le mot de passe doit contenir au moins une lettre minuscule.');
    } else if (!/[A-Z]/.test(passwordInput.value)) {
        passwordInput.setCustomValidity('Le mot de passe doit contenir au moins une lettre majuscule.');
    } else if (!/[\W_]/.test(passwordInput.value)) {
        passwordInput.setCustomValidity('Le mot de passe doit contenir au moins un caractère spécial.');
    } else {
        passwordInput.setCustomValidity('');
    }
});



// numéro de téléphone 8 chiffres
var phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function() {
    var phoneNumber = phoneInput.value.replace(/\D/g, ''); // Retire tous les caractères non numériques
    if (phoneNumber.length !== 8) {
        phoneInput.setCustomValidity('Le numéro de téléphone doit comporter exactement 8 chiffres.');
    } else {
        phoneInput.setCustomValidity('');
    }
});


