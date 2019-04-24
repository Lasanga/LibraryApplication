import { Component, OnInit, Inject } from '@angular/core';
import { AuthorOutputDto, CategoryOutputDto, GovtPublicationInputDto, GovernmentPublicationsService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-government-publication-create',
  templateUrl: './government-publication-create.component.html',
  styleUrls: ['./government-publication-create.component.css']
})
export class GovernmentPublicationCreateComponent implements OnInit {

  authors: AuthorOutputDto[] = [];
  categories: CategoryOutputDto[] = [];
  govPub: GovtPublicationInputDto = new GovtPublicationInputDto();
  canEditSrc: Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<GovernmentPublicationCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public token: any,
    private _govService: GovernmentPublicationsService,
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

  onSubmit(data: GovtPublicationInputDto): void{
    data.year = new Date('August 19, 2019 23:15:30');
    this._govService.create(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }
}
