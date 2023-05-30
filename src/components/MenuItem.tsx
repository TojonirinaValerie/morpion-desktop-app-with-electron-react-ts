import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { color } from '../styles/variables';
import HomeStyle, { MenuItemContainer, MenuLabel } from '../styles/homeStyle';

interface MenuItemProps {
  label: string;
  icon: IconDefinition;
  link: string;
}

const MenuItem = ({ label, icon, link }: MenuItemProps) => {
  
  return (
    <>
      <HomeStyle />
      <MenuItemContainer to={link}>
        <FontAwesomeIcon
          className="menu-icon"
          icon={icon}
          color={color.player1}
        />
        <MenuLabel className="button-label">{label}</MenuLabel>
        <FontAwesomeIcon
          className="menu-icon"
          icon={icon}
          color={color.player2}
        />
      </MenuItemContainer>
    </>
  );
};

export default MenuItem;
