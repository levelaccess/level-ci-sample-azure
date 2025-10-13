import type { Config } from "@level-ci/cli";

export default {
  organization: "YOUR_ORGANIZATION_HERE",
  project: "YOUR_PROJECT_HERE",
  token: process.env.LEVEL_CI_TOKEN,
  reportPaths: ["./level-ci-reports"],
} satisfies Config;
