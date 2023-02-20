import React from 'react'
import './hotelListCard.css'
function HotelListCard(props) {
  return (
            <div className='card'>
                <div className='image_section'>
                    <img src={props.img} alt='not found'/>
                </div>
                <div className='details_section'>
                    <div className='heading_card'>
                        <div className='title'>
                            {props.title}
                        </div>
                        <div className='rating'>
                            <span className='rat_button'>Rating 8.4</span>
                        </div>
                    </div>
                    <div className='details'>
                        <div className='sub_details1'>
                            <div className = 'price_details'id='discount'>Rs 1750</div>
                            <div className = 'price_details'id='actual_price'>Rs {props.price}</div>
                            <div className = 'price_details'id='tax'>Included Taxes and Fees</div>
                            <div className = 'price_details'id='btn'><button type='submit'>See Avalability</button></div>
                            <div className = 'price_details'id='hotel_website'>Visit Hotel Website</div>
                        </div>
                        <div className='sub_details2'>
                                <div className='fam'>{props.text}</div>
                                <div className='location'>
                                <div className='sub_img' id='xyz'><img src='https://img.icons8.com/ios/512/region-code.png' alt='logo'></img></div><div className='loca_det'>{props.location}</div></div>
                        </div>
                        <div className='sub_details3'>
                                <div className='features'>
                                    <div className='sub_img'><img src='https://img.icons8.com/ios/512/wifi.png' alt='logo'></img></div>
                                    <div className='feat_text'>Free Wifi</div>
                                </div>
                                <div className='features'>
                                    <div className='sub_img'><img src='https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-parking-city-life-flatart-icons-flat-flatarticons.png' alt='logo'></img></div>
                                    <div className='feat_text'>Free Parking</div>
                                </div>
                                <div className='features'>
                                    <div className='sub_img'><img src='https://img.icons8.com/fluency-systems-regular/512/taxi.png' alt='logo'></img></div>
                                    <div className='feat_text'>Airport Taxi</div>
                                </div>
                                <div className='features'>
                                    <div className='sub_img'><img src='https://img.icons8.com/ios/512/black-friday-tag.png' alt='logo'></img></div>
                                    <div className='feat_text'>Special Offer</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default HotelListCard