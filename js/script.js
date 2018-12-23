var button=document.querySelector(".search-form-button");
var modal=document.querySelector(".search-form-modal");
var form=modal.querySelector("form");
var arrival=modal.querySelector("[name=date-arrival]");
var departure=modal.querySelector("[name=date-departure]");
var adults=modal.querySelector("[name=number-of-adults]");      
var children=modal.querySelector("[name=number-of-children]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

modal.classList.add("modal-hidden");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Нажатие кнопки");
  modal.classList.remove("modal-error");
  modal.classList.toggle("modal-show");  
  arrival.focus();

  if (storageAdults || storageChildren) {
    adults.value = storageAdults;
    children.value = storageChildren;
  }
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля");          
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");        
  } else {
      if (isStorageSupport) {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
      }
    }          
});
