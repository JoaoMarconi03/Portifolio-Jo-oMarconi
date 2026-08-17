export default function Footer() {
  return (
    <footer className="border-t border-surface-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} João Victor Marconi</p>
        <p className="font-mono">
          Construído com Next.js, TypeScript e Claude Code como par de
          desenvolvimento.
        </p>
      </div>
    </footer>
  );
}
