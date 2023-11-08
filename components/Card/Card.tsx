import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef(
  (
    { color = 'white', children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.white]: color == 'white',
          [styles.blue]: color == 'blue',
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
