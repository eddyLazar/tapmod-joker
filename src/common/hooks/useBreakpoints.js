import { useMedia } from 'the-platform';
import theme from 'theme';

export default () => {
  const isSmall = useMedia({ maxWidth: theme.breakpoints[0] });
  const isMedium = useMedia({ minWidth: theme.breakpoints[1] });
  const isLarge = useMedia({ minWidth: theme.breakpoints[2] });

  return {
    isSmall,
    isMedium,
    isLarge
  };
};
