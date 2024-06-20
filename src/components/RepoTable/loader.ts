import client from '../../client/client';

export async function tableLoader() {
  const data = await client.getRepos(1, 5);
  if (!data) {
    throw new Response('Not Found');
  }
  const rows = data.items || [];
  return {
    initTable: {
      rows,
      totalCount: data.totalCount || undefined,
    },
  };
}
