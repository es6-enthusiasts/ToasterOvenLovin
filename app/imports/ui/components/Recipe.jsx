import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = ({ title, description, ingredients, instructions, image }) => {
    return (
        <Card className={"card color2 pt-4 text-center h-100"}>
            <Card.Img className={"cardImg"} variant="top" src={image} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>

                <Card.Title>Ingredients</Card.Title>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                <Card.Title>Instructions</Card.Title>
                <Card.Text>{instructions}</Card.Text>

                <Button variant="primary">View Recipe</Button>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;
