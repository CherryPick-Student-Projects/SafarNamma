export default function PageLoading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-28" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-accent" />
      <p className="text-muted">Loading…</p>
    </div>
  );
}
