import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { User } from "./Users";

interface UserListProps {
  items: User[];
  onSelectItem: (item: User) => void;
}

const UserList = ({ items, onSelectItem }: UserListProps) => {
  const handleRowClick = (data: GridCellParams) => {
    if (data.colDef.field == "name") {
      onSelectItem(data.row);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "username", headerName: "User name", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    { field: "phone", headerName: "Phone", width: 180 },
    {
      field: "website",
      headerName: "Website",
      width: 130,
      type: "custom",
      renderCell: (param) => (
        <a href={param.row.website} target="blank">
          {param.row.website}
        </a>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={items}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onCellClick={(data) => handleRowClick(data)}
      />
    </div>
  );
};

export default UserList;
