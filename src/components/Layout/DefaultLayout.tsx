const DefaultLayout = ({ children }: any) => {
  return (
    <main className="h-full min-h-screen  overflow-y-auto mx-auto max-w-7xl  md:px-6">
      {children}
    </main>
  );
};

export default DefaultLayout;
