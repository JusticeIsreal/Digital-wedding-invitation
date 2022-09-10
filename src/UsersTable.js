import { Table } from "@mantine/core";
import Api from "./Api"

function UsersTable({ users }) {
  const rows = Api.map((element, index) => (
    <tr key={index}>
      <td>{element.name}</td>
      <td>{element.phoneNumber}</td>
      <td>{element.attend}</td>
      <td>{element.seat}</td>
      <td>{element.spouse}</td>
    </tr>
  ));

  let trad = users.filter((person) => person.attend === "traditional");
  let white = users.filter((person) => person.attend === "white");
  let both = users.filter((person) => person.attend === "Both");
  let spouse = users.filter((person) => person.spouse !== "");
 

  return (
    <div>
      <p>
        <b>{users.length}</b> attendees registered online
      </p>
      <p>{trad.length} would be attending only the traditional wedding</p>
      <p>{white.length} would be attending only the white wedding</p>
      <p>{both.length} wwould be attending the both</p>
      {/* <p>{spouse.length} wwould be attending the both</p> */}
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Attend</th>
            <th>Table</th>
            <th>Spouse Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default UsersTable;
