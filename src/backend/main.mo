import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Date = {
    year : Int;
    month : Int;
    day : Int;
  };

  type Time = {
    hour : Int;
    minute : Int;
  };

  type Reservation = {
    name : Text;
    email : Text;
    phone : Text;
    date : Date;
    time : Time;
    partySize : Int;
    specialRequests : Text;
    timestamp : Int;
  };

  module Reservation {
    public func compare(a : Reservation, b : Reservation) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let reservations = Map.empty<Int, Reservation>();

  public shared ({ caller }) func submitReservation(name : Text, email : Text, phone : Text, date : Date, time : Time, partySize : Int, specialRequests : Text) : async Int {
    let reservationId = Time.now();
    let reservation : Reservation = {
      name;
      email;
      phone;
      date;
      time;
      partySize;
      specialRequests;
      timestamp = Time.now();
    };
    reservations.add(reservationId, reservation);
    reservationId;
  };

  public shared ({ caller }) func getAllReservations() : async [Reservation] {
    if (caller.toText() != "w3wxq-r7vkb-xezab-mzg2p-te754-ohyq4-pgicf-hj3lt-t2gql-jsmiy-ffa") {
      Runtime.trap("Unauthorized access");
    };
    reservations.values().toArray().sort();
  };
};
