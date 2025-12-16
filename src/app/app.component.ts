import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyService } from './services/property.service';
import { Property } from './models/property';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Land Registry</h1>

    <button (click)="loadProperties()">Reload Properties</button>

    <p><b>Properties count:</b> {{ properties.length }}</p>

    <ul>
      <li *ngFor="let p of properties">
        {{ p.address }} - {{ p.city }}, {{ p.province }}
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {

  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.loadProperties(); // 🔥 auto-load
  }

  loadProperties() {
    this.propertyService.getAll().subscribe(data => {
      this.properties = data;
    });
  }
}
