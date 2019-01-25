import { NgModule,ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShopppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurant/restaurant.service";
import { OrderService } from "app/order/order-service";
import { SnackbarComponent } from './message/snackbar/snackbar.component';
import { NotificationService } from "./message/notification.service";




@NgModule({
    declarations:[ InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
    imports: [FormsModule,ReactiveFormsModule,CommonModule],
    exports:[FormsModule,ReactiveFormsModule,
             CommonModule, InputComponent,
             RadioComponent,RatingComponent,SnackbarComponent]

})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShopppingCartService,RestaurantsService,OrderService,NotificationService]
        }
    }
}