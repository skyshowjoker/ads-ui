import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ads-ui';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // 设置默认语言
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}