import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
    imports: [ RouterModule, CommonModule, ButtonModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent, ButtonModule ]
})

export class SidebarModule {}
