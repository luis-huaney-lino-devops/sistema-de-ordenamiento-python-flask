document.addEventListener("DOMContentLoaded", () => {
  var subir_doc_burble = document.getElementById("subir_doc_burble");
  var aleatori_burble = document.getElementById("aleatori_burble");
  var manual_burble = document.getElementById("manual_burble");
  var lista_archiv_burble = document.getElementById("lista_archiv_burble");
  var burble_teori = document.getElementById("burble_teori");

  subir_doc_burble.addEventListener("click", () => {
    window.location.href = "burble_archi";
  });
  aleatori_burble.addEventListener("click", () => {
    window.location.href = "burble_gen_ale";
  });
  manual_burble.addEventListener("click", () => {
    window.location.href = "burble_manual";
  });

  lista_archiv_burble.addEventListener("click", () => {
    window.location.href = "archivos_burble_sort";
  });
  burble_teori.addEventListener("click", () => {
    window.location.href = "burble_teori";
  });
});
