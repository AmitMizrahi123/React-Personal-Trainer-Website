import React, { Fragment } from "react";
import Man from "./img/adam.png";
import Video from "./img/bg.mp4";
import "./Header.css";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Header = ({
  NavHome,
  NavAbout,
  NavTypesTraining,
  NavContact,
  NavGallery,
}) => {
  const onClick = () => {
    var nav = document.getElementById("nav");
    nav.classList.toggle("active");
    var toggle = document.getElementById("toggle");
    toggle.classList.toggle("active");
  };

  return (
    <Fragment>
      <header>
        <a href='/' className='logo'>
          Adam<span>Maximum</span>
        </a>
      </header>
      <div className='banner'>
        <video src={Video} autoPlay muted loop typeof='mp4'></video>
        <div dir='rtl' className='textBox'>
          <h2>ברוך הבא לצעד הראשון בתהליך שלך</h2>
          <p>
            אז מה היא שיטת העבודה שלי? אני לא מאמין בתהליכים מהירים ואינטסיביים
            או דיאטות שונות שלא מחזיקות לאורך זמן. בתחילת התהליך שלי הייתי מתאמן
            ממוצע, הגעתי לחדר כושר וקיבלתי תכנית אימונים סטנדרטית והתחלתי
            להתאמן, לא כל כך הבנתי מה אני עושה ומהר מאוד התחלתי להבין שאני עושה
            מלא טעויות בדרך שבה אני עובד למען המטרה שלי - להיות בחור שרירי
            וחטוב. אז מתי התחלתי להגיע באמת לתוצאות? ברגע שהורדתי את האגו שלי
            והתחלתי להוריד את המשקלים המטורפים ולעשות שטויות שגרמו לפציעה והבנתי
            שיש דרך מאוד פשוטה והגיונית להגיע למטרה. התהליך שאני עובר עם הלקוח
            ילמד אותו את עקרונות האימון הגופני והתזונה. עולמות המלאים בסטירות
            ובדעות שונות של מאמנים ולכן בתהליך אני מלווה את הלקוח ע״י תכנית
            עבודה מותאמת אישית הכוללת תכנית אימונים והכוונה תזונתית עד להשגת
            התוצאה הרצוייה.
          </p>
          <a href='/'>קרא עוד..</a>
        </div>
        <div className='imgBox'>
          <img src={Man} alt='Logo' />
        </div>
        <header>
          <ul dir='rtl' className='nav' id='nav'>
            <li>
              <a className='active' href='/'>
                {NavHome}
              </a>
            </li>
            <li>
              <a href='/'>{NavAbout}</a>
            </li>
            <li>
              <a href='/'>{NavTypesTraining}</a>
            </li>
            <li>
              <a href='/'>{NavContact}</a>
            </li>
            <li>
              <a href='/'>{NavGallery}</a>
            </li>
          </ul>
        </header>
        <ul className='sci'>
          <li>
            <a href='https://www.facebook.com/adam.bentov.9'>
              <div className='facebook'>
                <FacebookIcon fontSize='large' />
              </div>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/adamaximumfit/'>
              <div className='instagram'>
                <InstagramIcon fontSize='large' />
              </div>
            </a>
          </li>
          <li>
            <a href='https://api.whatsapp.com/send?phone=0542340752'>
              <div className='whatsapp'>
                <WhatsAppIcon fontSize='large' />
              </div>
            </a>
          </li>
          <li>
            <a href='tel:054-234-0752'>
              <div className='phone'>
                <PhoneInTalkIcon fontSize='large' />
              </div>
            </a>
          </li>

          <li>
            <a href='https://www.waze.com/ul?ll=31.96259400%2C35.06597600&navigate=yes'>
              <div className='location'>
                <LocationOnIcon fontSize='large' />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <span className='menuicon' id='toggle' onClick={onClick}></span>
    </Fragment>
  );
};

Header.defaultProps = {
  NavHome: "דף הבית",
  NavAbout: "אודות",
  NavTypesTraining: "סוגי אימונים",
  NavContact: "צרו קשר",
  NavGallery: "גלריה",
};

export default Header;
