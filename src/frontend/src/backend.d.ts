import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    date: Date_;
    name: string;
    specialRequests: string;
    time: Time;
    email: string;
    timestamp: bigint;
    partySize: bigint;
    phone: string;
}
export interface Date_ {
    day: bigint;
    month: bigint;
    year: bigint;
}
export interface Time {
    hour: bigint;
    minute: bigint;
}
export interface backendInterface {
    getAllReservations(): Promise<Array<Reservation>>;
    submitReservation(name: string, email: string, phone: string, date: Date_, time: Time, partySize: bigint, specialRequests: string): Promise<bigint>;
}
