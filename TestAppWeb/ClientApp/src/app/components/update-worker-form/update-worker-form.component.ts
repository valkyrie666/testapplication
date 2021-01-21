import { AppState } from "../../ngrx/states/app.state";
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WorkerService } from "../../services/workers.service";
import { ActivatedRoute, Router } from "@angular/router";
import { selectSelectedWorker } from "../../ngrx/selectors/worker.selector";
import { Worker, Department } from "../../interface";
import { GetWorker } from "../../ngrx/actions/worker.actions";
import { DepartmentService } from "../../services/departments.service";

@Component({
  selector: 'app-worker-form-update',
  templateUrl: './update-worker-form.component.html',
  styleUrls: ['./update-worker-form.component.css']
})
export class UpdateWorkerFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  public worker: Worker;
  getWorkerSubscription: Subscription;
  updateWorkerSubscription: Subscription;
  getDepartmentsSubscription: Subscription;

  departmentList: Department[];
  selectedDepartment: Department;

  workerStream$: Observable<Observable<Worker>>;

  constructor(private workerService: WorkerService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>) {
    this.workerStream$ = store.pipe(select(selectSelectedWorker));
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(new GetWorker(id));

    this.getWorkerSubscription = this.workerStream$.subscribe(result => {
      this.getWorkerSubscription = result.subscribe(r => {
        this.worker = r;
      });
    }, error => console.error(error));

    this.getDepartmentsSubscription = this.departmentService.getAll().subscribe(data => {
      this.departmentList = data;
    });

    this.form = new FormGroup({
      workerName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      workerPost: new FormControl('', [Validators.required, Validators.minLength(1)]),
      workerEmployed: new FormControl(new Date(), Validators.required),
      workerDepartment: new FormControl(null, [Validators.required, Validators.minLength(1)])
    });

    console.clear();
  }

  ngOnDestroy() {
    if (this.getWorkerSubscription) {
      this.getWorkerSubscription.unsubscribe();
    }

    if (this.updateWorkerSubscription) {
      this.updateWorkerSubscription.unsubscribe();
    }

    if (this.getDepartmentsSubscription) {
      this.getDepartmentsSubscription.unsubscribe();
    }
  }
  
  submit() {
    var worker: Worker = {
      Id: Number(this.route.snapshot.params.id),
      Name: this.form.value.workerName,
      Post: this.form.value.workerPost,
      DateOfCreation: new Date(),
      DateOfEdit: new Date(),
      DateOfEmployement: new Date(this.form.value.workerEmployed),
      DepartmentId: Number(this.form.value.workerDepartment),
    };

    console.log(worker);

    this.updateWorkerSubscription = this.workerService.update(worker).subscribe(() => {
      this.router.navigate(['workers']);
    });
  }
}
