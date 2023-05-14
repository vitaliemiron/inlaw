import { Ctx } from "blitz"

import { resolver } from "@blitzjs/rpc"

export default resolver.pipe(async (antiCSRFToken: string, ctx: Ctx) => {
  const rs = await fetch("http://localhost:3000/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "anti-csrf": antiCSRFToken,
    },
  })

  return rs.json()
})
