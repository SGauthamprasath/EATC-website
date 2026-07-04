type Props = {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onChange?: (value: number) => void;
};

const sizeClasses: Record<NonNullable<Props['size']>, string> = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-3xl',
};

export default function StarRating({ rating, size = 'md', interactive = false, onChange }: Props) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={interactive ? () => onChange?.(value) : undefined}
          className={`material-symbols-outlined ${sizeClasses[size]} ${
            value <= rating ? 'text-primary' : 'text-outline-variant'
          } ${interactive ? 'cursor-pointer transition-transform hover:scale-110' : ''}`}
          style={{ fontVariationSettings: `'FILL' ${value <= rating ? 1 : 0}` }}
        >
          star
        </span>
      ))}
    </div>
  );
}
