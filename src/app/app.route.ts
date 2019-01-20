import { Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { UsuariosComponent } from './usuarios/usuarios.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { OrderComponent } from './order/order.component';
import { OrderItensComponent} from './order/order-itens/order-itens.component'
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
      children: [ 
          {path: '', redirectTo: 'menu',pathMatch:'full'},
          {path: 'menu', component: MenuComponent},
          {path: 'reviews', component: ReviewsComponent},
    ]},
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order-sumary', component: OrderSumaryComponent }

]