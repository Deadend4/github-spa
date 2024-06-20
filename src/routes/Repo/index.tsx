import { useLoaderData, useNavigate } from 'react-router-dom';
import styles from './Repo.module.css';
import { Button, Link, Card, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import SetDocumentTitle from '../../utils/setRouterTitle';
import { RepoType } from '../../types';

interface LoaderData {
  repo: RepoType;
}

export default function Repo(): JSX.Element {
  const navigate = useNavigate();
  const { repo } = useLoaderData() as LoaderData;
  SetDocumentTitle(repo.name);

  const disabled = repo.disabled ? (
    <p>
      <span className={styles.highlighted}>Disabled</span> {true}
    </p>
  ) : null;
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
        <div className={styles.title}>
          <h1>{repo.name}</h1>
          <p>⭐ {repo?.stars_count}</p>
        </div>
        <p>
          <span className={styles.highlighted}>Language</span> {repo?.language}
        </p>
        <p>
          <span className={styles.highlighted}>Description</span>{' '}
          {repo?.description}
        </p>
        {disabled}
      </CardContent>
      <CardActions>
        <Link href={repo.url} variant="button" target="_blank">
          OPEN LINK
        </Link>
      </CardActions>
    </Card>
  );
}
