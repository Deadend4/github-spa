import { LoaderFunctionArgs } from 'react-router-dom';
import client from '../../client/client';

export default async function repoLoader({
  params,
}: LoaderFunctionArgs<{ repoId: string }>) {
  const repo = await client.getRepo(params.repoId);
  if (repo === null) {
    throw new Response('Not Found');
  }
  return { repo };
}
