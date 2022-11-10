import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';

export default function Home() {
  return (
    <div>
      <header className="header container mt-lg-5">
        <Header></Header>
      </header>

      <main className="content"></main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
