import classNames from 'classnames/bind';
import styles from './AccoutItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import avatarSon from '~/img/anhSon.jpg'
const cx = classNames.bind(styles);
function AccoutItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src={avatarSon} alt="Son" />
      <div className={cx('infor')}>
        <h4 className={cx('name')}>
          <span>Son Hueng Min</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>sonhuengmin7</span>
      </div>
    </div>
  );
}

export default AccoutItem;
