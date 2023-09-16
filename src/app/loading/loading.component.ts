import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-loading',
  animations: [
    trigger('loadingAnimation', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive <=> active', animate('300ms ease-in'))
    ])
  ],
  template: `
    <div *ngIf="isLoading" [@loadingAnimation]="state">
      正在加载...
    </div>
  `
})
export class LoadingComponent {
  state = 'inactive';
  isLoading = true;

  constructor() {
    // 模拟数据加载完成，这里你可以替换成真实的数据加载逻辑
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    
    // 模拟动画状态切换，这里仅作演示
    setInterval(() => {
      this.toggleState();
    }, 500);
  }

  // 切换动画状态
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
