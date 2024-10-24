import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../config";

export default function useAddUser() {
  const addUser = (user) =>
    fetch(`${BASE_URL}users`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] })
  });
}
