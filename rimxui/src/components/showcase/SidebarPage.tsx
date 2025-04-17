import {
               SidebarBasic,
               SidebarPro,
               SidebarCompact,
               SidebarWithSections,
             } from "../Sidebar/sidebar";
             
             import PreviewWrapper from "../PreviewWrapper";
             
             export const SidebarPage = () => {
               return (
                 <div className="space-y-10 p-6">
                   <h2 className="text-2xl font-bold tracking-tight">Sidebar</h2>
                   <p className="text-muted-foreground">
                     Different variations of reusable sidebars styled using Tailwind CSS and Lucide icons.
                   </p>
             
                   <PreviewWrapper
                     label="Basic Sidebar"
                     preview={<SidebarBasic />}
                     code={`<SidebarBasic />`}
                   />
             
                   <PreviewWrapper
                     label="Professional Sidebar (with Icons, Profile, Search)"
                     preview={<SidebarPro />}
                     code={`<SidebarPro />`}
                   />
             
                   <PreviewWrapper
                     label="Compact Sidebar"
                     preview={<SidebarCompact />}
                     code={`<SidebarCompact />`}
                   />
             
                   <PreviewWrapper
                     label="Sidebar With Sections"
                     preview={<SidebarWithSections />}
                     code={`<SidebarWithSections />`}
                   />
                 </div>
               );
             };
             
             export default SidebarPage;
             