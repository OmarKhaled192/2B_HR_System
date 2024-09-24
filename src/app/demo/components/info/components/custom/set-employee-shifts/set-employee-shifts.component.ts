import { CommonModule, DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { ToastModule } from "primeng/toast";
import { FormLayoutDemoRoutingModule } from "src/app/demo/components/uikit/formlayout/formlayoutdemo-routing.module";
import { SetEmployeeShiftsService } from "./set-employee-shifts.service";
import { Globals } from "src/app/class/globals";


@Component({
  selector: 'app-set-employee-shifts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormLayoutDemoRoutingModule,
    ReactiveFormsModule,
    ChipsModule,
    DropdownModule,
    CascadeSelectModule,
    MultiSelectModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    TranslateModule,

],
providers: [MessageService, DatePipe, TranslateService],
templateUrl: './set-employee-shifts.component.html',
  styleUrl: './set-employee-shifts.component.scss'
})
export class SetEmployeeShiftsComponent {
    constructor(
        private _SetEmployeeShiftsService: SetEmployeeShiftsService,
        private messageService: MessageService,
    ) {}

    dropdownItemsDepartment: any;
    dropdownItemsShift: any;
    dropdownItemsEmployee: any;

    selectedDepartment: any;
    selectedShift: any;
    selectedEmployee: any;
    selectedEmployeeIds: any[] = [];

    endPoint: string;
    registerForm:any = {};

    ngOnInit(): void {
        this.endPoint = 'Employee';

        // adding this Configurations in each Component Customized
        Globals.getMainLangChanges().subscribe((mainLang) => {
            console.log('Main language changed to:', mainLang);

            // update mainLang at Service
            this._SetEmployeeShiftsService.setCulture(mainLang);

            // update endpoint
            this._SetEmployeeShiftsService.setEndPoint(this.endPoint);

            // get all Drop Down Fields
            this.getALlDropDown()

        });


    }

    getDropDownField(self: { field: any; enum: string }) {
        this._SetEmployeeShiftsService.getDropdownField(self.enum).subscribe({
            next: (res) => {
                this[self.field] = res.data;
            },
            error: (err) => {
                console.log(`error in ${self.field}`)
                console.log(err);
            },
        });
    }

    getALlDropDown() {

         // get Department Dropdown
         this.getDropDownField({ field: 'dropdownItemsDepartment', enum: 'Department'});

        // get Shift Dropdown
        this.getDropDownField({ field: 'dropdownItemsShift', enum: 'Shift' });

    }

    ChangeEmployees(dept: any) {
        console.log(dept.id)
        this._SetEmployeeShiftsService.getEmployeeByDepartment(dept.id).subscribe({
            next: (res) => {
                this.dropdownItemsEmployee = res.data;
                console.log(res)
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    onSelectEmployees(event: any) {
        // this.selectedEmployee = event.value;
        this.selectedEmployeeIds = []
        event.value.forEach((employee: any) => {
            this.selectedEmployeeIds.push(employee.id);
        });
        console.log(this.selectedEmployeeIds);
      }

    registerSubmit() {
        this.registerForm = {
            shiftId: this.selectedShift.id,
            employeeIds: this.selectedEmployeeIds
        }

        this._SetEmployeeShiftsService.UpdateEmployeesShift(this.registerForm).subscribe({
            next: (res) => {
                console.log(res);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'item inserted successfully',
                    life: 3000,
                });
            },

            error: (err) => {
                console.error(err);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Failure',
                    detail: err.statusText,
                    life: 3000,
                });
            },
        });
    }
}
