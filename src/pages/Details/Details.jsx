import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const foods =useLoaderData()
    const {_id}=useParams()
    const food=foods.find(food=>food._id == _id)
    return (
        <div className="container mx-auto">
            <div className="card w-1/2 bg-base-100 shadow-xl container mx-auto ">
            <figure className="h-96 w-full">
          <img src={food.photo} alt={food.name} className="object-cover w-full h-full" />
        </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {food.name}</h2>
    <h2 className="card-title">Price: {food.price}Tk</h2>
    <p>Fast food are all delectable dishes cherished for their unique qualities. A fast-food favorite, typically features a succulent patty, often made from beef, adorned with an array of toppings such as lettuce, cheese, and condiments, all sandwiched between toasted buns. on the other hand, offers warmth and comfort through a simmering blend of ingredients like vegetables, meats, and spices, served in a flavorful broth and in the end a creamy beverage or beverage make the moment better.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;