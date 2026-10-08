export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary px-6 py-20 max-w-[1200px] mx-auto border-b border-dark">
      <div className="font-mono text-xs text-secondary tracking-widest uppercase mb-4">
        {"// SIGNAL BLACK EXECUTIVE"}
      </div>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter-display leading-tight mb-8">
        Executive <span className="text-accent">Product</span> Manager
      </h1>
      <p className="text-lg md:text-xl text-secondary max-w-2xl font-light mb-12">
        A dark-mode-default editorial portfolio system engineered with extreme precision, hairline dividers, and rationed vermilion accents.
      </p>
      <div className="flex flex-wrap gap-4 items-center">
        <button className="h-[29px] px-6 bg-accent text-primary rounded-pill text-sm font-medium hover:opacity-90 transition-opacity">
          Connect
        </button>
        <span className="inline-flex items-center gap-2 text-xs font-mono text-secondary">
          <span className="w-2 h-2 rounded-full bg-accent animate-live-pulse" />
          AVAILABLE FOR ADVISORY & ROLES
        </span>
      </div>
    </main>
  );
}
