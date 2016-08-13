import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
  render() {
    return (
      <div class={ style.home }>
        <div class={ style.topHero }>
          <img src={ require('../../assets/logo.png') } alt="Angels Inc Logo"/>
        </div>
        <div class={ style.bottomHero }>

        </div>
      </div>
    );
  }
}
