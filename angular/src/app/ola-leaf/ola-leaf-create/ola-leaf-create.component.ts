import { Component, OnInit, Inject } from '@angular/core';
import { AuthorOutputDto, CategoryOutputDto, OlaLeafInputDto, OlaLeafsService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ola-leaf-create',
  templateUrl: './ola-leaf-create.component.html',
  styleUrls: ['./ola-leaf-create.component.css']
})
export class OlaLeafCreateComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];
  olaLeaf: OlaLeafInputDto = new OlaLeafInputDto();
  canEditSrc: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<OlaLeafCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public token: any,
    private _olaService: OlaLeafsService,
    private _authorService: AuthorService,
    private _categoryService: CategoryService
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
  }

  onSubmit(data: OlaLeafInputDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    this._olaService.create(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }
}
