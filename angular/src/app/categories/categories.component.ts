import { Component, OnInit } from '@angular/core';
import { CategoryOutputDto, CategoryInputDto, CategoryService } from '../shared-services/shared-services.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { CategoryCreateComponent } from './category-create/category-create.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryOutputDto: CategoryOutputDto[] = [];
  canEdit: Boolean = false;
  input: CategoryInputDto = new CategoryInputDto();

  constructor(
    private _categoryService: CategoryService,
    private _authService: AuthService,
    private router: Router,
    private jwtHelper: JwtHelperService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    if( this._authService.isAuthenticated() )
    {

      this._categoryService.getAll().subscribe(res => {
        this.categoryOutputDto = res;
      })

      const token = localStorage.getItem('token');
      const decodeToken = this.jwtHelper.decodeToken(token);

      if (!decodeToken) {
        return false;
      }

      if (decodeToken['permission'].includes("category.add"))
        this.canEdit = true;

    }else {

      this.router.navigate(['/404NotFound']);

    }

  }


  _onDelete(id:number){
    // id = id;
    this._categoryService.delete(id).subscribe(res => {
      location.reload();
    })
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(CategoryCreateComponent, {
      width: '800px'
    });
  }

}
