const AddFood = () => {
    const handleAddFood=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const brandName=form.brandName.value;
        const typeName=form.typeName.value;
        const price=form.price.value;
        const des=form.des.value;
        const rating=form.rating.value;
        const photo=form.photo.value;

        const newFood={name,brandName,typeName,price,des,rating,photo}
        console.log(newFood);

        fetch('https://food-store-server-cb4c7wkn8-supriyo66.vercel.app/food',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newFood)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }


  return (
    <div className="bg-slate-200 container mx-auto p-24">
      <h2 className="text-center text-4xl font-medium mb-2">Add New Food</h2>
      <p className="text-center font-light mb-10 ">
        Discover a world of delectable delights in our food section. From
        mouthwatering recipes to culinary inspiration,<br></br> we have got your
        cravings covered. Explore and savor the flavors of a lifetime.
      </p>
      <form onSubmit={handleAddFood}>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
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
                placeholder="Photo-url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add food"
          className="btn btn-block bg-slate-400 mt-8"
        ></input>
      </form>
    </div>
  );
};

export default AddFood;
