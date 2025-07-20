import ApiClient from "./api.service";
import { useMutation } from "@tanstack/react-query";

function login(LoginPayload: { email: string; password: string }) {
  return ApiClient.post("/auth/login", LoginPayload);
}

function register(registerPayload: {
  name: string;
  email: string;
  password: string;
}) {
  return ApiClient.post("/auth/register", registerPayload);
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: register,
    mutationKey: ["register"],
  });
}
