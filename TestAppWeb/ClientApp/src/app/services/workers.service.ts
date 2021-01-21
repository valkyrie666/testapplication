import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Worker } from "../interface";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class WorkerService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${environment.serverUrl}/workers/api`);
  }

  get(id: number): Observable<Worker> {
    return this.http.get<Worker>(`${environment.serverUrl}/workers/api/${id}`);
  }

  create(worker: Worker): Observable<void> {
    return this.http.post<void>(`${environment.serverUrl}/workers/api/create`, worker);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/workers/api/delete/${id}`);
  }

  update(worker: Worker): Observable<Worker> {
    return this.http.patch<Worker>(`${environment.serverUrl}/workers/api/update`, worker);
  }
}
