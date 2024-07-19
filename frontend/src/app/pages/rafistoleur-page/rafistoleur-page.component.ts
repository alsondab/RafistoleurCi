import { Component, OnInit } from '@angular/core';
import { RafistoleurService,RafistoleurResponse } from '../../Services/rafistoleur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { TokenService } from '../../Services/token.service';
@Component({
  selector: 'app-rafistoleur-page',
  templateUrl: './rafistoleur-page.component.html',
  styleUrls: ['./rafistoleur-page.component.css']
})
export class RafistoleurPageComponent implements OnInit {
  rafistoleurs!: RafistoleurResponse[];
  isLoading: boolean = false;

  constructor(private Auth: AuthService,private route: ActivatedRoute, private router: Router, private rafistoleurService: RafistoleurService, private token: TokenService) { }
  public loggedIn:boolean=false;
  ngOnInit() {
    this.getRafistoleurLists();
    this.Auth.authStatus.subscribe(
      (value:boolean)=>{
        this.loggedIn = value;
      }
    );
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/login');
  }

  getRafistoleurLists() {
    this.isLoading = true;
    this.rafistoleurService.getRafistoleurs().subscribe((res) => {
      console.log(res);
      this.rafistoleurs = res.message;
      this.isLoading = false;
    });
  }

  deleteRafistoleur(id: number) {
    if (confirm('Are you sure you want to delete this rafistoleur?')) {
      this.isLoading = true;
      this.rafistoleurService.deleteRafistoleur(id.toString()).subscribe({
        next: (res) => {
          this.rafistoleurs = this.rafistoleurs.filter(r => r.id !== id);
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false;
        }
      });
    }
  }
  
}
