import {
  valedationInFucse,
  titleInput,
  expence,
  reseivedAmount,
  autherInput,
  titleError,
  errorTotal,
  errorReseived,
  autherError,
  resetForm,
  submit,
  totalExpence,
  expenceBody,
} from "./valditon/valedationExpence";

let expenceData = [];
// the Saved locale storge
function getBookFromStorge() {
  let retrivedExpence = JSON.parse(localStorage.getItem("book"));
  if (retrivedExpence == null) {
    expenceData = [];
  } else {
    expenceData = retrivedExpence;
  }
  createExpence();
}

function storeExpence() {
  let expenceString = JSON.stringify(expenceData);
  localStorage.setItem("book", expenceString);
}
//the add new expence
let data = {};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  data = {
    title: titleInput.value,
    total: expence.value,
    reseived: reseivedAmount.value,
    remaining: expence.value - reseivedAmount.value,
    auther: autherInput.value,
    id: Math.random() * 200,
  };

  if (!validationForm()) {
    return;
  }

  createExpence();
  storeExpence();
  totalSums();
  resetForm();
});

// create expences data in body
const createExpence = () => {
  if (!expenceData || !expenceData.length) {
    expenceBody.innerHTML = "";
    return;
  }
  let content = expenceData.map(
    (item) => `<tr>
                <td class="bg-dark">${item.title}</td>
                <td class="bg-primary">${item.total}</td>
                <td class="bg-success">${item.reseived}</td>
                <td class="bg-warning">${item.remaining}</td>
                <td class="author">${item.auther}</td>
                <td id="item" name=${item.id} class="delete"> حذف</td>
                </tr>
                `
  );

  expenceBody.innerHTML = content;

  const items = document.getElementsByClassName("delete");
  Array.from(items).forEach((item) =>
    item.addEventListener("click", deleteExpence)
  );
};

function deleteExpence() {
  const id = this.getAttribute("name");
  const isDeleteItem = confirm("هل انت متاكد من حذف العنصر  ");
  if (isDeleteItem) {
    expenceData = expenceData.filter((item) => item.id != id);
    storeExpence();
    totalSums();
  }
}

valedationInFucse();
//total calc

function totalSums() {
  if (!expenceData || !expenceData.length) {
    expenceBody.innerHTML = "";
    totalExpence.innerHTML = 0 + " جنيه ";
    return;
  }
  const total = expenceData
    .map((item) => parseInt(item.total))
    .reduce((a, b) => a + b);
  totalExpence.innerHTML = total + " جنيه ";
  createExpence();
}

getBookFromStorge();
totalSums();
//valdation form inputs
export const validationForm = () => {
  if (titleInput.value == "") {
    titleError.style.display = "block";
    return false;
  }
  if (expence.value == "") {
    errorTotal.style.display = "block";
    return false;
  }
  if (reseivedAmount.value == "") {
    errorReseived.style.display = "block";
    return false;
  }
  if (autherInput.value == "") {
    autherError.style.display = "block";
    return false;
  }
  expenceData.push(data);
  return true;
};
