import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({
  children,
  className,
}) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </div>
  );
};
