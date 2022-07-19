import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule ,Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import { PaymentDetailFormComponent } from './paymentdetail/payment-detail-form/payment-detail-form.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';

const routes:Routes=[
  
    {path:'',redirectTo:'header',pathMatch:'full'},
    {path:'',redirectTo:'cart',pathMatch:'full'},
    {path:'footer',component:FooterComponent},
    {path:'main',component:MainComponent},
    {path:'cart',component:CartComponent},
    {path:'billing-information',component:BillingInformationComponent},
    {path:'paymentdetail-form',component:PaymentDetailFormComponent},
    {path:'login',component:LoginComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'admin',component:AdminComponent}
    
]
  


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
