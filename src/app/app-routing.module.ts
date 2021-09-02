import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { XuathangComponent } from './xuathang/xuathang.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { KiemkeComponent } from './kiemke/kiemke.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'xuathang', component: XuathangComponent },
  { path: 'product', component: ProductComponent },
  { path: 'thongke', component: ThongkeComponent },
  { path: 'kiemke', component: KiemkeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
