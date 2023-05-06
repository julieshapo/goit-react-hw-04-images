import { HeaderStyle } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
