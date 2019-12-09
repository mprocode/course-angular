import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appClone]',
})
export class CloneDirective {

  @Input() appCloneOf: string[];
  @Input('appCloneOddColor') oddColor: string;
  @Input('appCloneEvenColor') evenColor: string;

  // fazer somente o clone inicialmente
  // utilizar o * para sumir o erro
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) 
  { 
    // primeiro ese
    //this.container.createEmbeddedView(this.template);
    //this.container.createEmbeddedView(this.template);

    // nao funciona -> implementar ngOnChanges
    //for(let s of this.appClone) {
    //  this.container.createEmbeddedView(this.template)
    //}
  }

  // Nao funciona se a referencia do array nao eh mudada
  // pois o ngOnChanges nao eh invocado
  ngOnChanges() {
    console.warn( "ngOnChanges() invoked." );
    /*
    console.log(this.appCloneOf);
    for(let s of this.appCloneOf) {
      this.container.createEmbeddedView(this.template)
    }
    */
  }
  public ngDoCheck() : void {
    console.warn( "ngDoCheck() invoked." );
    console.log(this.appCloneOf);
    console.log(this.evenColor);

    this.container.clear();    
    for(let i=0; i<this.appCloneOf.length;i++) {
      let s = this.appCloneOf[i];
      this.container.createEmbeddedView(this.template, {
        $implicit: s + '*',
        index: i,
        color: i%2==0 ? this.evenColor : this.oddColor
      })
    }
  }  
  
}
