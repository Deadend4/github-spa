import { GridColDef } from '@mui/x-data-grid';
import { RepoType } from '../../../types';
export const columns: GridColDef<RepoType>[] = [
  {
    field: 'github_id',
    headerName: 'GitHub ID',
    sortable: true,
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    sortable: true,
    width: 150,
    editable: false,
  },
  {
    field: 'url',
    headerName: 'URL',
    type: 'number',
    sortable: false,
    width: 150,
    editable: false,
  },
  {
    field: 'owner_id',
    headerName: 'Owner ID',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 110,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 250,
    editable: false,
  },
  {
    field: 'language',
    headerName: 'Language',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 110,
    editable: false,
  },
  {
    field: 'disabled',
    headerName: 'Disabled',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 80,
    editable: false,
  },
  {
    field: 'stars_count',
    headerName: 'Stars Count',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 110,
    editable: false,
  },
];
