import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[selectedPlayer]',
})
export class SelectedPlayerDirective {
  @Input() set selectedPlayer(player) {
    this.container.clear();
    if (player) {
      this.container.createEmbeddedView(this.template);
    }
  }

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
  }
}
