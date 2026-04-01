import MobilePageHeader from '#components/MobilePageHeader';
import { socials } from '#constants';

const MobileContact = () => {
  return (
    <div className="mobile-contact">
      <MobilePageHeader title="Contact Me" />

      <div className="mobile-contact-content">
        <div className="mobile-contact-hero">
          <img
            src="/images/abdulsamad.png"
            alt="Abdulsamad"
            className="mobile-contact-avatar"
          />
          <h2 className="mobile-contact-heading">Let's Connect</h2>
          <p className="mobile-contact-subtext">
            Got an idea? A bug to squash?
            <br />
            Or just wanna talk tech? I'm in.
          </p>
        </div>

        <div className="mobile-contact-cards">
          {socials.map(({ id, text, icon, bg, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-contact-card"
              style={{ backgroundColor: bg }}
            >
              <img src={icon} alt={text} className="mobile-contact-card-icon" />
              <span className="mobile-contact-card-text">{text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileContact;
