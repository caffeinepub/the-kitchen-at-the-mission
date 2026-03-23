import type { Date_, Time } from "@/backend";
import { useActor } from "@/hooks/useActor";
import { useMutation } from "@tanstack/react-query";

export function useSubmitReservation() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (params: {
      name: string;
      email: string;
      phone: string;
      date: Date_;
      time: Time;
      partySize: bigint;
      specialRequests: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitReservation(
        params.name,
        params.email,
        params.phone,
        params.date,
        params.time,
        params.partySize,
        params.specialRequests,
      );
    },
  });
}
