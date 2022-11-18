import { Component, OnInit } from '@angular/core';
import { DummyJson, TakenItem } from 'src/app/models';
import { LanguageService } from 'src/app/utils';
import { DummyJsonService } from 'src/app/utils';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private _dummyJsonService: DummyJsonService,
    private _languageService: LanguageService
  ) {}

  dummies: DummyJson = new DummyJson();
  takenItem: TakenItem = new TakenItem();
  id: number;
  title: string;
  dummyDatas: any;
  lang: string =
    this._languageService.getLanguage() == 'en'
      ? 'us'
      : this._languageService.getLanguage() || 'tr';

  async ngOnInit() {
    try {
      this.dummies = <DummyJson>await this._dummyJsonService.listAsync();
    } catch (err) {
      this._dummyJsonService.errorNotification(err);
    }
  }
  openModal(dummyData: any) {
    this.id = dummyData.id;
    this.title = dummyData.title;
    this.takenItem = dummyData;
  }
  onSave() {
    const itemIndex = this.dummies.products.findIndex(
      (x) => x.id === this.takenItem.id
    );
    this.dummies.products[itemIndex].piece = this.takenItem.piece;
  }
  setLang(lang: string) {
    this.lang = lang == 'en' ? 'us' : lang;
    this._languageService.setLanguage(lang);
  }
}
