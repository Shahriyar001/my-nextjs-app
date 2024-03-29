"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-center text-4xl">Something went wrong</h1>
      <h1>{error.message}</h1>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default ErrorPage;
