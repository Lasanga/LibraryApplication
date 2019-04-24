import { Component, OnInit, Inject } from '@angular/core';
import { AuthorOutputDto, CategoryOutputDto, GovtPublicationUpdateDto, GovernmentPublicationsService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-government-publication-edit',
  templateUrl: './government-publication-edit.component.html',
  styleUrls: ['./government-publication-edit.component.css']
})
export class GovernmentPublicationEditComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];

  canType: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<GovernmentPublicationEditComponent>,
    @Inject(MAT_DIALOG_DATA) public govPub: GovtPublicationUpdateDto,
    private _govService: GovernmentPublicationsService,
    private _authorService: AuthorService,
    private _categoryService: CategoryService,
    private jwtHelper: JwtHelperService,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this._authorService.getAll().subscribe(res => {
      this.authors = res;
    });

    this._categoryService.getAll().subscribe(res => {
      this.categories = res;
    });

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (decodeToken['permission'].includes("govt.rare")){
      if(decodeToken['role'] == 'Librarian'){
        this.canType = false;
      }else{
        this.canType = true;
      }
    }
  }

  onSubmit(data: GovtPublicationUpdateDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    this._govService.update(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }

}
