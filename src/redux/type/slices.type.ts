export interface Lecturer {
  fullName: string;
  phoneNumber: string;
  dateOfBirth: string;
  idNumber: string;
  email: string;
  avatarUrl: string;
  gender: string;
  degree: string;
  workplace: string;
  address: string;
  roleId: string;
}

export interface LecturerState {
  leturerList: any;
  dataList: any;
  editingAnswer: any;
  loading: boolean;
  currentRequestId: undefined | string;
}

export type Collectionpoint = {
  id: string;
  address: string;
  email: string;
  emailLocation: string;
  phoneNumberPoint: string;
  phoneNumberAngent: string;
  stt?: number;
  LocationName: string;
  fullName: string;
  identifyCard: string;
  password: string;
  roldId: string;
};
