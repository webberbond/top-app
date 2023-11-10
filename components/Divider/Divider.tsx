import cn from 'classnames';
import styles from './Divider.module.css';
import { DividerProps } from './Divider.props';

export const Divider = ({ className, ...props }: DividerProps) => {
  return <hr className={cn(className, styles.hr)} {...props} />;
};
