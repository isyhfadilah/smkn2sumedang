import '@unocss/reset/tailwind.css'
import '@/shared/styles/app.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo-smea.svg" />
      </head>
      <body className="font-quicksand">{children}</body>
    </html>
  )
}
