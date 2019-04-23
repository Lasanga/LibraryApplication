import { Component, OnInit, Inject } from '@angular/core';
import { AuthorOutputDto, CategoryOutputDto, OlaleafUpdateDto, OlaLeafsService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-ola-leaf-edit',
  templateUrl: './ola-leaf-edit.component.html',
  styleUrls: ['./ola-leaf-edit.component.css']
})
export class OlaLeafEditComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];

  canType: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<OlaLeafEditComponent>,
    @Inject(MAT_DIALOG_DATA) public olaLeaf: OlaleafUpdateDto,
    private _olaService: OlaLeafsService,
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

    if (decodeToken['permission'].includes("olaleaf.rare")){
      if(decodeToken['role'] == 'Librarian'){
        this.canType = false;
      }else{
        this.canType = true;
      }
    }
  }

  onSubmit(data: OlaleafUpdateDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    this._olaService.update(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }
}
