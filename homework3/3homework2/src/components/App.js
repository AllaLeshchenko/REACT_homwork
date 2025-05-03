import List from "./List";

function App() {
  return (
    <div style={{height: '100vh',
                 width: '70vh',
                 display: 'flex', 
                 justifyContent: 'center', 
                 margin: 'auto',
                 borderRadius: '20px',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                 alignItems: 'center',
                 background: 'pink'}}>
      <List />
    </div>
  );
}

export default App;
