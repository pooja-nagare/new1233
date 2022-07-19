import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PaymentdetailComponent } from './paymentdetail/paymentdetail.component';
import { PaymentDetailFormComponent } from './paymentdetail/payment-detail-form/payment-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import { CartComponent } from './cart/cart.component';
import { DeliverInfoComponent } from './deliver-info/deliver-info.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './shared/filter.pipe';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule, MatInput} from '@angular/material/input';
import { ProductService } from './shared/product.service';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { OrderService } from './shared/order.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PaymentdetailComponent,
    PaymentDetailFormComponent,
    HeaderComponent,
    ShippingComponent,
    MainComponent,
    FooterComponent,
    AccountComponent,
    BillingInformationComponent,
    CartComponent,
    DeliverInfoComponent,
    ForgetPasswordComponent,
    UserDashboardComponent,
    FilterPipe,
    LoginComponent,
    AdminComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCommonModule,
    MatInputModule,
    CommonModule,
  
  ],
  providers: [
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
