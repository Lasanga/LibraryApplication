import { Component, OnInit } from '@angular/core';
import { CategoryInputDto, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: CategoryInputDto = new CategoryInputDto();

  constructor(
    private _categoryService: CategoryService,
    public dialogRef: MatDialogRef<CategoryCreateComponent>
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(data: CategoryInputDto): void{
    // this.author.id = id;
    this._categoryService.create(this.category).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }

}
