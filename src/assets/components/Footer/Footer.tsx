import style from './footer.module.scss';
import { FaPinterestSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className={style.footerStyle}>
      <div className={style.footerLists}>
        <ul>
          <li>
            <h4>WALLYWOOD</h4>
          </li>
          <li>ØSTER UTTRUP VEJ 1</li>
          <li>AALBORG 9000</li>
        </ul>
        <ul>
          <li>CVR: 12345678</li>
          <li>
            MAIL: <a href="mailto:info@plakatshoppen.dk">info@plakatshoppen.dk</a>
          </li>
          <li>
            MOBIL: <a href="tel:+4598123456">+45 9812 3456</a>
          </li>
        </ul>
      </div>
      <div className={style.socialsStyle}>
        <FaPinterestSquare /> <FaInstagramSquare /> <FaFacebookSquare /> <FaTwitterSquare />
      </div>
    </footer>
  );
}
