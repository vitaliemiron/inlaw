import { api } from "src/blitz-server"
import db from "db"
import { Ctx } from "@blitzjs/next"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!)

export default api(async (req, res, ctx: Ctx) => {
  // ctx.session.$authorize()
  // const publicData = ctx.session.$publicData

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1N7h3lLWLZUQrZWZRWK7X73b",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `http://localhost:3000/consultation/?success=true`,
        cancel_url: `http://localhost:3000/consultation/?canceled=true`,
      })
      res.status(200).json({ sessionURL: session.url })
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
  // if (_req.method === "POST") {
  //   try {
  //     // Create Checkout Sessions from body params.
  //     const session = await stripe.checkout.sessions.create({
  //       line_items: [
  //         {
  //           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //           price: "{{PRICE_ID}}",
  //           quantity: 1,
  //         },
  //       ],
  //       mode: "payment",
  //       success_url: `${_req.headers.origin}/?success=true`,
  //       cancel_url: `${_req.headers.origin}/?canceled=true`,
  //     })
  //     res.redirect(303, session.url)
  //   } catch (err) {
  //     res.status(err.statusCode || 500).json(err.message)
  //   }
  // } else {
  //   res.setHeader("Allow", "POST")
  //   res.status(405).end("Method Not Allowed")
  // }
})
