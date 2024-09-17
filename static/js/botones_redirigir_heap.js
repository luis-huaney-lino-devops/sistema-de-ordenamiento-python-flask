document.addEventListener("DOMContentLoaded", () => {
    var subir_doc_heap = document.getElementById("subir_doc_heap");
    var aleatori_heap = document.getElementById("aleatori_heap");
    var manual_heap = document.getElementById("manual_heap");
    var lista_archiv_heap = document.getElementById(
      "lista_archiv_heap"
    );
    var heap_teori = document.getElementById("heap_teori");
  
    subir_doc_heap.addEventListener("click", () => {
      window.location.href = "heap_archi";
    });
    aleatori_heap.addEventListener("click", () => {
      window.location.href = "heap_gen_ale";
    });
    manual_heap.addEventListener("click", () => {
      window.location.href = "heap_manual";
    });
    lista_archiv_heap.addEventListener("click", () => {
      window.location.href = "archivos_heap_sort";
    });
    heap_teori.addEventListener("click", () => {
      window.location.href = "heap_teori";
    });
  });