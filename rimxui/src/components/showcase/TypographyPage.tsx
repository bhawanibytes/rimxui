import PreviewWrapper from "../PreviewWrapper";

const TypographyPreview = () => {
  return (
    <div className="space-y-8">
      {/* Headings */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Headings</h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-h1">Heading 1</h1>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-h1</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-h2">Heading 2</h2>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-h2</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-h3">Heading 3</h3>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-h3</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-h4">Heading 4</h4>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-h4</p>
          </div>
          <div className="space-y-1">
            <h5 className="text-h5">Heading 5</h5>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-h5</p>
          </div>
          <div className="space-y-1">
            <h6 className="text-h6">Heading 6</h6>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-h6</p>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Body Text</h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-body-lg">Large Body Text</p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-body-lg</p>
          </div>
          <div className="space-y-1">
            <p className="text-body-md">Medium Body Text</p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-body-md</p>
          </div>
          <div className="space-y-1">
            <p className="text-body-sm">Small Body Text</p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-body-sm</p>
          </div>
          <div className="space-y-1">
            <p className="text-body-xs">Extra Small Body Text</p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">text-body-xs</p>
          </div>
        </div>
      </div>

      {/* Font Weights */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Font Weights</h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-body-md font-regular">Regular Text</p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">font-regular</p>
          </div>
          <div className="space-y-1">
            <p className="text-body-md font-medium">Medium Text</p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">font-medium</p>
          </div>
          <div className="space-y-1">
            <p className="text-body-md font-semibold">Semibold Text</p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">font-semibold</p>
          </div>
          <div className="space-y-1">
            <p className="text-body-md font-bold">Bold Text</p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">font-bold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const typographyCode = `// Headings
<h1 className="text-h1">Heading 1</h1>
<h2 className="text-h2">Heading 2</h2>
<h3 className="text-h3">Heading 3</h3>
<h4 className="text-h4">Heading 4</h4>
<h5 className="text-h5">Heading 5</h5>
<h6 className="text-h6">Heading 6</h6>

// Body Text
<p className="text-body-lg">Large Body Text</p>
<p className="text-body-md">Medium Body Text</p>
<p className="text-body-sm">Small Body Text</p>
<p className="text-body-xs">Extra Small Body Text</p>

// Font Weights
<p className="font-regular">Regular Text</p>
<p className="font-medium">Medium Text</p>
<p className="font-semibold">Semibold Text</p>
<p className="font-bold">Bold Text</p>

// Combinations
<p className="text-body-lg font-medium">Large Medium Text</p>
<p className="text-body-sm font-semibold">Small Semibold Text</p>`;

export const TypographyPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Typography</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          A comprehensive typography system with consistent text styles and weights.
        </p>
      </div>

      <PreviewWrapper
        label="Typography Examples"
        preview={<TypographyPreview />}
        code={typographyCode}
        variant="default"
      />
    </div>
  );
};

export default TypographyPage; 