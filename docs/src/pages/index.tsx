import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <header className={clsx("hero hero--primary")}>
        <div className="container flex flex-col items-center justify-center">
          <Heading as="h1" className={clsx("hero__title")}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <button className="rounded-lg p-2 font-bold border-none">
            <Link to="/docs/get-started">Get Started</Link>
          </button>
        </div>
      </header>
    </Layout>
  );
}
