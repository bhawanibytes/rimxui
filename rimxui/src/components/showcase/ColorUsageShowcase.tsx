import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

type CodeExampleProps = {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
};

const CodeExample: React.FC<CodeExampleProps> = ({ title, description, code, children }) => (
  <div className="flex flex-col gap-4 p-6 border border-neutral-200 rounded-lg dark:border-neutral-700">
    <div className="flex flex-col gap-2">
      <h3 className="text-h6 text-neutral-900 dark:text-white">{title}</h3>
      <p className="text-body-sm text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
    <div className="flex flex-col gap-4">
      <div className="bg-neutral-50 p-4 rounded-md dark:bg-neutral-800">
        {children}
      </div>
      <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-md overflow-x-auto">
        <code className="text-body-sm">{code}</code>
      </pre>
    </div>
  </div>
);

export const ColorUsageShowcase: React.FC = () => {
  return (
    <div className="p-8 flex flex-col gap-12 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-h3 text-neutral-900 dark:text-white">Color Usage Examples</h1>
        <p className="text-body-lg text-neutral-600 dark:text-neutral-400">
          Examples of how to use our color system in different components and contexts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buttons Example */}
        <CodeExample
          title="Buttons"
          description="Different button variants using our color system"
          code={`<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Button
</button>
<button className="bg-error-500 hover:bg-error-600 text-white">
  Destructive Button
</button>
<button className="border border-neutral-200 hover:bg-neutral-50">
  Secondary Button
</button>`}
        >
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-md bg-primary-500 hover:bg-primary-600 text-white">
              Primary Button
            </button>
            <button className="px-4 py-2 rounded-md bg-error-500 hover:bg-error-600 text-white">
              Destructive Button
            </button>
            <button className="px-4 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800">
              Secondary Button
            </button>
          </div>
        </CodeExample>

        {/* Text Colors Example */}
        <CodeExample
          title="Text Colors"
          description="Using different text colors for hierarchy and emphasis"
          code={`<p className="text-neutral-900 dark:text-white">
  Primary Text
</p>
<p className="text-neutral-600 dark:text-neutral-400">
  Secondary Text
</p>
<p className="text-primary-500">Accent Text</p>`}
        >
          <div className="flex flex-col gap-2">
            <p className="text-neutral-900 dark:text-white">Primary Text</p>
            <p className="text-neutral-600 dark:text-neutral-400">Secondary Text</p>
            <p className="text-primary-500">Accent Text</p>
          </div>
        </CodeExample>

        {/* Alert States Example */}
        <CodeExample
          title="Alert States"
          description="Different alert states using semantic colors"
          code={`<div className="bg-success-50 border border-success-200 text-success-700">
  Success Alert
</div>
<div className="bg-error-50 border border-error-200 text-error-700">
  Error Alert
</div>
<div className="bg-warning-50 border border-warning-200 text-warning-700">
  Warning Alert
</div>`}
        >
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-md bg-success-50 border border-success-200 text-success-700 dark:bg-success-900/20 dark:border-success-800 dark:text-success-300">
              <div className="flex items-center gap-2">
                <DynamicIcon name="check-circle" className="w-5 h-5" />
                Success Alert
              </div>
            </div>
            <div className="p-4 rounded-md bg-error-50 border border-error-200 text-error-700 dark:bg-error-900/20 dark:border-error-800 dark:text-error-300">
              <div className="flex items-center gap-2">
                <DynamicIcon name="x-circle" className="w-5 h-5" />
                Error Alert
              </div>
            </div>
            <div className="p-4 rounded-md bg-warning-50 border border-warning-200 text-warning-700 dark:bg-warning-900/20 dark:border-warning-800 dark:text-warning-300">
              <div className="flex items-center gap-2">
                <DynamicIcon name="alert-triangle" className="w-5 h-5" />
                Warning Alert
              </div>
            </div>
          </div>
        </CodeExample>

        {/* Status Indicators Example */}
        <CodeExample
          title="Status Indicators"
          description="Using colors to indicate different states"
          code={`<span className="bg-success-500 text-white">Active</span>
<span className="bg-error-500 text-white">Inactive</span>
<span className="bg-warning-500 text-white">Pending</span>
<span className="bg-neutral-500 text-white">Draft</span>`}
        >
          <div className="flex flex-wrap gap-3">
            <span className="px-2 py-1 rounded-full text-body-xs bg-success-500 text-white">
              Active
            </span>
            <span className="px-2 py-1 rounded-full text-body-xs bg-error-500 text-white">
              Inactive
            </span>
            <span className="px-2 py-1 rounded-full text-body-xs bg-warning-500 text-white">
              Pending
            </span>
            <span className="px-2 py-1 rounded-full text-body-xs bg-neutral-500 text-white">
              Draft
            </span>
          </div>
        </CodeExample>

        {/* Background Colors Example */}
        <CodeExample
          title="Background Colors"
          description="Using different background colors for sections"
          code={`<div className="bg-primary-50 dark:bg-primary-900/20">
  Primary Background
</div>
<div className="bg-neutral-50 dark:bg-neutral-800">
  Secondary Background
</div>
<div className="bg-accent-50 dark:bg-accent-900/20">
  Accent Background
</div>`}
        >
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-md bg-primary-50 text-primary-900 dark:bg-primary-900/20 dark:text-primary-100">
              Primary Background
            </div>
            <div className="p-4 rounded-md bg-neutral-50 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              Secondary Background
            </div>
            <div className="p-4 rounded-md bg-accent-50 text-accent-900 dark:bg-accent-900/20 dark:text-accent-100">
              Accent Background
            </div>
          </div>
        </CodeExample>

        {/* Border Colors Example */}
        <CodeExample
          title="Border Colors"
          description="Using different border colors for emphasis and separation"
          code={`<div className="border border-neutral-200 dark:border-neutral-700">
  Default Border
</div>
<div className="border-2 border-primary-500">
  Primary Border
</div>
<div className="border border-error-300">
  Error Border
</div>`}
        >
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
              Default Border
            </div>
            <div className="p-4 rounded-md border-2 border-primary-500">
              Primary Border
            </div>
            <div className="p-4 rounded-md border border-error-300 dark:border-error-700">
              Error Border
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  );
};

export default ColorUsageShowcase; 