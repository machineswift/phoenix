
export interface PagedResult<T> {
  current: number;
  size: number;
  total: number;
  records: T[];
}


export interface UserDetail {
  userId: string;
  userName: string;
  enabled: boolean;
  phone: string;
  fullName: string;
  gender: string;
}

export interface UserUpdate {
  userId: string;
  userName: string;
  enabled: boolean;
  phone: string;
  fullName: string;
  gender: string;
}


export interface UserList {
  userId:string;
  userName: string;
  phone: string;
  fullName: string;
}
