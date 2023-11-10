import cn from 'classnames';
import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps) => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'white',
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};
