
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logoTiktok from '~/img/tiktok.jpg';
import Search from '~/Component/Layout/component/Search';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import avatarSon from '~/img/anhSon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/Component/Image';
import {
  faCircleQuestion,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faInbox,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/Component/Button';
import Menu from '~/Component/Popper/Menu';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'EngLish',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'VietNamese',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'FeedBack and help',
    to: '/feeback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'KeyBoard Shotcuts',
  },
];
function Header() {

  const currentUser = true;
  
  const handleMenuChange = (menuitem) => {
    switch (menuitem.type) {
      case 'language':
        break;
      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View Profile',
      to: '/@son',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get Coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      seprate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={logoTiktok} alt="Tittok" />
        </div>
        {/* Search */}
        <Search/>
          <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faTelegram} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faInbox} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="nodhđhhdhdhd"
                className={cx('user-avatar')}
                alt="Son"
                // fallback="https://tse3.mm.bing.net/th?id=OIP.YJM43iRqLR-ozUp542gRuAHaHa&pid=Api&P=0&h=220"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
