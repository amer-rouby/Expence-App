function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

document.getElementById("close-alert").addEventListener("click", closePopup);
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

document.getElementById("delet-alert").addEventListener("click", deleteItem);

function deleteItem() {
  closePopup();
  // قم بتنفيذ الإجراءات الخاصة بحذف العنصر هنا
  alert("تم حذف العنصر!");
  // قم بإغلاق النافذة منبثقة بعد حذف العنصر
}
