

const FoodCard = ({food}) => {
    const {name,photo}=food
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl container mx-auto">
  <figure><img src={photo} alt="Shoes" className="w-full h-full object-cover" /></figure>
  <div className="card-body text-center mx-auto">
    <h2 className="card-title">{name}</h2>
  </div>
</div>
        </div>
    );
};

export default FoodCard;