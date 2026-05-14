import { cn } from "@/app/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid gap-4 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border-2 border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:border-white/[0.2] flex flex-col h-full",
        className
      )}
    >
      <div className="flex-1 mb-4 overflow-hidden">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex-shrink-0 text-left">
        <div className="flex justify-start">{icon}</div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1 mt-2 text-base text-left">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 text-left leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
