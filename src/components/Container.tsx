import { cn } from '../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | 'prose';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  centerContent?: boolean;
  className?: string;
}

export function Container({
  size = '7xl',
  padding = 'md',
  centerContent = false,
  className,
  children,
  ...props
}: React.PropsWithChildren<ContainerProps>) {
  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-4',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-10',
    xl: 'px-8 sm:px-10 lg:px-12',
    '2xl': 'px-10 sm:px-12 lg:px-16',
  };

  return (
    <div
      className={cn(
        'w-full mx-auto',
        `max-w-${size}`,
        paddingClasses[padding],
        { 'flex flex-col items-center text-center': centerContent },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
