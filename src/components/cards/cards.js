import React from 'react';
import { data } from '../../utils/data';
import cardsStyle from './cards.module.css';
import clsx from 'clsx';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


class Cards extends React.Component {

  render() {
    return (
      <div className={clsx('pr-8 pl-6 pt-6', cardsStyle.wrapp)}>
        {data.map((props) => (
          <div className={cardsStyle.card}>
            {/* <span className={clsx('text text_type_digits-default', cardStyle.counter)}>1</span> */}
            <img className={cardsStyle.img} src={props.image} />
            <div className={clsx('pt-2', cardsStyle.wrapp_text)}>
              <span className='mr-2 text text_type_digits-default'>{props.price}</span>
              <CurrencyIcon type="primary" />
            </div>
            <p className={clsx('text text_type_main-default pt-2', cardsStyle.text)}>{props.name}</p>
          </div>
        ))
        }
      </div>
    );
  }
}

export default Cards;
// class ChatRoom extends React.Component {
//   state = {
//     messages: [{
//       id: 1,
//       user: 'Ольга',
//       text: 'Привет! Можешь помочь со списками в React?',
//     }, {
//       id: 2,
//       user: 'Николай',
//       text: 'Здравствуй! Конечно, это проще простого! Какой у тебя вопрос?',
//     }, {
//       id: 3,
//       user: 'Ольга',
//       text: 'Спасибо! Как они попадают в JSX?',
//     }];
//   }

//   render() {
//     return (
//       <div className="ChatRoom">
//         {this.state.messages.map((message) => (
//           <div className="Message">
//             <span className="Message-user">{message.user}</span>
//             <span className="Message-text">{message.text}</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }