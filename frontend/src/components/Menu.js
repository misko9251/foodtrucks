import React, {useEffect, useState} from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import {GrAdd} from 'react-icons/gr'
import {BiMapPin} from 'react-icons/bi'
import {FiDelete} from 'react-icons/fi'
import {GrFormClose} from 'react-icons/gr'

function Menu() {

  const [food, setFood] = useState(false)
  const [formData, setFormData] = useState({
    food: '',
    price: ''
  })
  const [myMenu, setMyMenu] = useState([])

  function toggleAddFood(){
    setFood(!food)
  }

  function onChange(e){
    e.preventDefault()
    setFormData((prevVal)=>{
      return {
        ...prevVal,
        [e.target.name]: e.target.value
      }
    })
  }

  async function addFood(e){
    try {
      const formInfo = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({food: formData.food, price: formData.price})
      } 
      const response = await fetch('http://localhost:2006/trucks/addFoodItem', formInfo)
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    async function fetchData(){
      try {
        const response = await fetch(
          'http://localhost:2006/trucks/getFoodItems',
          {credentials: 'include'}
        )
        const json = await response.json()
        setMyMenu(json.food)
      } catch (error) {
        console.log(error)
      }
    }
      fetchData()
  })

  const menuItems = myMenu.map((item, index)=> {
    return (
      <div key={index} className='menu-item'><span onClick={()=> deleteFoodItem(item._id)}>{<FiDelete />}</span>{item.food}  <span className='menu-price'>${item.price}</span></div>
    )
  })

  async function deleteFoodItem(id){
    try {
      const formInfo = {
        credentials: 'include',
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({_id: id})
      }
      const response = await fetch(`http://localhost:2006/trucks/deleteFoodItem/${id}`, formInfo)
      const data = await response.json()
      setMyMenu((prevValue)=> prevValue.filter((item)=> item._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
        <section>
            {!food && (
              <>
              <div className='menu-header'>GRUB</div>
              <div className='menu-body'>
                {menuItems}
              </div>
              <div onClick={toggleAddFood}>
                <Button logo={<GrAdd fontSize='40px' style={{color:'black'}}/>} btnText='ADD SOME FOOD'/>
              </div>
              <Link to='/foodtrucks' style={{textDecoration: 'none'}}>
                  <Button logo={<BiMapPin fontSize='40px' style={{color:'black'}}/>} btnText='SHOW ME THE MAP!'/>
              </Link>
              </>
            )}
            {food && (
              <>
                <form onSubmit={addFood} className='food-form'>
                  <div className='close-form' onClick={()=> setFood(false)}><GrFormClose /></div>
                  <legend>ADD SOME FOOD</legend>
                  <input
                  placeholder='Menu Item'
                  type='text'
                  className='food-input'
                  onChange={onChange}
                  value={formData.food}
                  name='food'
                  />
                  <input
                  placeholder='Price ($X.XX)'
                  type='number'
                  className='food-input'
                  onChange={onChange}
                  value={formData.price}
                  name='price'
                  />
                  <button className='food-btn'>ADD</button>
                </form>
              </>
            )}

        </section>
    </>
  )
}

export default Menu