import Accordion from "./components/accordion/accordion";

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
    title: "What is your return policy?",
    content: "We offer a 30-day return policy for all unused items.",
  },
  {
    title: "How long does shipping take?",
    content: "Shipping typically takes 3-5 business days.",
  },
];

export default function App() {
  return (
    <div className="p-4">
      <Accordion
        items={faqItems}
        containerClass="bg-gray-100"
        itemClass="shadow-lg"
        titleClass="text-lg text-primary"
        contentClass="text-sm text-textColor-secondary"
      />
    </div>
  );
}