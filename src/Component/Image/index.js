import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import noImage from '~/img/noimg.jpg';
import classNames from 'classnames';
const Image = forwardRef(({fallback : customFallback = noImage, src, alt, className, ...props }, ref) => {
  const [fallback, setFallBack] = useState('');
  const handleOnError = () => {
    setFallBack(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleOnError}
    />
  );
});

export default Image;
