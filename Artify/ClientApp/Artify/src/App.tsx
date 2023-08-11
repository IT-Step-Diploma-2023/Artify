import ExampleFetch from "./assets/components/ExampleFetch";
import { Suspense } from 'react';

function App() {
  return (
    <>
    <ExampleFetch/>
    </>
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}
