import PreviewWrapper from "../PreviewWrapper";
import { BreadcrumbsBasic } from "../Breadcrump/BreadcrumpsBasic";
import { BreadcrumbsGhost } from "../Breadcrump/BreadcrumpsOutlined";
import { BreadcrumbsOutlined } from "../Breadcrump/BreadcrumpsGhost";
import { CliTabs } from "../CliTabs/CliTab";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Breadcrumbs" },
];

function BreadcrumbsPage() {
  return (
    <div className="space-y-10 p-6">
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/breadcrump.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/breadcrump.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/breadcrump.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/breadcrump.json",
          }}
        />
      </section>
      <PreviewWrapper
        label="Basic Breadcrumbs"
        preview={<BreadcrumbsBasic items={breadcrumbItems} />}
        code={`import { BreadcrumbsBasic } from "@/components/ui/breadcrumbs"
function breadcrumb(){
return(
    <BreadcrumbsBasic items={${JSON.stringify(breadcrumbItems, null, 2)}} />
    )
}
                `}
      />

      <PreviewWrapper
        label="Outlined Breadcrumbs"
        preview={<BreadcrumbsOutlined items={breadcrumbItems} />}
        code={`
            import { BreadcrumbsOutlined } from "@/components/ui/breadcrumbs"
function breadcrumb(){
return(
    <BreadcrumbsOutlined items={${JSON.stringify(breadcrumbItems, null, 2)}} />
    )
}`}
      />

      <PreviewWrapper
        label="Ghost Breadcrumbs"
        preview={<BreadcrumbsGhost items={breadcrumbItems} />}
        code={`
            import { BreadcrumbsGhost } from "@/components/ui/breadcrumbs"
function breadcrumb(){
return(
    <BreadcrumbsGhost items={${JSON.stringify(breadcrumbItems, null, 2)}} />
    )
}`}
      />
    </div>
  );
}

export default BreadcrumbsPage;
