document.addEventListener("DOMContentLoaded", () => {
  var subir_doc_selection = document.getElementById("subir_doc_selection");
  var aleatori_selection = document.getElementById("aleatori_selection");
  var manual_selection = document.getElementById("manual_selection");
  var lista_archiv_selection = document.getElementById(
    "lista_archiv_selection"
  );
  var selection_teori = document.getElementById("selection_teori");

  subir_doc_selection.addEventListener("click", () => {
    window.location.href = "selection_archi";
  });
  aleatori_selection.addEventListener("click", () => {
    window.location.href = "selection_gen_ale";
  });
  manual_selection.addEventListener("click", () => {
    window.location.href = "selection_manual";
  });

  lista_archiv_selection.addEventListener("click", () => {
    window.location.href = "archivos_selection_sort";
  });
  selection_teori.addEventListener("click", () => {
    window.location.href = "selection_teori";
  });
});
