import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmailComponent } from './components/email/email.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EmailService } from './service/email.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddStudentComponent } from './pages/admin/add-student/add-student.component';
import { ViewStudentComponent } from './pages/admin/view-student/view-student.component';
import { DeleteStudentComponent } from './pages/admin/delete-student/delete-student.component';
import { UpdateStudentComponent } from './pages/admin/update-student/update-student.component';
import { ViewAllStudentComponent } from './pages/admin/view-all-student/view-all-student.component';
import { FeesComponent } from './pages/admin/fees/fees.component';
import { SetfeesComponent } from './pages/admin/setfees/setfees.component';
import { UpdatefeesComponent } from './pages/admin/updatefees/updatefees.component';
import { ViewfeesComponent } from './pages/admin/viewfees/viewfees.component';
import { LaundryComponent } from './pages/admin/laundry/laundry.component';
import { RoomsComponent } from './pages/admin/rooms/rooms.component';
import { SportsComponent } from './pages/admin/sports/sports.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalculatefeesComponent } from './pages/admin/calculatefees/calculatefees.component';
import { CountofroomsComponent } from './pages/admin/countofrooms/countofrooms.component';
import { CountoffreeroomsComponent } from './pages/admin/countoffreerooms/countoffreerooms.component';
import { IsoccupiedComponent } from './pages/admin/isoccupied/isoccupied.component';
import { InitializeroomComponent } from './pages/admin/initializeroom/initializeroom.component';
import { AssignroomComponent } from './pages/admin/assignroom/assignroom.component';

import { VacateroomComponent } from './pages/admin/vacateroom/vacateroom.component';
import { UpdateroomComponent } from './pages/admin/updateroom/updateroom.component';
import { GetroomComponent } from './pages/admin/getroom/getroom.component';

import { InformationComponent } from './pages/user/information/information.component';
import { ShowfeesComponent } from './pages/user/showfees/showfees.component';
import { SideComponent } from './pages/user/side/side.component';
import { RoomComponent } from './pages/user/room/room.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NewRequestComponent } from './pages/user/laundry/new-request/new-request.component';
import { PendingRequestComponent } from './pages/user/laundry/pending-request/pending-request.component';
import { AcceptedRequestComponent } from './pages/user/laundry/accepted-request/accepted-request.component';
import { RejectedRequestComponent } from './pages/user/laundry/rejected-request/rejected-request.component';
import { CompletedRequestComponent } from './pages/user/laundry/completed-request/completed-request.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { UpdateRequestComponent } from './pages/user/laundry/update-request/update-request.component';
import { AcceptedAdminRequestComponent } from './pages/admin/accepted-admin-request/accepted-admin-request.component';
import { CompletedAdminRequestComponent } from './pages/admin/completed-admin-request/completed-admin-request.component';
import { PendingAdminRequestComponent } from './pages/admin/pending-admin-request/pending-admin-request.component';
import { RejectedAdminRequestComponent } from './pages/admin/rejected-admin-request/rejected-admin-request.component';
import { UpdateAdminRequestComponent } from './pages/admin/update-admin-request/update-admin-request.component';
import { SetLaundryPricesComponent } from './pages/admin/set-laundry-prices/set-laundry-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    WelcomeComponent,
    AddStudentComponent,
    ViewStudentComponent,
    DeleteStudentComponent,
    UpdateStudentComponent,
    ViewAllStudentComponent,
    FeesComponent,
    SetfeesComponent,
    UpdatefeesComponent,
    ViewfeesComponent,
    LaundryComponent,
    RoomsComponent,
    SportsComponent,
    FooterComponent,
    CalculatefeesComponent,
    CountofroomsComponent,
    CountoffreeroomsComponent,
    IsoccupiedComponent,
    InitializeroomComponent,
    AssignroomComponent,

    VacateroomComponent,
    UpdateroomComponent,
    GetroomComponent,
    InformationComponent,
    ShowfeesComponent,
    SideComponent,
    RoomComponent,
    NewRequestComponent,
    PendingRequestComponent,
    AcceptedRequestComponent,
    RejectedRequestComponent,
    CompletedRequestComponent,
    UpdateRequestComponent,
    AcceptedAdminRequestComponent,
    CompletedAdminRequestComponent,
    PendingAdminRequestComponent,
    RejectedAdminRequestComponent,
    UpdateAdminRequestComponent,
    SetLaundryPricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [MatSnackBar,EmailService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
