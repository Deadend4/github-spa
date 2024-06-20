import { Button } from '@mui/material';
import styles from './App.module.css';
import client from './client/client';
import RepoTable from './components/RepoTable';
import SetDocumentTitle from './utils/setRouterTitle';

function App() {
  SetDocumentTitle('GitHub Repos');
  return (
    <div className={styles.container}>
      <Button variant="contained" color="primary" onClick={client.sync}>
        Force Sync
      </Button>
      <RepoTable />
    </div>
  );
}

export default App;
