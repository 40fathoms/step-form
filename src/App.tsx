import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const _fgdsfad = {
      1: 34234,
      2: 45243
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
