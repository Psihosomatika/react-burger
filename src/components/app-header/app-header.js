import React from 'react';
import appHeaderStyles from './app-header.module.css';
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import clsx from 'clsx';
// import headerLogo from '../../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className={clsx('pt-4', 'pb-4', appHeaderStyles.header)}>
        <div className={appHeaderStyles.menu_container}>
          <div className={clsx('pr-5', 'pl-5', appHeaderStyles.wrapp)}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-small pl-2">Конструктор</p>
          </div>
          <div className={clsx('pr-5', 'pl-5', appHeaderStyles.wrapp)}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-small pl-2 text_color_inactive" >Лента заказов</p>
          </div>
        </div>
        <Logo className={appHeaderStyles.logo} />
        <div className={clsx('pr-5', 'pl-5', appHeaderStyles.wrapp)}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-small pl-2 text_color_inactive" >Личный кабинет</p>
        </div>

        {/* <img className={} src={headerLogo} alt="логотип." />
        <h1 className={headerStyles.title}>Собачки, следящие за тобой, пока ты изучаешь React</h1> */}
      </header>
    );
  }
}

export default Header;