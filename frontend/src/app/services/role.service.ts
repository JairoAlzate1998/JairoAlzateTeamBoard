import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  registerRole(data: any) {
    return this._http.post<any>(this.env + 'role/registerRole', data);
  }

  listRole() {
    return this._http.get<any>(this.env + 'role/listRole');
  }

  findRole(id: any) {
    return this._http.get<any>(this.env + 'role/findRole/' + id);
  }

  updateRole(data: any) {
    return this._http.put<any>(this.env + 'role/updateRole', data);
  }
}
