const featuredPosts = document.querySelector("#featured-posts");
const post = `<div class="card card-compact card-bordered bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2t8ZW58MHx8MHx8fDA%3D"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Blog Post 1</h2>
              <p>If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
              <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
      </div><div class="card-actions justify-end">
                <button class="btn btn-primary">Leggi Ora</button>
              </div>
            </div>
          </div>`;

for (let i = 0; i < 9; i++) {
  featuredPosts.innerHTML += post;
}
