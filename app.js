const handleCategory = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    
    const data = await res.json();
    // console.log(data.data[0].category)
        
        const categoryContainer = document.getElementById("category-container");
        
        const categoryData = data.data;

        categoryData.forEach((category) => {

            const div = document.createElement('div');
            div.innerHTML = `
            <a onclick="loadCategoryData('${category.category_id}')" class="btn lg:bg-gray-300 md:bg-gray-300 normal-case lg:text-xl md:text-xl">${category.category}</a>
            `;
            categoryContainer.appendChild(div)
        });       
     
}


const loadCategoryData = async(categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerText = "";

   data.data.forEach((data) =>{
    const div  = document.createElement('div');
    div.innerHTML=`
     <div class="card bg-base-100 shadow-xl mb-6">
                    <figure><img class="lg:h-52 md:h-52 h-full" src="${data.thumbnail}" alt="Shoes" /></figure>
                    <div class="card-body p-0">                      
                      <div class="card-actions justify-between mt-2">
                        <div>                           
                            <div class="flex mt-2 gap-4 align-middle">
                                <div class="rounded-full">
                                    <img src="${data.authors[0].profile_picture}" alt="" class="rounded-full lg:w-12 md:w-10 w-10 h-10 lg:h-12 ml-2">
                                </div> 
                                <div class=" pt-2 pb-4">
                                    <h4 class="font-bold text-lg">${data.title}</h4>  
                                    <h2 class="text-start">${data.authors[0].profile_name}</h2>
                                    <small class="text-start">${data.others.views} views</small>
                                </div>                          
                            </div>                               
                        </div>
                      </div>
                  </div>
                </div>

    `;
    cardContainer.appendChild(div)
   })

     console.log(data.data)
}



handleCategory()
loadCategoryData("1000")