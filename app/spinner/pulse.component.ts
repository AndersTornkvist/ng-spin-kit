import { Component } from "@angular/core";
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';

@Component({
  selector: 'sk-pulse',
  styles: [`
    .pulse-spinner {
      margin: 25px auto;
      width: 40px;
      height: 40px;
      border-radius: 100%;
    
      background-color: #333;
      -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
      animation: sk-scaleout 1.0s infinite ease-in-out;
    }
    
    @-webkit-keyframes sk-scaleout {
      0% {
        -webkit-transform: scale(0)
      }
      100% {
        -webkit-transform: scale(1.0);
        opacity: 0;
      }
    }
    
    @keyframes sk-scaleout {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      100% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
        opacity: 0;
      }
    }
  `],
  template: `
    <div [hidden]="!visible" class="pulse-spinner"></div>
  `
})

export class PulseComponent extends SpinnerComponent {

}
