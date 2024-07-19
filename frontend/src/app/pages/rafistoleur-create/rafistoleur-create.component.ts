import { Component } from '@angular/core';
import { RafistoleurService } from '../../Services/rafistoleur.service';


@Component({
  selector: 'app-rafistoleur-create',
  templateUrl: './rafistoleur-create.component.html',
  styleUrls: ['./rafistoleur-create.component.css']
})
export class RafistoleurCreateComponent {
  name!: string
  email!: string
  location!: string
  tel!: string


  isLoading: boolean = false;
  LoadingTitle: string = 'Loading';
  errors: any = [];

  ngOnInit(): void {
  }
  constructor(private rafistoleurService:RafistoleurService ) { }

  saveRafistoleur() {
    this.isLoading = true;
    this.LoadingTitle = 'Saving';
    const inputData = {
      name: this.name,
      email: this.email,
      location: this.location,
      tel: this.tel
    };
  
    this.rafistoleurService.saveRafistoleur(inputData).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(res.message);
        this.name = '';
        this.email = '';
        this.location = '';
        this.tel = '';
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        this.isLoading = false;
        console.error('Error:', err);  // Log the full error response
        console.log(err.error.errors, 'errors');
      }
    });
  }

  
}
