import PreviewWrapper from "../PreviewWrapper";
import { BreadcrumbsBasic } from "../Breadcrump/BreadcrumpsBasic";
import { BreadcrumbsGhost } from "../Breadcrump/BreadcrumpsOutlined";
import { BreadcrumbsOutlined } from "../Breadcrump/BreadcrumpsGhost";
const breadcrumbItems = [
               { label: "Home", href: "/" },
               { label: "Docs", href: "/docs" },
               { label: "Breadcrumbs" },
];

function BreadcrumbsPage() {
               return (
                              <div className="space-y-10 p-6">
                                             <PreviewWrapper
                                                            label="Basic Breadcrumbs"
                                                            preview={<BreadcrumbsBasic items={breadcrumbItems} />}
                                                            code={`<BreadcrumbsBasic items={${JSON.stringify(breadcrumbItems, null, 2)}} />`}
                                             />

                                             <PreviewWrapper
                                                            label="Outlined Breadcrumbs"
                                                            preview={<BreadcrumbsOutlined items={breadcrumbItems} />}
                                                            code={`<BreadcrumbsOutlined items={${JSON.stringify(breadcrumbItems, null, 2)}} />`}
                                             />

                                             <PreviewWrapper
                                                            label="Ghost Breadcrumbs"
                                                            preview={<BreadcrumbsGhost items={breadcrumbItems} />}
                                                            code={`<BreadcrumbsGhost items={${JSON.stringify(breadcrumbItems, null, 2)}} />`}
                                             />
                              </div>
               );
}

export default BreadcrumbsPage;
