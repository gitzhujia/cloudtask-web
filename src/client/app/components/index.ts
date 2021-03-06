import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { ModalComponent, ModalHeaderComponent, ModalFooterComponent } from './modal/modal.cpmponent';
import { PaginationComponent } from './pagination/pagination.component';
import { ScheduleComponent } from './schedule/schedule.component';

let Components: Array<any> = [
  HeaderComponent,
  SideBarComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalFooterComponent,
  PaginationComponent,
  ScheduleComponent,
]

export {
  HeaderComponent,
  SideBarComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalFooterComponent,
  PaginationComponent,
  ScheduleComponent,
}

export const COMPONENTS = Components;
