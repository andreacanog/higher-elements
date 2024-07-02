export default function AddProdcutPage() {
  return (
    <div>
      <h1 className="font-bold text-lg mb-3">Add Product</h1>
      <form>
        <input 
            required
            name="name"
            placeholder="Name"
            className="input-bordered input mb-3 w-full"
        />
        <textarea
            required 
            name="description" 
            placeholder="Description"
            className="textarea-bordered textarea mb-3 w-full"
        />
        <input 
            required
            name="imageUrl"
            placeholder="Name"
            type="url"
            className="input-bordered input mb-3 w-full"
        />
        <input 
            required
            name="price"
            placeholder="Price"
            type="number"
            className="input-bordered input mb-3 w-full"
        />

        <button className="btn btn-primary btn-block" type="submit">Add Product</button>
      </form>
    </div>
  );
}
