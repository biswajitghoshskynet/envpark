import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  // Initialize based on viewport: open on desktop (>=1024px), closed on smaller screens
  private mql = typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)') : null;
  private _open = new BehaviorSubject<boolean>(this.mql ? this.mql.matches : true);
  readonly isOpen$ = this._open.asObservable();

  constructor() {
    if (this.mql) {
      // Use addEventListener when available, fallback to addListener
      const handler = (e: MediaQueryListEvent | MediaQueryList) => {
        // When switching to desktop (matches === true) show sidebar; when leaving desktop, hide it
        this._open.next(e.matches);
      };

      try {
        // modern browsers
        this.mql.addEventListener('change', handler as any);
      } catch (err) {
        // older Safari / IE
        // @ts-ignore
        this.mql.addListener(handler as any);
      }
    }
  }

  toggle() {
    this._open.next(!this._open.value);
  }

  set(open: boolean) {
    this._open.next(open);
  }

  get value() {
    return this._open.value;
  }
}
