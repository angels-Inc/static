import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      logoStyle: style.hidden
    };
  }

  componentDidMount() {
    setTimeout( () => this.setState({logoStyle: style.revealed}), 1 );
  }

  render(props, state) {
    return (
      <div class={ style.home }>
        <div class={ style.topHero }>
          <img class={ state.logoStyle } src={ require('../../assets/logo.png') } alt="Angels Inc Logo"/>
        </div>
        <div class={ style.bottomHero }>
          <h1>COMING SOON</h1>
        </div>
      </div>
    );
  }
}
