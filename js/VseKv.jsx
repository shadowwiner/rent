import React, { Component } from 'react';
import data from './contacts.json';


 class VseKv extends Component {
    render() { 

      const divStyle = {
        backgroundColor: "#fafafa", 
        width: '100%' , 
        minHeight: '100%',
      };

    const contactsNode = () => {
      return ( <p>{data.contacts.record1.phoneNumber}  </p> )
    };
    const descriptionNode = () => {
      return ( <p>{data.contacts.record1.description}  </p> )
    };
    const imgNode = () => {
      return ( <p>{data.contacts.record1.img}  </p> )
    };
 




      
    
      return (
<div style={divStyle}>


<div id="logo">
      <span>LoftCity</span>
    </div>

    <div class= "List_kv">
        <div class="record">
          <div class="photo"><img src='https://via.placeholder.com/350.png/0000FF' height="150"  width="250" alt="room_1" /></div>
          <div class="infa"><p>{descriptionNode()}</p></div>
          <div id="contacts"><p>{contactsNode()}</p></div>
        </div>
    
        <div class="record">
          <div class="photo"><img src='https://via.placeholder.com/360.png/0000FF' height="150" width="250" alt="room_2" /></div>
          <div class="infa"><p>Описание квартиры</p></div>
        <div class="contacts"><p>{contactsNode()}</p></div>
        </div>

        <div class="record">
          <div class="photo"><img src='https://via.placeholder.com/360.png/0000FF' height="150" width="250" alt="room_3" /></div>
          <div class="infa"><p>Описание квартиры</p></div>
          <div class="contacts"><p>Контакты</p></div>
        </div>

        <div class="record">
          <div class="photo"><img src='https://via.placeholder.com/360.png/0000FF' height="150" width="250" alt="room_4" /></div>
          <div class="infa"><p>Описание квартиры</p></div>
          <div class="contacts"><p>Контакты</p></div>
        </div>

        <div class="record">
          <div class="photo"><img src='https://via.placeholder.com/360.png/0000FF' height="150" width="250" alt="room_5" /></div>
          <div class="infa"><p>Описание квартиры</p></div>
          <div class="contacts"><p>Контакты</p></div>
        </div>
  </div>

  <div class="pages">
  <ul class="pagination">
    <li><a href="#">«</a></li>
    <li><a class="active" href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li><a href="#">7</a></li>
    <li><a href="#">»</a></li>
  </ul>
</div>





<script src = "faker.js" type = "text/javascript"></script>
</div>           

               

        );
    }
}
export default VseKv;
