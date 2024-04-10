import { useQuery } from "@tanstack/react-query";

export const useSession = () => {
  const { data, status } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await fetch("/api/auth/session");
      return res.json();
    },
    staleTime: 5 * (60 * 1000),
    gcTime: 10 * (60 * 1000),
    refetchOnWindowFocus: true,
  });
  return { session: data, status };
};

// export const useQuotes = () => {};
