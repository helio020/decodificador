let textElement = document.getElementById("text");
let image = document.getElementById("image");
let subtitle = document.getElementById("subtitle");
let paragraph = document.getElementById("paragraph");
let generatedText = document.getElementById("generated-text");
let btnCopy = document.getElementById("btn-copy");

function validateString(string) {
  let containsUpperCase = /[A-Z]/.test(string);
  let containsSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
    string
  );
  let containsNumber = /[0-9]/.test(string);

  return !(containsUpperCase || containsSpecialCharacter || containsNumber);
}

function validateAndShowError() {
  if (!validateString(textElement.value)) {
    image.style.display = "block";
    subtitle.style.display = "block";
    paragraph.style.display = "block";
    generatedText.style.display = "none";
    btnCopy.style.display = "none";

    subtitle.innerHTML = "Error";
    subtitle.style.color = "red";
    paragraph.innerHTML = "Apenas letras minúsculas e sem acento.";
  }
}

function btnEncryptOnClick() {
  let text = textElement.value;
  text = text.replaceAll(/e/gi, "enter");
  text = text.replaceAll(/i/gi, "imes");
  text = text.replaceAll(/a/gi, "ai");
  text = text.replaceAll(/o/gi, "ober");
  text = text.replaceAll(/u/gi, "ufat");
  image.style.display = "none";
  subtitle.style.display = "none";
  paragraph.style.display = "none";
  generatedText.innerHTML = text;
  generatedText.style.display = "block";
  btnCopy.style.display = "flex";

  validateAndShowError();
}

function btnDecryptOnClick() {
  let text = textElement.value;
  text = text.replaceAll(/enter/gi, "e");
  text = text.replaceAll(/imes/gi, "i");
  text = text.replaceAll(/ai/gi, "a");
  text = text.replaceAll(/ober/gi, "o");
  text = text.replaceAll(/ufat/gi, "u");
  image.style.display = "none";
  subtitle.style.display = "none";
  paragraph.style.display = "none";
  generatedText.innerHTML = text;
  generatedText.style.display = "block";
  btnCopy.style.display = "flex";

  validateAndShowError();
}

async function btnCopyOnClick() {
  let text = generatedText.innerHTML;
  await navigator.clipboard.writeText(text);
}
