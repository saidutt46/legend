export class AuthResponse {
  success: string;
  token: string;
  msg: string;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
  };
}
