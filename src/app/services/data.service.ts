import { Injectable } from '@angular/core';
import * as dataFile from '../../assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return dataFile.items;
  }
}
