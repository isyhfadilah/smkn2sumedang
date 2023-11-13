import '@unocss/reset/tailwind.css'
import '@/shared/styles/app.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/smkn2sumedang.png" />
      </head>
      <body className="font-quicksand">{children}</body>
    </html>
  )
}
