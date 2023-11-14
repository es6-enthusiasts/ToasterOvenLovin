import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecipeCard from './Recipe';

const RecipeGrid = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col md={3} xs={12}>
        <RecipeCard
          title="Carrot Cake"
          description="Moist and Fluffy Easy to bake Carrot Cake"
          ingredients={['Carrots', 'Cake']}
          instructions="Add Carrots To Cake and bake"
          /* eslint-disable-next-line max-len */
          image="https://ca-times.brightspotcdn.com/dims4/default/292423f/2147483647/strip/true/crop/600x400+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F18%2F28%2F3f155fdb7e3b0aa695f54a5b0e79%2Fla-fo-carrotcake-lm7ce8nc"
        />
      </Col>
      <Col md={3} xs={12}>
        <RecipeCard
          title="Mac and Cheese"
          description="Super Cheesy Mac and Cheese"
          ingredients={['Mac', 'Cheese']}
          instructions="Add Mac To cheese and stir"
          image="https://images-gmi-pmc.edge-generalmills.com/dc7930c0-8760-4997-9bac-21fa2f1e49f6.jpg"
        />
      </Col>
      <Col md={3} xs={12}>
        <RecipeCard
          title="Margherita Pizza"
          description="Classic and delicious Margherita Pizza"
          ingredients={['Dough', 'Tomato Sauce', 'Mozzarella', 'Basil']}
          instructions="Roll out the dough, spread sauce, add mozzarella, and bake until golden brown."
          image="https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/submissions/recipe/2001215136/SVs7T2FbTrmMpWri62fU_Margarita%20pizza.jpg"
        />
      </Col>
      <Col md={3} xs={12}>
        <RecipeCard
          title="Chicken Tacos"
          description="Spicy and flavorful Chicken Tacos"
          ingredients={['Chicken', 'Tortillas', 'Lettuce', 'Tomatoes', 'Salsa']}
          instructions="Cook chicken, assemble in tortillas with lettuce, tomatoes, and salsa. Serve hot!"
          image="https://i0.wp.com/littlemissfinicky.com/wp-content/uploads/2019/04/IMG_3622.jpg?fit=982%2C655&ssl=1"
        />
      </Col>
    </Row>
  </Container>

);

export default RecipeGrid;
