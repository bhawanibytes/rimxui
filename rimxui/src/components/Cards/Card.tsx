const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`${className} flex flex-col px-4 py-6 rounded-lg border border-neutral-200 shadow-md shadow-neutral-200/50 w-80 bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-900/50 transition-all duration-300 ease-in-out`}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`${className} text-h5 text-neutral-900 dark:text-white px-4`}
      {...props}
    />
  );
};

const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={`${className} text-body-sm-medium text-neutral-500 dark:text-neutral-400 px-4`}
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={`${className} text-body-sm text-neutral-700 dark:text-neutral-300 px-4 py-4`} {...props} />
  );
};

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={`${className} text-body-xs text-neutral-500 dark:text-neutral-400 px-4`} {...props} />
  );
};

export { Card, CardTitle, CardDescription, CardContent, CardFooter };
