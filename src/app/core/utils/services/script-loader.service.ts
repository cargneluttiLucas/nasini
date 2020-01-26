import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

export interface ScriptModel {
  name: string;
  src: string;
  loaded?: boolean;
  htmlParentElement?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  private scripts: ScriptModel[] = [];

  constructor(
    @Inject(DOCUMENT) private document,
  ) {}

  public load(script: ScriptModel): Observable<ScriptModel> {
    return new Observable(observer => {
      const existingScript = this.scripts.find(s => s.name === script.name);

      // Complete if already loaded
      if (existingScript && existingScript.loaded) {
        observer.next(existingScript);
      } else {
        // Add the scriptdocument
        this.scripts = [...this.scripts, script];

        // Load the script
        const scriptElement = this.document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = script.src;

        scriptElement.onload = () => {
          script.loaded = true;
          observer.next(script);
        };

        scriptElement.onerror = (error: any) => {
          observer.error(`Couldn\'t load script  ${script.src}: \n ${error}`);
        };
        const injectTag = script.htmlParentElement || 'body';
        this.document.getElementsByTagName(injectTag)[0].appendChild(scriptElement);
      }
    });
  }
}
