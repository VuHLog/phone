const filters = document.querySelectorAll('.container__filter-item');
filters.forEach(
    (filter, index) =>{
        filter.onclick = function(){
            if(this.classList.contains('active')){
                removeActive(this);
            } else {
                let filterShowActive = document.querySelector(".container__filter-item.active");
                if(filterShowActive){
                    removeActive(filterShowActive);
                    addActive(this);          
                }else{
                    addActive(this);
                }
            }
        }
    }
)
var body = document.getElementsByTagName("BODY")[0];
body.addEventListener("click", function (e) {
    let filterShowActive = document.querySelector(
      ".container__filter-item.active"
    );
    if (filterShowActive) {
        removeActive(filterShowActive);
    }
});
document.querySelector('.container__filter').addEventListener("click", function (e) {
    e.stopPropagation();
});
const addActive =(e) => {
    e.classList.add('active');
    e.querySelector('.filter-show').classList.add('active');
}
const removeActive =(e)=> {
    e.classList.remove('active');
    e.querySelector('.filter-show').classList.remove('active');
}