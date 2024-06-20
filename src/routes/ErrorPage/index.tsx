import { Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import SetDocumentTitle from '../../utils/setRouterTitle';

export default function ErrorPage(): JSX.Element {
  const navigate = useNavigate();
  SetDocumentTitle('Error');
  return (
    <Card className={styles.card}>
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
        >
          Back
        </Button>
        <h1>404 Not Found</h1>
      </CardContent>
    </Card>
  );
}
