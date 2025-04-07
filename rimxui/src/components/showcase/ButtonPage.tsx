import PreviewWrapper from "../PreviewWrapper";
import Button from "../ui/Button";

const ButtonPage = () => {
  return (
    <div className="space-y-12 max-w-3xl">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <span>Components</span>
          <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
          <span>Button</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <div>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            A highly customizable and reusable Button component designed for
            flexibility and consistency across the UI. It supports multiple
            visual styles (variant), different sizes (size), and optional icons
            using the Lucide icon library.
          </p>
          <section className="p-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Key Features:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <span className="font-medium text-gray-900">Variants: </span>
                Supports styles like
                <code className="bg-gray-100 px-1 rounded">default</code>,
                <code className="bg-gray-100 px-1 rounded">secondary</code>,
                <code className="bg-gray-100 px-1 rounded">outline</code>, and
                more. it adaptable to different UI use cases.
              </li>
              <li>
                <span className="font-medium text-gray-900">Sizes: </span>
                Offers <code className="bg-gray-100 px-1 rounded">sm</code> for
                small,
                <code className="bg-gray-100 px-1 rounded">md</code> for medium,
                and
                <code className="bg-gray-100 px-1 rounded">lg</code> for large
                options to suit different layout needs.
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  Icon Support:{" "}
                </span>
                Accepts an optional
                <code className="bg-gray-100 px-1 rounded">icon</code> prop that
                strictly enforces the use of Lucide icons for visual
                consistency.
              </li>
            </ul>
          </section>
        </div>
      </div>

      <h2 className="text-2xl font-bold tracking-tight">Variants</h2>

      <PreviewWrapper
        label="Default"
        preview={<Button />}
        code={`
import Button from "@components/Button";

<Button /> 
<Button size="sm" /> // small
<Button size="md" />  // medium
<Button size="lg" />  // large
        `}
      />

      <PreviewWrapper
        label="Secondary"
        preview={<Button variant="secondary" />}
        code={`
import Button from "@components/Button";

<Button variant="secondary" /> 
<Button variant="secondary" size="sm" /> // small
<Button variant="secondary" size="md" />  // medium
<Button variant="secondary" size="lg" />  // large
        `}
      />

      <PreviewWrapper
        label="Outline"
        preview={<Button variant="outline" />}
        code={`
import Button from "@components/Button";

<Button variant="outline" /> 
<Button variant="outline" size="sm" /> // small
<Button variant="outline" size="md" />  // medium
<Button variant="outline" size="lg" />  // large
        `}
      />

      <PreviewWrapper
        label="Destructive"
        preview={<Button variant="destructive" />}
        code={`
import Button from "@components/Button";

<Button variant="destructive" /> 
<Button variant="destructive" size="sm" /> // small
<Button variant="destructive" size="md" />  // medium
<Button variant="destructive" size="lg" />  // large
        `}
      />

      <PreviewWrapper
        label="Icon"
        preview={<Button variant="icon" icon="camera" />}
        code={`
import Button from "@components/Button";

<Button variant="icon" icon="camera" /> 
<Button variant="icon" size="sm" icon="camera" /> // small
<Button variant="icon" size="md" icon="camera" />  // medium
<Button variant="icon" size="lg" icon="camera" />  // large
        `}
      />

      <PreviewWrapper
        label="With Icon"
        preview={<Button variant="withIcon" icon="home" />}
        code={`
import Button from "@components/Button";

<Button variant="withIcon" icon="home" /> 
<Button variant="withIcon" size="sm" icon="home" /> // small
<Button variant="withIcon" size="md" icon="home" />  // medium
<Button variant="withIcon" size="lg" icon="home" />  // large
        `}
      />
    </div>
  );
};

export default ButtonPage;
