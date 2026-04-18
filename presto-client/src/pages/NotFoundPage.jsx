import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full min-h-screen flex-col">
      <section className="bg-primary px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
            Error
          </p>
          <h1 className="text-6xl font-bold leading-tight text-zinc-200 sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg leading-7 text-zinc-300">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6 flex gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products" variant='primary'>View Products</Button>
          </div>
        </div>
      </section>

      <section className="h-full flex-1 border-zinc-900 bg-secondary px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Explore the site</h2>
          
          <div className="mt-6 space-y-3">
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <h3 className="font-semibold text-zinc-900">Home</h3>
              <p className="mt-1 text-sm text-zinc-600">Return to the homepage</p>
              <Button to="/" className="mt-3" variant='primary'>Go Home</Button>
            </div>
            
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <h3 className="font-semibold text-zinc-900">Products</h3>
              <p className="mt-1 text-sm text-zinc-600">Browse all featured store items</p>
              <Button to="/products" className="mt-3" variant='primary'>View Products</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
