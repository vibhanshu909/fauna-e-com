import { Client, query as q } from 'faunadb'

const client = new Client({
  secret: 'fnAD_LvXb_ACAdLaOzYc7t6cnrChO_tqNai6CO3v',
  keepAlive: false,
})

export default function Home({ data }) {
  return (
    <div>
      <h1>nextjs</h1>
      <pre>{data}</pre>
    </div>
  )
}

export async function getStaticProps() {
  const helper = await client.query<any>(
    q.Map(
      q.Paginate(q.Match(q.Index('allTodos'))),
      q.Lambda(
        'ref',
        q.Let(
          { document: q.Get(q.Var('ref')) },
          {
            phone: q.Select(['data', 'phone'], q.Var('document')),
            createdAt: q.Select(['data', 'createdAt'], q.Var('document')),
            isSeller: q.Select(['data', 'isSeller'], q.Var('document'), null),
          },
        ),
      ),
    ),
  )
  return {
    props: {
      data: JSON.stringify(helper.data, null, 2),
    },
  }
}
