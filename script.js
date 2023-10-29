const editor = document.querySelector("#editor");
const downloadButton = document.querySelector("#download");

function download() {
  // Obtiene el texto editado
  const text = editor.value;

  // Crea un nuevo archivo de texto
  const file = new File([text], "archivo.txt");

  // Descarga el archivo
  window.open(file);
}

downloadButton.addEventListener("click", download);
