
import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run server.tsx",
      desc: "run my server.tsx file",
      allow: [
        "net",
        "read"
      ]
    },
  },
};

export default config;