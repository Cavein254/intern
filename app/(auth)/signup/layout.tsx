export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className='layout'>
        {children}
    </section>
  )
}
