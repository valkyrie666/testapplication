import { DepartmentService } from "../../services/departments.service";
import { Router, ActivatedRoute } from "@angular/router";
import { OnInit, OnDestroy, Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Department } from "../../interface";
import { Subscription, Observable } from "rxjs";
import { AppState } from "../../ngrx/states/app.state";
import { Store, select } from '@ngrx/store';
import { selectSelectedDepartment } from "../../ngrx/selectors/department.selector";
import { GetDepartment } from "../../ngrx/actions/department.actions";

@Component({
  selector: 'app-department-form-update',
  templateUrl: './update-department-form.component.html',
  styleUrls: ['./update-department-form.component.css']
})
export class UpdateDepartmentFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  public department: Department;
  getSubscription: Subscription;
  updateSubscription: Subscription;

  departmentStream$: Observable<Observable<Department>>;

  constructor(private service: DepartmentService, private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
    this.departmentStream$ = store.pipe(select(selectSelectedDepartment));
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(new GetDepartment(id));

    this.getSubscription = this.departmentStream$.subscribe(result => {
      this.getSubscription = result.subscribe(r => {
        this.department = r;
       
      });
    }, error => console.error(error));


    this.form = new FormGroup({
      departmentName: new FormControl(''),
    });
  }

  ngOnDestroy() {
    if (this.getSubscription) {
      this.getSubscription.unsubscribe();
    }

    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  submit() {
    var department: Department = {
      Id: Number(this.route.snapshot.params.id),
      Name: this.form.value.departmentName,
      DateOfCreation: new Date(),
      DateOfEdit: new Date(),
    }

    console.log(department);

    this.updateSubscription = this.service.update(department).subscribe(() => {
      this.router.navigate(['departments']);
    });
  }
}
