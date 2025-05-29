import classNames from 'classnames/bind';
import styles from './AccoutItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccoutItem({ data }) {
  return (
    // <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('infor')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccoutItem;
