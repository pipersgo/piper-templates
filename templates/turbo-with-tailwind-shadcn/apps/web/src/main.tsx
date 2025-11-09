import { createRoot } from "react-dom/client";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Header, Counter } from "@repo/ui";

const App = () => (
  <div className="flex flex-col items-center justify-center gap-12 pt-20">
    <div className="flex gap-8">
      <a href="https://vitejs.dev">
        <img src="/vite.svg" className="size-20 rounded-lg" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/">
        <img
          src={typescriptLogo}
          className="size-20 rounded-lg"
          alt="TypeScript logo"
        />
      </a>
    </div>
    <Header title="Web" className="text-2xl font-bold" />
    <Counter variant="outline" size="lg" />
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
