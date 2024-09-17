document.addEventListener("DOMContentLoaded", () => {
    var subir_doc_radix = document.getElementById("subir_doc_radix");
    var aleatori_radix = document.getElementById("aleatori_radix");
    var manual_radix = document.getElementById("manual_radix");
    var lista_archiv_radix = document.getElementById(
      "lista_archiv_radix"
    );
    var radix_teori = document.getElementById("radix_teori");
  
    subir_doc_radix.addEventListener("click", () => {
      window.location.href = "radix_archi";
    });
    aleatori_radix.addEventListener("click", () => {
      window.location.href = "radix_gen_ale";
    });
    manual_radix.addEventListener("click", () => {
      window.location.href = "radix_manual";
    });
    lista_archiv_radix.addEventListener("click", () => {
      window.location.href = "archivos_radix_sort";
    });
    radix_teori.addEventListener("click", () => {
      window.location.href = "radix_teori";
    });
  });