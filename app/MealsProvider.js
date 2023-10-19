'use client'
import React, { useState } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
]

const MealsProvider = () => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = (id) => {
        setMeals(
            meals.map((meal) => (
                meal.id === id ? { ...meal, ticked: !meal.ticked } : meal
            ))
        );
    }

    return (
        <div>
            <MealsContext.Provider value={{ meals, tickMeal }}>
                {children}
            </MealsContext.Provider>
        </div>
    )
};

export default MealsProvider;
