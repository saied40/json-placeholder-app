import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../config";

export default function useUsersQuery(selectFn=data=>data) {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetch(`${BASE_URL}users`).then((res) => res.json()),
    select: selectFn,
  });
}
