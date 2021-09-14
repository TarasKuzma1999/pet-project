import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  siteLanguage = 'English';

  languageList: any = [
    { code: 'en', label: 'English' },
    { code: 'ua', label: 'Ukraine' },
  ];

  constructor(private service: TranslocoService) { }

  changeSiteLanguage(language: string): void {
    this.service.setActiveLang(language);
    this.siteLanguage = this.languageList.find( (f: any)=> f.code === language).label;
  }

}
