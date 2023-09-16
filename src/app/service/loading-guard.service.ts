import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivate {
  canActivate(): boolean {
    // 在这里添加你的加载逻辑
    // ...
    return true;
  }
}