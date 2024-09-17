document.addEventListener("DOMContentLoaded", () => {
  var manual_search_lineal = document.getElementById("manual_search_lineal");
  var manual_search_binari = document.getElementById("manual_search_binari");
  var search_teori_lineal = document.getElementById("search_teori_lineal");
  var search_teori_binary = document.getElementById("search_teori_binary");

  manual_search_lineal.addEventListener("click", () => {
    window.location.href = "busqueda_lineal";
  });
  manual_search_binari.addEventListener("click", () => {
    window.location.href = "busqueda_binaria";
  });
  search_teori_lineal.addEventListener("click", () => {
    window.location.href = "busqueda_lineal_teori";
  });
  search_teori_binary.addEventListener("click", () => {
    window.location.href = "busqueda_binaria_teori";
  });
});
