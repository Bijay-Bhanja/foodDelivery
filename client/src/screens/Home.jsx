import { useEffect, useState } from "react"
import Cart from "../components/Cart"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import burger from "../assets/burger.avif"
import momos from "../assets/momos.jpg"
import pizza from "../assets/pizza.jpg"

const Home = () => {
    const [search,setSearch]=useState('')
    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        response = await response.json()
        setFoodItem(response[0])
        setFoodCat(response[1])
        // console.log(response[0],response[1])
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }} >
                    <div className="carousel-inner" id='carousel'>
                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src={burger} className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={momos} className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={pizza} className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div className="row mb-3">
                                    <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                                    <hr />
                                    {foodItem !== [] ?

                                        foodItem.filter((item) =>
                                            (item.CategoryName === data.CategoryName) && item.name.toLowerCase().includes(search)
                                        ) .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className="col 12 col-md-6 col-lg-3">
                                                    <Cart foodItem={filterItems} option={filterItems.options[0]} />
                                                </div>
                                            )
                                        })

                                        : <div>No such data found</div>}
                                </div>
                            )
                        }) : ""

                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Home