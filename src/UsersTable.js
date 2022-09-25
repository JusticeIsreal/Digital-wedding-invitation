import { Table } from "@mantine/core";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Data from "./Data"

function UsersTable({ users }) {
  const [search, setSearch] = useState(" ");

  let trad = Data.filter((person) => person.attend === "traditional");
  let white = Data.filter((person) => person.attend === "white");
  let both = Data.filter((person) => person.attend === "Both");

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        border: "1px solid black",
      }}
    >
      <p>
        <b>{Data.length}</b> attendees registered online
      </p>
      <p>{trad.length} would be attending only the traditional wedding</p>
      <p>{white.length} would be attending only the white wedding</p>
      <p>{both.length} wwould be attending the both</p>
      <div
        style={{
          margin: "0 auto",
          width: "100%",
        }}
      >
        <form
          className="search-form"
          style={{
            margin: "0 auto",
            width: "300px",
          }}
        >
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Name..."
            style={{ width: "300px", height: "40px", padding: "10px" }}
          />
        </form>
      </div>
      <div style={{ overflowY: "scroll", marginTop: "30px" }}>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Attend</th>
              <th>Table</th>
              <th>Spouse Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {Data.filter((item) => {
              if (item.name === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            }).map((element, index) => (
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.phoneNumber}</td>
                <td>{element.attend}</td>
                <td>{element.seat}</td>
                <td>{element.spouse}</td>
                <td>{element.date_created}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UsersTable;
