import PreviewWrapper from "../PreviewWrapper";

const ColorPreview = () => {
  return (
    <div className="space-y-8">
      {/* Primary Colors */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Primary Colors</h3>
        <div className="grid grid-cols-5 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
            <div key={weight} className="space-y-1.5">
              <div className={`h-10 w-full rounded-lg bg-primary-${weight}`} />
              <div className="px-0.5">
                <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {weight}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  primary-{weight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neutral Colors */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Neutral Colors</h3>
        <div className="grid grid-cols-5 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
            <div key={weight} className="space-y-1.5">
              <div className={`h-10 w-full rounded-lg bg-neutral-${weight}`} />
              <div className="px-0.5">
                <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {weight}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  neutral-{weight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Colors */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Success Colors</h3>
        <div className="grid grid-cols-5 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
            <div key={weight} className="space-y-1.5">
              <div className={`h-10 w-full rounded-lg bg-success-${weight}`} />
              <div className="px-0.5">
                <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {weight}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  success-{weight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Error Colors */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Error Colors</h3>
        <div className="grid grid-cols-5 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
            <div key={weight} className="space-y-1.5">
              <div className={`h-10 w-full rounded-lg bg-error-${weight}`} />
              <div className="px-0.5">
                <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {weight}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  error-{weight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const colorCode = `// Example usage of colors
// Primary colors
<div className="bg-primary-50">Light primary background</div>
<div className="bg-primary-500">Main primary color</div>
<div className="bg-primary-900">Dark primary background</div>

// Neutral colors
<div className="bg-neutral-50">Light neutral background</div>
<div className="bg-neutral-500">Main neutral color</div>
<div className="bg-neutral-900">Dark neutral background</div>

// Success colors
<div className="bg-success-50">Light success background</div>
<div className="bg-success-500">Main success color</div>
<div className="bg-success-900">Dark success background</div>

// Error colors
<div className="bg-error-50">Light error background</div>
<div className="bg-error-500">Main error color</div>
<div className="bg-error-900">Dark error background</div>

// Text colors
<p className="text-primary-500">Primary text</p>
<p className="text-neutral-500">Neutral text</p>
<p className="text-success-500">Success text</p>
<p className="text-error-500">Error text</p>`;

export const ColorShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Colors</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          A comprehensive color system with semantic colors for consistent theming.
        </p>
      </div>

      <PreviewWrapper
        label="Color Examples"
        preview={<ColorPreview />}
        code={colorCode}
        variant="default"
      />
    </div>
  );
};

export default ColorShowcase; 