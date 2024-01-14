import { forwardRef } from 'react'
import clsx from 'clsx'

export function AppScreen({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex', className)} {...props}>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})
AppScreen.Header.displayName = 'AppScreen.Header'

AppScreen.Title = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})
AppScreen.Title.displayName = 'AppScreen.Title'

AppScreen.Subtitle = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})
AppScreen.Subtitle.displayName = 'AppScreen.Subtitle'

AppScreen.Body = forwardRef<
  React.ElementRef<'div'>,
  { className?: string, children: React.ReactNode }
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('bg-white h-full', className)}
    >
      {children}
    </div>
  )
})
AppScreen.Body.displayName = 'AppScreen.Body'
