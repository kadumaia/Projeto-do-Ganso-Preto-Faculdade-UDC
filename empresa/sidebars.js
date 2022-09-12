/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

function pesquisar(textoInput) {
  if (window.find(textoInput)) {
      console.log(window.find(textoInput));
  }
}

var contateme = document.getElementById('contate-me')
var contateme = document.getElementById('contate-me')

contateme.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})