import React from "react";

// Defining the type for SkeletonBlock props
interface SkeletonBlockProps {
  width: string;
  height: string;
  circle?: boolean;
  className?: string;
}

// SkeletonBlock component
const SkeletonBlock: React.FC<SkeletonBlockProps> = ({
  width,
  height,
  circle = false,
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${
        circle ? "rounded-full" : "rounded-md"
      } ${className}`}
      style={{ width, height }}
    />
  );
};

// Defining the type for Skeleton props
interface SkeletonProps {
  variant: "avatar" | "card" | "blog" | "default";
}

// Main Skeleton component with variants
const Skeleton: React.FC<SkeletonProps> = ({ variant }) => {
  switch (variant) {
    case "avatar":
      return (
        <div className="flex items-center space-x-4">
          <SkeletonBlock width="50px" height="50px" circle />
          <div className="flex flex-col space-y-2">
            <SkeletonBlock width="100px" height="16px" />
            <SkeletonBlock width="140px" height="12px" />
          </div>
        </div>
      );

    case "card":
      return (
        <div className="w-full p-4 border border-gray-200 rounded-md space-y-3">
          <SkeletonBlock width="100%" height="150px" />
          <SkeletonBlock width="60%" height="20px" />
          <SkeletonBlock width="80%" height="14px" />
        </div>
      );

    case "blog":
      return (
        <div className="space-y-3">
          <SkeletonBlock width="100%" height="200px" />
          <SkeletonBlock width="70%" height="24px" />
          <SkeletonBlock width="100%" height="14px" />
          <SkeletonBlock width="90%" height="14px" />
        </div>
      );

    default:
      return <SkeletonBlock width="100%" height="20px" />;
  }
};

export default Skeleton;
export { SkeletonBlock };
