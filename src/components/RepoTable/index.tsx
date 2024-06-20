import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import client from '../../client/client';
import { Table } from '../../types';
import { columns } from './columns';
import { useLoaderData, useNavigate } from 'react-router-dom';

async function updatePage(page: number, perPage: number) {
  const data = await client.getRepos(page, perPage);
  const rows = data?.items || [];
  return {
    rows: rows,
    totalCount: data?.totalCount || undefined,
  };
}

interface LoaderData {
  initTable: Table;
}
export default function RepoTable() {
  const page = 1;
  const perPage = 5;
  const { initTable } = useLoaderData() as LoaderData;
  const [table, setTable] = useState<Table>(initTable);
  const navigate = useNavigate();

  function fetchData(page: number, perPage: number) {
    const getData = updatePage(page, perPage);
    getData.then((result) => setTable(result));
  }

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    navigate(`/${params.row.name}`);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{
          '.MuiDataGrid-row:hover': {
            cursor: 'pointer',
          },
        }}
        onRowClick={handleRowClick}
        rows={table.rows}
        columns={columns}
        rowCount={table.totalCount}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: perPage,
              page: page - 1,
            },
          },
        }}
        onPaginationModelChange={(data) => {
          fetchData(data.page + 1, data.pageSize);
          return;
        }}
        paginationMode="server"
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}
