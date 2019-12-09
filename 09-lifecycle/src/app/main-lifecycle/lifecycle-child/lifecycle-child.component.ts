import { Component, OnInit, Input, SimpleChanges, DoCheck } from '@angular/core';

export class Event {
  constructor (
    public id: number, 
    public name: string,
    public color: string) {}
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  colors: string[] = ["accent", "warn", "primary"]
  public events: Event[] = [];
  private nextEventId : number = 0;

  /*Chamado antes que qualquer outro lifecycle hook.
    É ideal para realizar injeção de dependências e para inicializar atributos que não dependam
    de componentes externos, como inputs de componentes pais.
    Chamado somente uma vez. */
  constructor() { 
    this.novoEvento("Constructor");
    console.log(this.name + " - constructor");
  }

  /*Será chamado pela primeira vez quando os inputs vindo dos componentes pais 
    tiverem seu primeiro valor de inicializacao atribuido.
    Depois será chamado sempre que o valor de alguma propriedade de entrada muda. 
    Ele recebe um mapa contendo todas as modificações, antes e depois, de cada propriedade. */
  ngOnChanges(changes: SimpleChanges) {
    this.novoEvento("ngOnChanges");
    console.log(this.name + " - ngOnChanges");
  }
  /*Chamado logo após o primeiro ngOnChanges, quando todos os inputs já estão inicializados.
    Este método é ideal para fazer inicializações com base nos valores de inputs, pois eles
    já possuem seus valores iniciais, que ainda não existem no constructor */
  ngOnInit() {
    this.novoEvento("ngOnInit");
    console.log(this.name + " - ngOnInit");
  }
  /* Chamado após o ngOnInit, quando o conteúdo já foi inicializado. */
  ngAfterContentInit() {
    this.novoEvento("ngAfterContentInit");
    console.log(this.name + " - ngAfterContentInit");
  }
  /* Chamado após todas as inicializacoes realizadas nos componentes filhos. */
  ngAfterViewInit() {
    this.novoEvento("ngAfterViewInit");
    console.log(this.name + " - ngAfterViewInit");
  }
  ngOnDestroy() {
    console.log(this.name + " - ngOnDestroy");
  }

  novoEvento(eventName: string) {

    let i = this.nextEventId++;
    this.events.push(new Event(i, eventName, this.colors[i%this.colors.length]) );
    setTimeout(
      () => {
        let idx = this.events.findIndex((v) => v.id == i);
        if (idx != null)
          this.events.splice(idx, 1);        
      }, 3000 + this.events.length*2000);
  }

}
