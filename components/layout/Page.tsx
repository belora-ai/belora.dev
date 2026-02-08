import { cn } from "@/lib/utils";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Page({
  as: Component = "main",
  className,
  children,
  ...props
}: PageProps) {
  return (
    <Component
      id="page-content"
      className={cn("min-h-screen flex flex-col", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
