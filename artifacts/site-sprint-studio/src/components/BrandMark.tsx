import { cn } from '@/lib/utils';

type BrandMarkProps = {
  inverted?: boolean;
  className?: string;
  markClassName?: string;
};

export function BrandMark({ inverted = false, className, markClassName }: BrandMarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'jolt-mark',
          inverted ? 'jolt-mark-inverted' : 'jolt-mark-standard',
          markClassName,
        )}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} />
        ))}
      </span>
      <span className={cn('font-display text-2xl font-bold leading-none tracking-normal', inverted && 'text-background')}>
        Jolt
      </span>
    </span>
  );
}
