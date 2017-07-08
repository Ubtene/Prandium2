const React = require('react');
import MainFood from './MainFood';
const Userform = require('./Userform');
const helpers = require('./../utils/helpers.js');

class CentralPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hasMeals: false
        }
    
    }


    componentDidMount(){
        console.log("in central CentralPage");
        console.log(this.props.userInfo);
    }

 
    render() {
         
        return (
            <div className='central-page'>

              {(this.props.user.data != 21)  ? 
              <MainFood 
              setUser={this.props.setUser}
              userMeals={this.props.userMeals} 
              getMyMeal={ this.props.getMyMeal } 
              day={this.props.day}
              meal={ this.props.meal } 
              img={this.props.img}
              instructions={this.props.instructions}
              ingredients={this.props.ingredients}
              ingredientsimg={this.props.ingredientsimg}
              show={ this.props.show } 
              hideModal={ this.props.hideModal } 
              user={this.props.user} 
              setUserMeals={this.props.setUserMeals}
              /> : 
              <Userform 
              setUser={this.props.setUser}
              setUserInfo={this.props.setUserInfo} 
              user={this.props.user} 
              />  }
            </div>
        )
    }

}

export default CentralPage;

