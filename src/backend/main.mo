import List "mo:core/List";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";

actor {
  type Child = {
    id : Nat;
    name : Text;
  };

  type Letter = {
    id : Nat;
    content : Text;
    childId : Nat;
    parentName : Text;
  };

  type Photo = {
    id : Nat;
    title : Text;
    description : Text;
    childId : Nat;
    s3Link : Text;
  };

  module Photo {
    public func compare(photo1 : Photo, photo2 : Photo) : Order.Order {
      Nat.compare(photo1.id, photo2.id);
    };

    public func compareByTitle(photo1 : Photo, photo2 : Photo) : Order.Order {
      Text.compare(photo1.title, photo2.title);
    };
  };

  let letters = Map.empty<Nat, Letter>();
  let photos = Map.empty<Nat, Photo>();
  let children = Map.empty<Nat, Child>();

  var nextId = 0;

  public shared ({ caller }) func addChild(name : Text) : async Nat {
    let child : Child = {
      id = nextId;
      name;
    };
    children.add(nextId, child);
    nextId += 1;
    child.id;
  };

  public shared ({ caller }) func addLetter(content : Text, childId : Nat, parentName : Text) : async Nat {
    if (children.get(childId) == null) { Runtime.trap("Child does not exist") };
    let letter : Letter = {
      id = nextId;
      content;
      childId;
      parentName;
    };
    letters.add(nextId, letter);
    nextId += 1;
    letter.id;
  };

  public shared ({ caller }) func addPhoto(title : Text, description : Text, childId : Nat, s3Link : Text) : async Nat {
    if (children.get(childId) == null) { Runtime.trap("Child does not exist") };
    let photo : Photo = {
      id = nextId;
      title;
      description;
      childId;
      s3Link;
    };
    photos.add(nextId, photo);
    nextId += 1;
    photo.id;
  };

  public query ({ caller }) func getChild(id : Nat) : async Child {
    switch (children.get(id)) {
      case (null) { Runtime.trap("Child does not exist") };
      case (?child) { child };
    };
  };

  public query ({ caller }) func getLetter(id : Nat) : async Letter {
    switch (letters.get(id)) {
      case (null) { Runtime.trap("Letter does not exist") };
      case (?letter) { letter };
    };
  };

  public query ({ caller }) func getPhoto(id : Nat) : async Photo {
    switch (photos.get(id)) {
      case (null) { Runtime.trap("Photo does not exist") };
      case (?photo) { photo };
    };
  };

  public query ({ caller }) func getAllPhotos() : async [Photo] {
    photos.values().toArray().sort();
  };

  public query ({ caller }) func getAllPhotosByTitle() : async [Photo] {
    photos.values().toArray().sort(Photo.compareByTitle);
  };
};
