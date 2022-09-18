import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Calendar } from "../model";

@Injectable({
    providedIn: "root"
})
export class DataService {
    constructor(private http: HttpClient) {
    }

    startBuildSchedule(id: number): Observable<number> {
        return this.http.post<number>(`${environment.apiUrl}/api/schedule/start/${id}`, undefined);
    }

    getBestActualResult(id: number) {
        return this.http.get<Calendar[]>(`${environment.apiUrl}/api/schedule/${id}`);
    }
}
