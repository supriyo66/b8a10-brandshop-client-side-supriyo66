import { Link, useLoaderData, useParams } from "react-router-dom";


const FoodDetails = () => {
    const foods =useLoaderData();
    const {_id}=useParams();
    const food=foods.find(food=>food._id == _id)
    
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 w-1/2 mx-auto">
    <img src={food.photo} className="rounded-xl" />
  </figure>
  <div className="mx-auto flex justify-around py-8">
    <div>
    <h2 className="card-title text-3xl"><span>Name: </span>{food.name}</h2>
    <h2 className="text-2xl"><span className="font-medium">Brand Name: </span>{food.brandName}</h2>
    <h2  className="text-2xl"><span className="font-medium">Food type: </span>{food.typeName}</h2>
    <h2  className="text-2xl"><span className="font-medium">Rating: </span>{food.rating}(0 to 10)</h2>
    <h2  className="text-2xl"><span className="font-medium">Price: </span>{food.price} Tk</h2>
    <p  className="text-2xl"><span className="font-medium">Short description: </span>{food.des}</p>
    </div>
    
    <div className="card-actions">
    <div className="btn-group btn-group-vertical mt-5">
  <Link to={`/updateFood/${_id}`}>
  <button className="btn btn-active">Update</button>
  </Link>
  
  <Link to={`/details2/${_id}`}><button className="btn bg-emerald-400">Details</button></Link>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodDetails;