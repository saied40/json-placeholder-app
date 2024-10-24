import React from "react";

export default function UserDetails({ user, className="" }) {
  return (
    <>
      <div className={className}>
        <h3 className="text-xl font-semibold">User Details:</h3>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p className="font-medium">Address Details:</p>
        <ul className="[list-style:initial] ml-4">
          <li>Street: {user.address.street}</li>
          <li>Suite: {user.address.suite}</li>
          <li>City: {user.address.city}</li>
          <li>Zipcode: {user.address.zipcode}</li>
          <li>
            <p className="font-medium">Geo:</p>
            <ul className="[list-style:initial] ml-8">
              <li>Latitude: {user.address.geo.lat}</li>
              <li>Longitude: {user.address.geo.lng}</li>
            </ul>
          </li>
        </ul>
        <p className="font-medium">Company Details:</p>
        <ul className="[list-style:initial] ml-4">
          <li>Name: {user.company.name}</li>
          <li>Catch Phrase: {user.company.catchPhrase}</li>
          <li>BS: {user.company.bs}</li>
        </ul>
      </div>
    </>
  );
}
