import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';
import clsx from 'clsx';
import Cards from '../cards/cards';


class BurgerConstructor extends React.Component {
  render() {
    return (
      <section>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <nav className={burgerConstructorStyles.nav}>
          <a href='#' className={clsx('pt-4 pb-4 text text_type_main-medium text_color_primary', burgerConstructorStyles.link_active)}>Булки</a>
          <a href='#' className={clsx('pt-4 pb-4 text text_type_main-medium text_color_inactive', burgerConstructorStyles.link)}>Соусы</a>
          <a href='#' className={clsx('pt-4 pb-4 text text_type_main-medium text_color_inactive', burgerConstructorStyles.link)}>Начинки</a>
        </nav>
        <div className={clsx('mt-10 mb-1', burgerConstructorStyles.wrapper)}>
          <h2 className={burgerConstructorStyles.title}>Булки</h2>
          <Cards />
        </div>
      </section>
    )
  }
}

export default BurgerConstructor;