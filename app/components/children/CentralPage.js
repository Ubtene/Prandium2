const React = require('react');
import MainFood from './MainFood';
const Userform = require('./Userform');


class CentralPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hasMeals: false
        };
    }

    componentDidMount(){
        console.log("in central CentralPage");
        console.log(this.props.userInfo);
    }
    // <MealsCalendar getMyMeal={ this.props.getMyMeal } meal={ this.props.meal } show={ this.props.show } hideModal={ this.props.hideModal } /> : <DaySelection user={this.props.user}
    // meal={this.state.meal} show={this.state.show} hideModal={this.hideModal}
    render() {
         
        return (
            <div className='central-page'>
              {(this.props.userInfo === "true") ? <MainFood userMeals={this.props.userMeals} getMyMeal={ this.props.getMyMeal } meal={ this.props.meal } show={ this.props.show } hideModal={ this.props.hideModal } user={this.props.user} /> : <Userform setUserInfo={this.props.setUserInfo} setUserMeals={this.props.setUserMeals} />  }
            </div>
        )
    }

}

export default CentralPage;

