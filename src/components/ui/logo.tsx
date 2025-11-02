import { cn } from "@/lib/utils";
import logoColor from "@/assets/seller-resolve-logo.jpg";
import logoWhite from "@/assets/seller-resolve-logo-white.png";
interface LogoProps {
  variant?: 'color' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}
const sizeMap = {
  sm: 'h-8',
  // 32px
  md: 'h-12',
  // 48px
  lg: 'h-16',
  // 64px
  xl: 'h-20' // 80px
};
export const Logo = ({
  variant = 'color',
  size = 'md',
  className,
  showText = false
}: LogoProps) => {
  const logoSrc = variant === 'white' ? logoWhite : logoColor;
  return <div className={cn("flex items-center gap-2", className)}>
      
      {showText && <span className={cn("font-bold", size === 'sm' && "text-sm", size === 'md' && "text-base", size === 'lg' && "text-xl", size === 'xl' && "text-2xl", variant === 'white' ? "text-white" : "text-foreground")}>
          Seller Resolve
        </span>}
    </div>;
};