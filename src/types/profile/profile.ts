export interface I_PetType {
  age: string;
  birth: string;
  breed: string;
  createdAt: string;
  deletedAt: string | null;
  gender: string;
  id: number | string;
  name: string;
  profileImage: string | null;
  updatedAt: string;
  userId: number | string;
}

export interface I_ScheduleType {
  category: '병원' | '산책' | ' 예방접종';
  content: string;
  date: string;
  id: number | string;
  location: string | null;
  petId: number | string;
  place: string;
  title: string;
  userId: number | string;
}
export interface I_Post {
  content: string;
  createdAt: string;
  deletedAt: string | null;
  id: number | string;
  thumbnail: string | null;
  title: string;
  updatedAt: string;
  userId: number | string;
}

export interface I_userInfoType {
  createdAt: string;
  deletedAt: string | null;
  email: string;
  id: number | string;
  name: string;
  password: string;
  pets: I_PetType[];
  posts: I_Post[];
  registration_information: string;
  role: number;
  schedule: I_ScheduleType[];
  updatedAt: string;
}
