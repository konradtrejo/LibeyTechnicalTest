import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { LibeyUser } from "src/app/entities/libeyuser";
import{ResponseLibeyUser} from "src/app/entities/response";
@Injectable({
	providedIn: "root",
})
export class LibeyUserService {
	private apiLibeyUser =`${environment.pathLibeyTechnicalTest}LibeyUser/`
	constructor(private http: HttpClient) {}
	
	Find(documentNumber: string): Observable<LibeyUser> {
		const uri = `${environment.pathLibeyTechnicalTest}LibeyUser/${documentNumber}`;
		return this.http.get<LibeyUser>(uri);
	}
	
	getUsers(): Observable<LibeyUser[]> {
		return this.http.get<LibeyUser[]>(`${this.apiLibeyUser}users`);
	  }
	
	getUser(id: number): Observable<LibeyUser> {
	return this.http.get<LibeyUser>(`${this.apiLibeyUser}${id}`);
	}

	addUser(usuario: LibeyUser): Observable<ResponseLibeyUser> {
	return this.http.post<ResponseLibeyUser>(this.apiLibeyUser, usuario);
	}

	updateUser(usuario: LibeyUser): Observable<LibeyUser> {
	return this.http.put<LibeyUser>(`${this.apiLibeyUser}`, usuario);
	}

	deleteUser(id: string): Observable<void> {
	return this.http.delete<void>(`${this.apiLibeyUser}${id}`);
	}

}