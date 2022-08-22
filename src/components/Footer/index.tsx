import "./styles.css";
import Link from "../Link";
import LogoFooter from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="Logo do dindin" />

      <nav>
        <Link texto="Cursos" redirect="/cursos" />

        <Link texto="Blog" redirect="/contato" />
        <Link texto="Contato" redirect="/cursos" />
      </nav>
    </footer>
  );
}
export default Footer;
