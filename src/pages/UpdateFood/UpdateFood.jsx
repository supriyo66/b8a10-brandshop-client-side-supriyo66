import { useLoaderData } from "react-router-dom";


const UpdateFood = () => {

    const food=useLoaderData();
    const {_id,name,brandName,foodType,price,rating,des,photo}=food

    const handleUpdateFood=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const brandName=form.brandName.value;
        const typeName=form.typeName.value;
        const price=form.price.value;
        const des=form.des.value;
        const rating=form.rating.value;
        const photo=form.photo.value;

        const UpdateFood={name,brandName,typeName,price,des,rating,photo}
        console.log(UpdateFood);
        fetch(`https://food-store-server-cb4c7wkn8-supriyo66.vercel.app/food/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(UpdateFood)

        })
    
    
    }
    return (
        <div className="bg-slate-200 container mx-auto p-24">
      <h2 className="text-center text-4xl font-medium mb-2">Update Food: {name}</h2>
      
      <form onSubmit={handleUpdateFood}>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Food-name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brandName"
                defaultValue={brandName}
                placeholder="Brand-name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="typeName"
                defaultValue={foodType}
                placeholder="Food-type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="des"
                defaultValue={des}
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Out of 10"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo-url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update food"
          className="btn btn-block bg-slate-400 mt-8"
        ></input>
      </form>
    </div>
    );
};

export default UpdateFood;