import { Component, OnInit } from '@angular/core';
import { AuthorInputDto, AuthorService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  author: AuthorInputDto = new AuthorInputDto();

  constructor(
    private _authorService: AuthorService,
    public dialogRef: MatDialogRef<AuthorCreateComponent>
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(data: AuthorInputDto): void{
    // this.author.id = id;
    this._authorService.create(this.author).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }


}
