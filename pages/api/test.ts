import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  res.end('test api response')
}
export default handler
