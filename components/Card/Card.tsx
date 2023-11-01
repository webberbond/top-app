import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({
  color = 'white',
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.white]: color == 'white',
        [styles.blue]: color == 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
