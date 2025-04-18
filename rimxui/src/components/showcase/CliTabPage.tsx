import { CliTabs } from "../CliTabs/CliTab"

const CliTabPage = () => {
  return (
    <div>
        <CliTabs
            commands={{
              pnpm: "pnpm's example command",
              npm: "npx's example command",
              bun: "bunx's example command",
              yarn: "yarn's example command",
            }}
          />
    </div>
  )
}

export default CliTabPage