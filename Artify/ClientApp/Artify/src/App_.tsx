import { Suspense } from 'react';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import './App.css';

function App() {
  return (
    <>
      {/* <ExampleFetch /> */}
      <ResponsiveAppBar />
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
