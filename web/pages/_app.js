import Cart from "../components/Cart";

function MyApp({ Component, pageProps }) {
  return (
    <Cart>
      <Component {...pageProps} />;
    </Cart>
  );
}

export default MyApp;
