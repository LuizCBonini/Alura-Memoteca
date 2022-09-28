import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'dev',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('Criado meu chapa!')
  }

  cancelarPensamento() {
    alert('Cancela sa por!')
  }

}