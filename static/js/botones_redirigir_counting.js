document.addEventListener("DOMContentLoaded", () => {
  var subir_doc_counting = document.getElementById("subir_doc_counting");
  var aleatori_counting = document.getElementById("aleatori_counting");
  var manual_counting = document.getElementById("manual_counting");
  var lista_archiv_counting = document.getElementById(
    "lista_archiv_counting"
  );
  var counting_teori = document.getElementById("counting_teori");

  subir_doc_counting.addEventListener("click", () => {
    window.location.href = "counting_archi";
  });
  aleatori_counting.addEventListener("click", () => {
    window.location.href = "counting_gen_ale";
  });
  manual_counting.addEventListener("click", () => {
    window.location.href = "counting_manual";
  });
  lista_archiv_counting.addEventListener("click", () => {
    window.location.href = "archivos_counting_sort";
  });
  counting_teori.addEventListener("click", () => {
    window.location.href = "counting_teori";
  });
});