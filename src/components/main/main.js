import React from 'react';
import mainStyles from './main.module.css';
import clsx from 'clsx';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';


class Main extends React.Component {
  render() {
    return (
      <main className={clsx('pt-10', mainStyles.main)}>
        <BurgerConstructor />
        <BurgerIngredients />
      </main>
    )
  }
}

export default Main;