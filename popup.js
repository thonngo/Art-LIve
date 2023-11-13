const form=document.querySelector(".form")
const btnOpenForm=document.getElementById("open")

const popup=document.querySelector(".popup")
const btnOpenPopup=document.getElementById("form")

const btnClose=document.querySelector(".close");


btnOpenForm.addEventListener('click', function() {
    // e.preventDefault()
    form.classList.add("active");
    console.log('jjjj')
    return false
});

btnOpenPopup.addEventListener('click', function(e) {
    // e.preventDefault()
    console.log('nnn')
    form.classList.remove("active");
    popup.classList.add("active");
    return false
});

btnClose.addEventListener('click', function(e) {
    // e.preventDefault()
    console.log('kkk')
    form ? form.classList.remove("active") : popup.classList.remove("active");
    return false
});









