import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileCallBar from "./MobileCallBar";

/** Gabarit des pages légales : même chrome, lecture longue optimisée. */
export default function LegalShell({
  title,
  notice,
  children,
}: {
  title: string;
  notice?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="contenu" className="bg-white pb-24 pt-[120px] md:pt-[160px]">
        <div className="container-page max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-signal-ink)]"
          >
            <ArrowLeft size={14} weight="bold" aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>

          <h1 className="mt-7 text-[clamp(2rem,5vw,3.2rem)] text-[color:var(--text-on-light)]">
            {title}
          </h1>

          {notice && (
            <p className="mt-8 border-l-2 border-[color:var(--color-signal)] bg-[color:var(--color-signal-soft)] px-5 py-4 text-[0.9rem] leading-relaxed text-[color:var(--text-on-light)]">
              {notice}
            </p>
          )}

          <div className="mt-12 flex flex-col gap-10">{children}</div>
        </div>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="border-t border-[color:var(--line-light)] pt-8">
      <h2 className="text-[1.35rem] text-[color:var(--text-on-light)]">{heading}</h2>
      <div className="mt-3 text-[0.98rem] leading-relaxed text-[color:var(--text-on-light-muted)]">
        {children}
      </div>
    </section>
  );
}
