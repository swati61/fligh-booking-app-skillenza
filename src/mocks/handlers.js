// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.post('/booking', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Successful!"
      })
    )
  }),

  rest.get('/flights', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          "id": 1,
          "company": "Surya Airline, India",
          "source": {
              "key": "BLR",
          },
          "destination": {
              "key":"DEL",
          },
          "is_oneway": true,
          "price": 4735,
          "duration": 135,
          "arrival": new Date(),
          "departure": new Date(),
        }
      ]),
    )
  }),
]
