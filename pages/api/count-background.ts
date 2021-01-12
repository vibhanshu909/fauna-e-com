import { NextApiHandler } from 'next'
export let countData = 0

const handler: NextApiHandler = (req, res) => {
  setTimeout(() => {
    countData += Math.round(Math.random() * 100)
  }, 1000)
  res.end('counting stated...')
}
export default handler
