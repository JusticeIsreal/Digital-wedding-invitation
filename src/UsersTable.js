import { Table } from "@mantine/core";

function UsersTable({ users }) {
  const rows = users.map((element, index) => (
    <tr key={index}>
      <td>{element.name}</td>
      <td>{element.phoneNumber}</td>
      <td>{element.attend}</td>
      <td>{element.seat}</td>
      <td>{element.spouse}</td>
    </tr>
  ));
  return (
    <div>
      {users.length}
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
