import { Component, OnInit } from '@angular/core';
import { NewspaperOutputDto, NewsPapersService, NewspaperUpdateDto } from 'src/app/shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RareNewspapersEditComponent } from './rare-newspapers-edit/rare-newspapers-edit.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-rare-newspapers',
  templateUrl: './newspapers-rare.component.html',
  styleUrls: ['./newspapers-rare.component.css']
})
export class NewspapersRareComponent implements OnInit {

  newsOutputDto: NewspaperOutputDto[] = [];
  canEdit: Boolean = false;
  canDelete: Boolean = false;

  constructor(
    private _newsService: NewsPapersService,
    private jwtHelper: JwtHelperService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this._newsService.getRare().subscribe(res => {
      this.newsOutputDto = res;
    })

    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelper.decodeToken(token);

    if (!decodeToken) {
      return false;
    }

    if (decodeToken['permission'].includes("newspaper.edit"))
        this.canEdit = true;

    if (decodeToken['permission'].includes("newspaper.delete"))
    this.canDelete = true;
    
  }

  option(element: any): void {
    if (!isNaN(element)) {
      this._newsService.delete(element).subscribe(res => {
        this.ngOnInit();
      })
    } else {
      this.openDialog(element);
    }
  }

  openDialog(newsPaper: NewspaperUpdateDto): void {
    const dialogRef = this.dialog.open(RareNewspapersEditComponent, {
      width: '800px',
      data: { data: newsPaper }
    });
  }

}
