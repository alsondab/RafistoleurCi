import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RafistoleurService } from '../../Services/rafistoleur.service';

@Component({
  selector: 'app-rafistoleur-edit',
  templateUrl: './rafistoleur-edit.component.html',
  styleUrls: ['./rafistoleur-edit.component.css']
})
export class RafistoleurEditComponent implements OnInit {

  rafistoleurId!: any;
  rafistoleur: any = {}; 
  isLoading: boolean = false;
  LoadingTitle: string = 'Loading';
  errors: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private rafistoleurService: RafistoleurService) { }

  ngOnInit() {
    this.rafistoleurId = this.route.snapshot.paramMap.get('id');
    this.fetchRafistoleur();
  }

  fetchRafistoleur() {
    this.isLoading = true;
    this.rafistoleurService.getRafistoleur(this.rafistoleurId).subscribe({
      next: (res) => {
        this.rafistoleur = res.message;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  updateRafistoleur() {
    this.isLoading = true;
    this.rafistoleurService.updateRafistoleur(this.rafistoleurId, this.rafistoleur).subscribe({
      next: (res) => {
        this.router.navigate(['/rafistoleurs']);
      },
      error: (err) => {
        this.errors = err.error.errors;
        this.isLoading = false;
      }
    });
  }

  deleteRafistoleur() {
    if (confirm('Are you sure you want to delete this rafistoleur?')) {
      this.isLoading = true;
      this.rafistoleurService.deleteRafistoleur(this.rafistoleurId).subscribe({
        next: (res) => {
          this.router.navigate(['/rafistoleurs']);
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false;
        }
      });
    }
  }
}
