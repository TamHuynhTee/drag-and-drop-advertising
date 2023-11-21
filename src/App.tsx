import './App.css';
import { ContentContextProvider } from './contexts/ContentContext';
import AppRouter from './router';

function App() {
  return (
    <ContentContextProvider>
      <AppRouter />
    </ContentContextProvider>
  );
}

export default App;
