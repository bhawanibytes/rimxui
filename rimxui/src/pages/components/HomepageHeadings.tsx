const HomepageHeadings = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-12 flex flex-col items-center gap-3">
      <h1 className="w-full  text-center font-bold text-4xl">{title}</h1>
      <p className="text-zinc-400">{subtitle}</p>
    </div>
  );
};

export default HomepageHeadings;
