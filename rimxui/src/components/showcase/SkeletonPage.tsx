import Skeleton, { SkeletonBlock } from "../skeleton/skeleton";

const SkeletonPage = () => {
  return (
    <div className="space-y-6 p-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex space-x-8">
          <SkeletonBlock
            width="100px"
            height="100px"
            className="flex-shrink-0  rounded-full"
          />
          <div className="flex flex-col space-y-5 w-full">
            <SkeletonBlock width="60%" height="16px" />
            <SkeletonBlock width="40%" height="14px" />
            <SkeletonBlock width="40%" height="12px" />
            <Skeleton variant="default" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonPage;
