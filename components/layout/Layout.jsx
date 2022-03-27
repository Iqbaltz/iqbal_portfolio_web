import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout(props) {
  const { children, socials } = props;
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
      <Footer socials={socials} />
    </>
  );
}
