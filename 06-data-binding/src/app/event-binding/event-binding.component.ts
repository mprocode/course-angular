import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  nomeBotao : String = "Meu botao";
  i: number = 0;

  
  btnEnabled: Boolean = true;
  spinnerVisible: Boolean = false;
  spinnerMode: String = 'determinate';

  selectDisabled: Boolean;
  opcaoSelecionada: Number = 1;


  nome: String = '';

  constructor() { }

  ngOnInit() {
  }

  salvar() {
    console.log("Aqui");
  }

  incrementar() {
    this.i++;
    this.nomeBotao = "Meu Botao foi clicado " + this.i + " vezes.";
  }

  // Passo 2
  desabilitar() {
    this.btnEnabled = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(()=> {
      this.btnEnabled=true;
      this.spinnerMode = 'determinate';
    }, 3000);
  }

  // Passo 3
  cbChange(event) {
    console.log(event);
    this.selectDisabled = event.checked;
  }
  
  selectionChange(event) {
    console.log(event);
    this.opcaoSelecionada = event.value;
  }

  // Passo 4
  inputEvent(event) {
    console.log(event);
  }

}
