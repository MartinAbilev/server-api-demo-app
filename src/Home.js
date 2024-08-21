import React, { Suspense } from "react";

const HomeModule = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import("./components/HomeModule")
  );
});

const Home = () => {  console.log('Home use server')

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomeModule />
    </Suspense>
  );
};
export default Home;
