const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`${className} flex flex-col px-3 py-8 rounded-xl border shadow-lg w-80 bg-white transition-all duration-300 ease-in-out`}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`${className} leading-none font-semibold px-4 text-2xl `}
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
      className={`${className}    font-semibold px-4 text-gray-500 text-sm`}
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={`${className}  px-4 py-5  text-sm`} {...props} />;
};
const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={`${className}  px-4 text-xs`} {...props} />;
};

export { Card, CardTitle, CardDescription, CardContent, CardFooter };
