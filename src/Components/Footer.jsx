

export const Footer = () => {
  return (
    <footer className="footer px-10 lg:px-32 py-10 bg-black text-white">
      <aside>
        <h1 className="text-5xl font-extrabold">Jolpoth</h1>
        <p>Jolpoth Tours & Travels<br />Providing reliable Tours since 2000</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Tours</a>
        <a className="link link-hover">Accommodation</a>
        <a className="link link-hover">sightseeing</a>
        <a className="link link-hover">Tour consultancy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover" href="./about.html">About us</a>
        <a className="link link-hover" href="./contact.html">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  )
}
