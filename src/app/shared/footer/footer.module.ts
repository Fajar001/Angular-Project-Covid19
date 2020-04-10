import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
    imports: [ RouterModule, CommonModule, ButtonModule ],
    declarations: [ FooterComponent ],
    exports: [ FooterComponent, ButtonModule ]
})

export class FooterModule {}
