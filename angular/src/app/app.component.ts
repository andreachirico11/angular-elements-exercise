import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  @Input() route: '' | 'stepper' | 'spinner' = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.initialNavigation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['route']) {
      this.router.navigate([this.route]);
    }
  }
}
