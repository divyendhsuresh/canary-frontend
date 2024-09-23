import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./utils";
import "./App.css";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashBoard />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
