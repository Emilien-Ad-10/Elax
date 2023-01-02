/* Sélection des classes et id's dans le document html:  */
let solution = document.getElementById("1");
let digital = document.getElementById("2");
let paris = document.getElementById("3");
let lyon = document.getElementById("4");
let email = document.getElementById("5");
let classEmail = document.getElementsByClassName("email");
let tel = document.getElementById("6");
let classTel = document.getElementsByClassName("tel");
let mobile = document.getElementById("7");
let classMobile = document.getElementsByClassName("mobile");

/* Mise en place des animations sur la page: */
setTimeout(() =>{
    solution.innerHTML = "SOLUTIONS";
    solution.style.color = `#f3a53f`;
    setTimeout(() =>{
        solution.style.color = `#f1f1f1`;
    },500)
},1000)

setTimeout(() =>{
    digital.innerHTML = "DIGITAL";
    digital.style.color = `#f3a53f`;
    setTimeout(() =>{
        digital.style.color = `#f1f1f1`;
    },500)
},1500)

setTimeout(() =>{
    paris.innerHTML = "PARIS";
    paris.style.color = `#f3a53f`;
    setTimeout(() =>{
        paris.style.color = `#f1f1f1`;
    },500)
},2000)

setTimeout(() =>{
    lyon.innerHTML = "LYON";
    lyon.style.color = `#f3a53f`;
    setTimeout(() =>{
        lyon.style.color = `#f1f1f1`;
    },500)
},2500)

setTimeout(() =>{
    email.style.color = `#f7a103`;
    classEmail[0].innerHTML = `<a class="email-contact" href="#">contact@elax.fr</a>`;
    setTimeout(() =>{
        email.style.color = `#f1f1f1`;
        email.style.fontWeight = `bold`;
    },500)
},3000)

setTimeout(() =>{
    tel.style.color = `#f7a103`;
    classTel[0].innerHTML = "(+33) 9 54 06 24 07";
    setTimeout(() =>{
        tel.style.color = `#f1f1f1`;
        tel.style.fontWeight = `bold`;
    },500)
},3500)

setTimeout(() =>{
    mobile.style.color = `#f7a103`;
    classMobile[0].innerHTML = "(+33) 6 79 71 32 98";
    setTimeout(() =>{
        mobile.style.color = `#f1f1f1`;
        mobile.style.fontWeight = `bold`;
    },500)
},4000)