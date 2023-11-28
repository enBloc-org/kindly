'use client';

const TestingSentry = () => {
  return (
    <div>
      <h1>TestingSentry</h1>
      <button
        type='button'
        onClick={() => {
          throw new Error('Sentry Test Error');
        }}
      >
        Break the world
      </button>
    </div>
  );
};

export default TestingSentry;
