import { cn } from "@/app/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn("grid gap-4 w-full", className)}>{children}</div>;
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
        "group/bento relative flex h-full flex-col overflow-hidden rounded-lg border border-rule bg-surface p-4 transition-colors duration-300 hover:border-signal",
        className,
      )}
    >
      <div className="flex-1 mb-4 overflow-hidden">{header}</div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex-shrink-0 text-left">
        <div className="flex justify-start">{icon}</div>
        <div className="mb-1 mt-2 text-left font-mono text-caption font-medium text-ink">
          {title}
        </div>
        <div className="text-left text-micro leading-relaxed text-muted">
          {description}
        </div>
      </div>
    </div>
  );
};
