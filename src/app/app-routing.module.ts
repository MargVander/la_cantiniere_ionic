import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALaCarteComponent } from './a-la-carte/a-la-carte.component';
import { CommandesComponent } from './commandes/commandes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenuSemaineComponent } from './menu-semaine/menu-semaine.component';
import { PanierComponent } from './panier/panier.component';
import { RegisterComponent } from './register/register.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { MealsComponent } from './meals/meals.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';
import { MenusComponent } from './menus/menus.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuard, AdminGuard } from './services/auth/auth.guard';
import { ConstraintEditComponent } from './constraint-edit/constraint-edit.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const routes: Routes = [
  { path: 'a-la-carte', component: ALaCarteComponent },
  { path: 'menu-semaine', component: MenuSemaineComponent },
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  /**
 * ces pages sont protégées par authguard
 */
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'constraintedit', component: ConstraintEditComponent, canActivate: [AuthGuard] },
  { path: 'mes-commandes/:id', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'commandes', component: CommandesComponent, canActivate: [AuthGuard] },
  { path: 'ingredients', component: IngredientsComponent, canActivate: [AuthGuard] },
  { path: 'newingredient', component: NewIngredientComponent, canActivate: [AuthGuard] },
  { path: 'panier', component: PanierComponent },
  { path: 'newmeal', component: NewMealComponent, canActivate: [AuthGuard] },
  { path: 'newmenu', component: NewMenuComponent, canActivate: [AuthGuard] },
  { path: 'ingredientedit/:id', component: IngredientEditComponent, canActivate: [AuthGuard] },
  { path: 'meals', component: MealsComponent, canActivate: [AuthGuard] },
  { path: 'mealedit/:id', component: MealEditComponent, canActivate: [AuthGuard] },
  { path: 'menus', component: MenusComponent, canActivate: [AuthGuard] },
  { path: 'menuedit/:id', component: MenuEditComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'useredit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard] },
  { path: 'profiledit', component: UserEditComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
