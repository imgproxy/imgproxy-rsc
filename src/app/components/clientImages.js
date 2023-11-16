'use client';
import { useState } from 'react';
import Image from 'next/image';
import ClientToggle from './clientToggle';
import Options from './options';
import styles from './clientImages.module.css';

export default function ClientImages({ link, copyright, options, children }) {
  const [active, setActive] = useState('imgproxy');

  const getCopyright = () => {
    if (copyright) {
      return <p className={styles.copyrigth}>Copyright {copyright}</p>;
    }
    return null;
  };

  return (
    <>
      <ClientToggle active={active} onChange={setActive} />
      {active === 'imgproxy' ? (
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            {children}
            {getCopyright()}
          </div>
          <div className={styles.textWrap}>
            <p>
              Imgproxy offers a wide range of advanced image manipulation
              features, making it a versatile tool for developers. It supports
              resizing, cropping, rotating, watermarking, and many other
              operations on the fly. These features provide developers with the
              flexibility to dynamically modify images based on specific
              requirements, without the need for manual image editing.{' '}
            </p>
            <Options options={options} />
          </div>
        </div>
      ) : null}
      {active === 'nextimage' ? (
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={link}
              layout="fill"
              objectFit="contain"
              alt="Image of the day"
            />
            {getCopyright()}
          </div>
          <div className={styles.textWrapper}>
            <p>Next image has only a few parameters for image processing:</p>
            <p>
              <span className={styles.code}>width</span>,{' '}
              <span className={styles.code}>height</span>,{' '}
              <span className={styles.code}>sizes</span> and{' '}
              <span className={styles.code}>quality</span>.
            </p>
            <p>
              Also one of the problems with next image is that it always needs
              to be passed both height and width or you have to use{' '}
              <span className={styles.code}>
                layout=&#39;fill&#39; objectFit=&#39;contain&#39;
              </span>{' '}
              parameters, but the image will be positioned absolutely.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}