import { NextApiHandler } from 'next'
import { countData } from './count-background'

const handler: NextApiHandler = (req, res) => {
  res.end(`counting ${countData}`)
}
export default handler
