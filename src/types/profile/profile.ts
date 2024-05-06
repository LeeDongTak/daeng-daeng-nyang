export interface I_petType {
  createdAt: string;
  deletedAt: string | null;
  dogNm: string;
  id: number | string;
  kindNm: string;
  neuterYn: boolean;
  profileImage: string;
  rfidCd: string;
  sexNm: string;
  updatedAt: string;
  userId: string | number;
}

export interface I_userInfoType {
  createdAt: string;
  deletedAt: string | null;
  email: string;
  id: number | string;
  name: string;
  password: string;
  pets: I_petType[];
  posts: string[];
  registration_information: string;
  role: number;
  schedule: string[];
  updatedAt: string;
}
