"use client"; // If using Next.js App Router
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90,
    editable: false,
    sortable: false,
  },
  {
    field: 'created_at',
    headerName: 'Created at',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'limit',
    headerName: 'Limit',
    width: 150,
    editable: false,
    sortable: false,
  },
   {
    field: 'count',
    headerName: 'Count',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'sports',
    headerName: 'Sports',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'plans',
    headerName: 'Plan',
    type: 'number',
    width: 110,
    editable: false,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    editable: false,
    sortable: false,
    width: 160
  },
  {
    field: 'apikey',
    headerName: 'API Key',
    editable: false,
    sortable: false,
    width: 160
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Table({subdata}) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This only runs in the browser
    setIsClient(true);
  }, []);

  // 3. If we aren't in the browser yet, show nothing
  if (!isClient) {
    return <Box sx={{ height: 400, width: '100%' }}>Loading...</Box>;
  }
  
  return (
    <Box sx={{ height: 'auto', width: '100%' }}>
      <DataGrid
        rows={subdata}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        showCellVerticalBorder
        showColumnVerticalBorder
      />
    </Box>
  );
}
