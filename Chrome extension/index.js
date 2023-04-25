
// To store urls in array format

myLeads = [];


// getting input element by thier id

const inputEL = document.getElementById("input-btn");
const inputBtn = document.getElementById("save-btn");
const ulEL = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete-btn");

let tabBtn = document.getElementById("tab-btn");

// getting urls that stored in localstorage 
let leadlocalStorage = JSON.parse(localStorage.getItem("myLeads"));


// adding new event to input field

inputBtn.addEventListener("click", function () {

  myLeads.push(inputEL.value);

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  inputEL.value = "";
  
  render(myLeads);

});


// func that returns url in input tag

function render(arg) {

  let listItems = "";

  for (let i = 0; i < arg.length; i++) {
    listItems += `<li>
            <a target="_blank" href="${arg[i]}">
                ${arg[i]}
            </a>
        </li>`;
  }

  ulEL.innerHTML = listItems;

}



// delete event to clear all the urls 

deleteEl.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// const tabs=[
//   {url:"www.google.com"}
// ]
// tab event to store chrome window  current tab details.

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      render(myLeads)
     
    })
      
 
})



// if urls present in the localStorage it returns if we reload the page.

if (leadlocalStorage) {
  myLeads = leadlocalStorage;
  render(myLeads);
}
