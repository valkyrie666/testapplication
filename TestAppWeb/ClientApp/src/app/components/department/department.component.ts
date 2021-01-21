import { Component, OnInit, OnDestroy } from "@angular/core";
import { Department } from "../../interface";
import { DepartmentService } from "../../services/departments.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit, OnDestroy {
  department: Department;
  getDepartmentSubscription: Subscription;

  constructor(private service: DepartmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getDepartmentSubscription = this.service.get(id).subscribe(data => {
      this.department = data;
    });
  }

  ngOnDestroy() {
    if (this.getDepartmentSubscription) {
      this.getDepartmentSubscription.unsubscribe();
    }
  }
}
