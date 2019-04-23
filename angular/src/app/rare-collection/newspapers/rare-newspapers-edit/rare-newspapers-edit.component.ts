import { Component, OnInit, Inject } from '@angular/core';
import { AuthorOutputDto, CategoryOutputDto, NewspaperUpdateDto, NewsPapersService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewsPaperEditComponent } from 'src/app/news-paper/news-paper-edit/news-paper-edit.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-rare-newspapers-edit',
  templateUrl: './rare-newspapers-edit.component.html',
  styleUrls: ['./rare-newspapers-edit.component.css']
})
export class RareNewspapersEditComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];
1
  canType: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NewsPaperEditComponent>,
    @Inject(MAT_DIALOG_DATA) public newsPaper: NewspaperUpdateDto,
    private _newsService: NewsPapersService,
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

    if (decodeToken['permission'].includes("newspaper.rare")){

      if(decodeToken['role'] == 'Librarian'){
        this.canType = false;
      }else{
        this.canType = true;
      }
      
    }

  }

  onSubmit(data: NewspaperUpdateDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    data.publicationDate = new Date('August 19, 2019 23:15:30');
    this._newsService.update(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }

}
