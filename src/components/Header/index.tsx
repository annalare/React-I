import Link from "../Link";
import "./styles.css";
import Logo from "../../assets/images/logo-header.png";
function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo do dindin" />

      <nav>
        <Link texto="Cursos" redirect="/cursos" />
        <Link texto="Blog" redirect="/contato" />
        <Link texto="Contato" redirect="/cursos" />
      </nav>
    </header>
  );
}
export default Header;
