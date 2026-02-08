import { cn } from "@/lib/utils";
import { LAYOUT_CONFIG } from "@/lib/constants/layout";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  fill?: boolean;
  noGutter?: boolean;
}

export function Container({
  as: Component = "section",
  className,
  children,
  style,
  noGutter,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        className
      )}
      style={noGutter ? style
        : {
        maxWidth: LAYOUT_CONFIG.container.maxWidth,
        paddingLeft: LAYOUT_CONFIG.container.padding,
        paddingRight: LAYOUT_CONFIG.container.padding,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
