import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='contact' />
        Contact Me
      </div>

      <div className='p-5 space-y-5'>
        <img src="/images/abdulsamad.png" alt="abdulsamad" className='w-20 rounded-full' />
        <h3>Let's connect</h3>
        <p>Got an idea? A bug to squash? or just wanna talk tech? i'm in</p>
        <p>abdulsamadaayomide00@gmail.com</p>

        <ul>{socials.map(({id, link,icon,bg,text})=>(
          <li key={id} style={{backgroundColor: bg}}>
            <a href={link}>
              <img src={icon} alt={id} />
            <p>{text}</p>
            </a>
          </li>
        ))}</ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;
