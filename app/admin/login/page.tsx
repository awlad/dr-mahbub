import LoginForm from './LoginForm'

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>
}) {
  const params = await searchParams
  const next = params.next || '/admin'
  const hasError = params.error === '1'

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <LoginForm next={next} hasError={hasError} />
    </div>
  )
}

