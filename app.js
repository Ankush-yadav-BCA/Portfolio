let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");
//to change tab of about section
for(let tablink of tabLinks){
    tablink.addEventListener("click",()=>{
        for(let cont of tabContents){
            cont.classList.remove("active-tab");
        }
        for(let link of tabLinks){
            link.classList.remove("active-link");
        }
        tablink.classList.add("active-link");
        let id = tablink.getAttribute("id");
        let newid = id.replace('-tab','');
        let content = document.getElementById(newid);
        content.classList.add("active-tab");
    })
}

let crossSign = document.querySelector(".menu-hide");
let menuBar = document.querySelector(".menu-bar");
let sideMenu = document.querySelector(".side-menu");
//to show menu bar
menuBar.addEventListener("click",()=>{
    sideMenu.classList.add("show-menu");
})
//to hide menu bar
crossSign.addEventListener("click",()=>{
    sideMenu.classList.remove("show-menu");
})

//to link form to Google-sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycby3zgfMRnDjum62GjrVVC1QKubM01P_Px-zPmlih05yEq92uUwvs2lYeAxPjQkslfb1Cg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector("#msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= " Massage sent successfully.!"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })