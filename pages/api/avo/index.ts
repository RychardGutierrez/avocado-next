import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const database = new DB()
  const allEntries = await database.getAll()

  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ data: allEntries }))
}

export default allAvos
