document.addEventListener("DOMContentLoaded", () => {
    var subir_doc_merge = document.getElementById("subir_doc_merge");
    var aleatori_merge = document.getElementById("aleatori_merge");
    var manual_merge = document.getElementById("manual_merge");
    var lista_archiv_merge = document.getElementById(
      "lista_archiv_merge"
    );
    var merge_teori = document.getElementById("merge_teori");
  
    subir_doc_merge.addEventListener("click", () => {
      window.location.href = "merge_archi";
    });
    aleatori_merge.addEventListener("click", () => {
      window.location.href = "merge_gen_ale";
    });
    manual_merge.addEventListener("click", () => {
      window.location.href = "merge_manual";
    });
  
    lista_archiv_merge.addEventListener("click", () => {
      window.location.href = "archivos_merge_sort";
    });
    merge_teori.addEventListener("click", () => {
      window.location.href = "merge_teori";
    });
  });