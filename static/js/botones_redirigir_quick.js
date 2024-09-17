document.addEventListener("DOMContentLoaded", () => {
    var subir_doc_quick = document.getElementById("subir_doc_quick");
    var aleatori_quick = document.getElementById("aleatori_quick");
    var manual_quick = document.getElementById("manual_quick");
    var lista_archiv_quick = document.getElementById(
      "lista_archiv_quick"
    );
    var quick_teori = document.getElementById("quick_teori");
  
    subir_doc_quick.addEventListener("click", () => {
      window.location.href = "quick_archi";
    });
    aleatori_quick.addEventListener("click", () => {
      window.location.href = "quick_gen_ale";
    });
    manual_quick.addEventListener("click", () => {
      window.location.href = "quick_manual";
    });
  
    lista_archiv_quick.addEventListener("click", () => {
      window.location.href = "archivos_quick_sort";
    });
    quick_teori.addEventListener("click", () => {
      window.location.href = "quick_teori";
    });
  });