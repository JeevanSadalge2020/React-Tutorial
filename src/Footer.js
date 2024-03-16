function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>
        Copyright<span class="copyright">&copy;</span> {date.getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
