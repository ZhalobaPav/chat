import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {NgScrollbarModule} from "ngx-scrollbar";
import { NgScrollbar } from 'ngx-scrollbar';
@Component({
  selector: 'app-scroll-view',
  standalone: true,
  imports: [NgScrollbarModule ],
  templateUrl: './scroll-view.component.html',
  styleUrl: './scroll-view.component.scss'
})
export class ScrollViewComponent implements AfterViewInit{
  @ViewChild(NgScrollbar) scrollbarRef!: NgScrollbar;
  ngAfterViewInit(): void {
  }

}
