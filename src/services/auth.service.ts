import ApiClient from "./api.service";
import { useMutation } from "@tanstack/react-query";

function login(LoginPayload: { email: string; password: string }) {
  return ApiClient.post("/auth/login", LoginPayload);
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
  });
}
