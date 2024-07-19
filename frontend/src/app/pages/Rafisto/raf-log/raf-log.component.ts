import { Component } from '@angular/core';

@Component({
  selector: 'app-raf-log',
  templateUrl: './raf-log.component.html',
  styleUrls: ['./raf-log.component.css']
})
export class RafLogComponent {
  public form={
    email: null,
    password: null
  }
  submitLoginRaf(){
    console.log(this.form);
  }
  
}
