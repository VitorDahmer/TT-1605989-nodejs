const overNav = document.querySelectorAll("#overviewButton")[0];
const informationNav = document.querySelectorAll("#informationButton")[0];
const supportNav = document.querySelectorAll("#supportButton")[0];
// const overDiv = document.querySelectorAll("#overview")[0];
// const informDiv = document.querySelectorAll("#information")[0];
// const supportDiv = document.querySelectorAll("#support");
const textMain1 = document.querySelectorAll("#mainText")[0];




function overviewSelect() {
    informationNav.classList.remove("atual");
    supportNav.classList.remove("atual");
    overNav.classList.add("atual");
   
}

function informationSelect(){
    overNav.classList.remove("atual");
    supportNav.classList.remove("atual");
    informationNav.classList.add("atual");
   
}

function supportSelect() {
    overNav.classList.remove("atual");
    informationNav.classList.remove("atual");
    supportNav.classList.add("atual");
    // console.log(supportDiv);
    textMain1.innerHTML="support.html";
    
};

overviewSelect();

