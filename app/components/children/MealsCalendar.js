import React from "react";
import Day from './Day.js';
import Yelp from './Yelp';
// import ExpandedMeal from './ExpandedMeal';
const MyModal = require('./Modal');

const week = [
  {
    dayName: "Sunday",
    meals: {
      breakfast: "breakfast",
      lunch: "Ham Sandwich",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "https://spoonacular.com/recipeImages/Chickpea--tomato---spinach-curry-217162.jpg"
    },
    instructions: "Put the sugar and 1.5 litres/2¾ pintswater into the largest saucepan youhave. Gently heat, without boiling, untilthe sugar has dissolved. Give it a stirevery now and again. Pare the zest fromthe lemons using a potato peeler, thenslice the lemons into rounds.Once the sugar has dissolved, bring thepan of syrup to the boil, then turn offthe heat. Fill a washing up bowl withcold water. Give the flowers a gentleswish around to loosen any dirt or bugs.Lift flowers out, gently shake and transferto the syrup along with the lemons, zestand citric acid, then stir well. Cover thepan and leave to infuse for 24 hrs.Line a colander with a clean tea towel,then sit it over a large bowl or pan. Ladlein the syrup – let it drip slowly through.Discard the bits left in the towel. Use afunnel and a ladle to fill sterilised bottles(run glass bottles through the dishwasher,or wash well with soapy water. Rinse,then leave to dry in a low oven).The cordial is ready to drink straight awayand will keep in the fridge for up to6 weeks. Or freeze it in plastic containersor ice cube trays and defrost as needed."
  },
  {
    dayName: "Monday",
    meals: {
      breakfast: "breakfast",
      lunch: "Lasagna",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "https://spoonacular.com/recipeImages/cheesy-kale-sweet-potato-casserole-800562.jpg"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Tuesday",
    meals: {
      breakfast: "breakfast",
      lunch: "mexican-bean-salad",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "https://spoonacular.com/recipeImages/Homemade-elderflower-cordial-210308.jpg"
    },
    instructions: "Drain and rinse beans.Combine beans, onion, red pepper, cilantro and corn in a very large bowl.In a small bowl, whisk together remaining ingredients except for the chili powder.Pour dressing over beans and mix well.Sprinkle a dash of chili powder over the top of the salad.Cover and chill thoroughly.Before serving, toss salad again, then add another dash of chili powder and spread avocado over the top of the salad.(Don't add the avocado until right before serving.)."
  },
  {
    dayName: "Wednesday",
    meals: {
      breakfast: "breakfast",
      lunch: "Tacos",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "https://spoonacular.com/recipeImages/mexican-bean-salad-95774.jpg"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Thursday",
    meals: {
      breakfast: "breakfast",
      lunch: "Spaghetti",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "https://spoonacular.com/recipeImages/mexican-bean-salad-95774.jpg"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Friday",
    meals: {
      breakfast: "breakfast",
      lunch: "Chicken Salad",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "https://spoonacular.com/recipeImages/Lemon-Crumb-Muffins-366043.jpg"
    },
    instructions: "Directions                                                                                In a large bowl, combine the flour, sugar, baking soda and salt. In another bowl, combine the eggs, sour cream, butter, lemon peel and juice. Stir into dry ingredients just until moistened. Fill greased or paper-lined muffin cups three-fourths full.                                                                                            In a small bowl, combine flour and sugar; cut in butter until mixture resembles coarse crumbs. Sprinkle over batter.                                                                                           Bake at 350° for 20-25 minutes or until a toothpick inserted near the center comes out clean. Cool for 5 minutes before removing from pans to wire racks. In a small bowl, whisk glaze ingredients; drizzle over warm muffins. Serve warm.                                        Yield: 40 muffins.                                                                                                                         Originally published as Lemon Crumb Muffins in  Taste of HomeApril/May 2008, p41                                                                                                                                                                                                        Nutritional Facts                                                                             1 muffin equals 308 calories, 13 g fat (8 g saturated fat), 77 mg cholesterol, 159 mg sodium, 43 g carbohydrate, 1 g fiber, 4 g protein.                                                                                                                                                                     Print                                                                                    Add to Recipe Box                            Email a Friend"
  },
  {
    dayName: "Saturday",
    meals: {
      breakfast: "breakfast",
      lunch: "Sushi",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "https://spoonacular.com/recipeImages/Lemon-Crumb-Muffins-366043.jpg"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  }
];

class MealsCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      Sunday: '',
      Monday: '',
      Tuesday: '',
      Wednesday: '',
      Thursday: '',
      Friday: '',
      Saturday: ''
    };

    this.createDay = this.createDay.bind(this);

  }

  createDay() {


    return week.map((day, i) => {

      return (
        <div 
          key={ i } 
          className="col-sm-3" 
          onClick={ () => this.props.getMyMeal(day.dayName, day.meals.lunch, day.ingredients.ingredientsImg,day.instructions, day.ingredients.ingredients) }>
        <Day 
          key={ i } 
          day={ day.dayName } 
          breakfast={ day.meals.breakfast } 
          lunch={ day.meals.lunch } 
          dinner={ day.meals.dinner } 
          image={day.ingredients.ingredientsImg}
          ingredients={ day.ingredients.ingredients }
        
          instructions={ day.instructions } />
        </div>
        );
    })
  }

  render() {
    return (
      <div className="calendar-wrapper">
        <div className="row">
          <MyModal 
          day={this.props.day}
          meal={ this.props.meal } 
          img={this.props.img}
          instructions={this.props.instructions}
          ingredients={this.props.ingredients}
          show={ this.props.show } 
          hideModal={ this.props.hideModal } />
        </div>
        <div className="row">
          { this.createDay() }
        </div>
        <div>
        </div>
        <div id="yelpInMeals" className="row">
          <Yelp />
        </div>
      </div>
      );
  }
}

export default MealsCalendar;