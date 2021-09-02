import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table' 
import { XuathangComponent } from './xuathang/xuathang.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
// import { ProductPieChartsComponent } from './product-pie-charts/product-pie-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThongkeComponent } from './thongke/thongke.component';
import { MatSortModule } from '@angular/material/sort';
import { KiemkeComponent } from './kiemke/kiemke.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    XuathangComponent,
    ProductComponent,
    // ProductPieChartsComponent,
    ThongkeComponent,
    KiemkeComponent
  ],
  imports: [
    NgxChartsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
