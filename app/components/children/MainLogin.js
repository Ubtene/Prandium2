const React = require('react');
const GoogleLogin = require('./GoogleLogin');
const LocalLogin = require('./LocalLogin');



class MainLogin extends React.Component {
constructor(props){
super(props);
this.state = {

}


}


render(){

	return (
		<div className="container">

		<div className="container row">

		</div>
		

		{/*<div className="container row">
			<LocalLogin setUser={this.props.setUser} />
		</div>
		*/}
		<div className="container row">
			<GoogleLogin setUser={this.props.setUser} />
		</div>


		</div>
		)
}
}

module.exports = MainLogin;