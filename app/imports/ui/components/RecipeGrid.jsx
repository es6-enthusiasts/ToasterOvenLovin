import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecipeCard from './Recipe';

const RecipeGrid = () => (
  <Container className="content py-3">
    <Row className="justify-content-center">
      <Col md={3} sm={1}>
        <RecipeCard title="Carrot Cake" description="Moist and Fluffy Easy to bake Carrot Cake" ingredients={['Carrots', 'Cake']} instructions="Add Carrots To Cake and bake" image="https://ca-times.brightspotcdn.com/dims4/default/292423f/2147483647/strip/true/crop/600x400+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F18%2F28%2F3f155fdb7e3b0aa695f54a5b0e79%2Fla-fo-carrotcake-lm7ce8nc" />
      </Col>
      <Col md={3} sm={1}>
        <RecipeCard title="Mac and Cheese" description="Super Cheesy Mac and Cheese" ingredients={['Mac', 'Cheese']} instructions="Add Mac To cheese and stir" image="https://sugarspunrun.com/wp-content/uploads/2023/03/Easy-mac-and-cheese-recipe-1-of-1.jpg" />
      </Col>
      <Col md={3} sm={1}>
        <RecipeCard title="Carrot Cake" description="Moist and Fluffy Easy to bake Carrot Cake" ingredients={['Carrots', 'Cake']} instructions="Add Carrots To Cake and bake" image="https://img.particlenews.com/image.php?type=thumbnail_580x000&url=32zaur_0o48H0ON00" />
      </Col>
      <Col md={3} sm={1}>
        <RecipeCard title="Carrot Cake" description="Moist and Fluffy Easy to bake Carrot Cake" ingredients={['Carrots', 'Cake']} instructions="Add Carrots To Cake and bake" image="https://img.particlenews.com/image.php?type=thumbnail_580x000&url=32zaur_0o48H0ON00" />
      </Col>
    </Row>
  </Container>

);

export default RecipeGrid;
