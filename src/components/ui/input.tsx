import * as React from 'react'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  const [showPassword, setShowPassword] = React.useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='relative w-full'>
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        data-slot='input'
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary-1 selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-primary-1',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          type === 'password' && 'pr-10',
          className
        )}
        {...props}
      />
      {type === 'password' && (
        <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer !bg-none'>
          {showPassword ? (
            <EyeOff
              onClick={togglePassword}
              className='h-4 w-4 text-gray-500'
            />
          ) : (
            <Eye onClick={togglePassword} className='h-4 w-4 text-gray-500' />
          )}
        </div>
      )}
    </div>
  )
}

export { Input }
