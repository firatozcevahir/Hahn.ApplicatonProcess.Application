import { inject } from 'aurelia-framework';
import { TemplatingEngine } from 'aurelia-templating';

@inject(TemplatingEngine)
export class Enhancer {
  constructor(private templatingEngine: TemplatingEngine) {
    this.templatingEngine = templatingEngine;
  }

  enhance(context: any, enhancingElement: Element): void {
    // enchance the dynamically created element using Templating Engine to apply aurelia bindings, localizations etc.
    this.templatingEngine.enhance({
      element: enhancingElement,
      bindingContext: context,
    });
  }
}
