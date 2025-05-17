import { 
  Links, 
  Meta, 
  Outlet, 
  Scripts, 
  ScrollRestoration, 
  
} from "@remix-run/react";
import remixReact from "@remix-run/react";
const { useCatch } = remixReact;
import "./tailwind.css";
import Error404 from "./components/Error404";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}


// ✅ CatchBoundary for 404 errors
export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <Error404 />;
  }

  return (
    <div>
      <h1>{caught.status} {caught.statusText}</h1>
      <p>{caught.data || "Something went wrong."}</p>
    </div>
  );
}


export default function App() {
  return <Outlet />;
}
