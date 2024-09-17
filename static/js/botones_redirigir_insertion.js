document.addEventListener("DOMContentLoaded", () => {
  var subir_doc_insertion = document.getElementById("subir_doc_insertion");
  var aleatori_insertion = document.getElementById("aleatori_insertion");
  var manual_insertion = document.getElementById("manual_insertion");
  var lista_archiv_insertion = document.getElementById(
    "lista_archiv_insertion"
  );
  var insertion_teori = document.getElementById("insertion_teori");

  subir_doc_insertion.addEventListener("click", () => {
    window.location.href = "insertion_archi";
  });
  aleatori_insertion.addEventListener("click", () => {
    window.location.href = "insertion_gen_ale";
  });
  manual_insertion.addEventListener("click", () => {
    window.location.href = "insertion_manual";
  });

  lista_archiv_insertion.addEventListener("click", () => {
    window.location.href = "archivos_insertion_sort";
  });
  insertion_teori.addEventListener("click", () => {
    window.location.href = "insertion_teori";
  });
});
