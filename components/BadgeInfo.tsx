import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type BadgeProps = {
  icon?: React.ReactNode
  text: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

export function BadgeInfo({ icon, text, variant, className }: BadgeProps) {
  return (
    <Badge className={cn('flex gap-2 p-2', className)} variant={variant ?? 'default'}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Badge>
  )
}
