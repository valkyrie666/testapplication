import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Department } from "../interface";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(`${environment.serverUrl}/departments/api`);
  }

  get(id: number): Observable<Department> {
    return this.http.get<Department>(`${environment.serverUrl}/departments/api/${id}`)
      .pipe(map((department: Department) => {
        return {
          ...department,
          id
        };
      }));
  }

  create(department: Department): Observable<void> {
    return this.http.post<void>(`${environment.serverUrl}/departments/api/create`, department);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/departments/api/delete/${id}`);
  }

  update(department: Department): Observable<Department> {
    return this.http.patch<Department>(`${environment.serverUrl}/departments/api/update`, department);
  }
}
