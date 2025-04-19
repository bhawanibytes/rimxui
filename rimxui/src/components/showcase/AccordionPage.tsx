import Accordion from "../Acoordion/accordion";
import PreviewWrapper from "../PreviewWrapper";
import { CliTabs } from "../CliTabs/CliTab";

const faqItems = [
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for all unused items in their original packaging.",
  },
  {
    title: "How long does shipping take?",
    content:
      "Shipping typically takes 3-5 business days depending on your location.",
  },
  {
    title: "Do you offer international shipping?",
    content:
      "Yes, we offer international shipping to select countries with additional charges.",
  },
  {
    title: "How can I track my order?",
    content:
      "Once your order is shipped, we will provide a tracking number via email.",
  },
];

export default function AccordionPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <section id="#installation">
          <h1 className="text-h4 mb-6">Installation</h1>
          <CliTabs
            commands={{
              pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/accordion.json",
              npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/accordion.json",
              bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/accordion.json",
              yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/accordion.json",
            }}
          />
        </section>
        <PreviewWrapper
          label="FAQ"
          variant="centered"
          preview={
            <>
              <Accordion
                items={faqItems}
                containerClass="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl border dark:border-zinc-700"
                itemClass="mb-4 shadow-md dark:shadow-none border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden"
                titleClass="text-lg font-medium p-4 cursor-pointer bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 text-gray-800 dark:text-gray-100"
                contentClass="p-4 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900"
              />
            </>
          }
          code={`           
            import {Accordion} from "@/components/ui/accordion";
export function AccordionPage() {
const faqItems = [
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for all unused items in their original packaging.",
  },
  {
    title: "How long does shipping take?",
    content:
      "Shipping typically takes 3-5 business days depending on your location.",
  },
  {
    title: "Do you offer international shipping?",
    content:
      "Yes, we offer international shipping to select countries with additional charges.",
  },
  {
    title: "How can I track my order?",
    content:
      "Once your order is shipped, we will provide a tracking number via email.",
  },
];
return (
<Accordion
items={faqItems}
containerClass="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl border dark:border-zinc-700"
itemClass="mb-4 shadow-md dark:shadow-none border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden"
titleClass="text-lg font-medium p-4 cursor-pointer bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-300 text-gray-800 dark:text-gray-100"
contentClass="p-4 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900"
/>
)
          `}
        />
      </div>
    </div>
  );
}
