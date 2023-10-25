import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({
  appereance,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appereance == 'primary',
        [styles.ghost]: appereance == 'ghost',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
