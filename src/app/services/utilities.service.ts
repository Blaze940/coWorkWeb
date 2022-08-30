import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  title = "Co'Work";
  desc =
    'Travaillez ensemble, partagez des compétences, communiquez et développez-vous ensemble';
  constructor() { }
}
