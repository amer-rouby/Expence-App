// handle fucse error
export let titleInput = document.getElementById("title");
export let expence = document.getElementById("expence");
export let reseivedAmount = document.getElementById("reseived-amount");
export let autherInput = document.getElementById("auther");
export let submit = document.getElementById("submit");
export let resetAllData = document.getElementById("reset-all");
export let totalExpence = document.getElementById("total-expence");
export let expenceBody = document.getElementById("expense-body");

//the handle error
export let titleError = document.getElementById("error-title");
export let errorTotal = document.getElementById("error-total-sum");
export let errorReseived = document.getElementById("error-reseived-amount");
export let autherError = document.getElementById("error-auther");

export const valedationInFucse = () => {
  titleInput.addEventListener("focus", () => {
    titleError.style.display = "none";
  });
  expence.addEventListener("focus", () => {
    errorTotal.style.display = "none";
  });
  reseivedAmount.addEventListener("focus", () => {
    errorReseived.style.display = "none";
  });

  autherInput.addEventListener("focus", () => {
    autherError.style.display = "none";
  });
};

////////

export function resetForm() {
  titleInput.value = "";
  expence.value = "";
  reseivedAmount.value = "";

  autherInput.value = "";
}
