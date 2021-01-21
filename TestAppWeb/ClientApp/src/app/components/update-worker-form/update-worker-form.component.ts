import { AppState } from "../../ngrx/states/app.state";
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";
import { WorkerService } from "../../services/workers.service";
import { ActivatedRoute, Router } from "@angular/router";
import { selectSelectedWorker } from "../../ngrx/selectors/worker.selector";
import { Worker } from "../../interface";
import { GetWorker } from "../../ngrx/actions/worker.actions";

@Component({
  selector: 'app-worker-form-update',
  templateUrl: './update-worker-form.component.html',
  styleUrls: ['./update-worker-form.component.css']
})
export class UpdateWorkerFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  public worker: Worker;
  getSubscription: Subscription;
  updateSubscription: Subscription;

  workerStream$: Observable<Observable<Worker>>;

  constructor(private service: WorkerService, private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
    this.workerStream$ = store.pipe(select(selectSelectedWorker));
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(new GetWorker(id));

    this.getSubscription = this.workerStream$.subscribe(result => {
      this.getSubscription = result.subscribe(r => {
        this.worker = r;
      });
    }, error => console.error(error));


    this.form = new FormGroup({
      workerName: new FormControl(''),
      workerPost: new FormControl('')
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
    var worker: Worker = {
      Id: Number(this.route.snapshot.params.id),
      Name: this.form.value.workerName,
      Post: this.form.value.workerPost,
      DateOfCreation: new Date(),
      DateOfEdit: new Date(),
      DateOfEmployement: new Date(),
      DepartmentId: 1,
    };

    this.updateSubscription = this.service.update(worker).subscribe(() => {
      this.router.navigate(['workers']);
    });
  }
}
