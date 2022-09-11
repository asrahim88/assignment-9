import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Footers from './Components/Footers/Footers';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Home></Home>} />
        <Route path='/home' element = {<Home></Home>} />
        <Route path='/about' element = {<About></About>} />
        <Route path='/blogs' element = {<Blogs></Blogs>} />
        <Route path='/dashboard' element = {<Dashboard></Dashboard>} />
        <Route path='/reviews' element = {<Reviews></Reviews>} />
        <Route path='*' element = {<NotFound></NotFound>} />
      </Routes>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus omnis voluptatum consequatur eius rerum perspiciatis esse error! A sunt rerum ipsum ullam reprehenderit aut placeat nam neque commodi dolor eaque, ex architecto dolores, tenetur corporis, perspiciatis accusantium impedit optio ratione modi molestias nobis? Asperiores perferendis necessitatibus maiores optio labore? Doloremque non similique delectus iure cum! Id quaerat officiis, eius minus hic, expedita dolor dicta provident dolores cum eos sint repudiandae enim iusto similique? Sed accusantium libero, voluptatum aperiam ut quasi fugit minima id facilis nemo recusandae impedit blanditiis nam, expedita optio vitae sit maiores fuga beatae itaque eius voluptas illo? Quos, quia. Pariatur alias tempora delectus adipisci, commodi, enim in voluptatem quidem a error quia beatae? Deserunt voluptatibus eius veniam recusandae, quo pariatur atque ab ducimus? Iusto voluptas impedit eos quis necessitatibus dignissimos reiciendis corrupti saepe eveniet rem commodi, dicta temporibus maxime, sunt nulla rerum? Facilis esse, modi et ipsum, adipisci qui nemo quo consequuntur, blanditiis error quod repudiandae. Alias cum modi laudantium quaerat soluta ipsam enim, culpa unde a sed! Ad at tenetur corporis voluptatibus veritatis quisquam cum ipsam, perferendis, dolorum quae consequatur dolorem reiciendis! Iusto dolores corrupti expedita officia quas ut. Dolorem voluptatum tempore delectus, cumque quaerat distinctio qui amet harum facere omnis inventore deleniti tenetur. Deserunt in expedita doloribus suscipit pariatur eveniet, at magnam commodi est libero dicta a sequi excepturi? Voluptatem sunt molestias molestiae? Nobis quaerat delectus natus labore commodi ipsa, voluptas corporis repudiandae laudantium dolores eius sed id voluptatem optio alias non tempore numquam recusandae odit enim doloribus eaque dolorem esse veniam. Ex blanditiis sapiente sequi autem veniam, veritatis, omnis beatae facere amet explicabo distinctio. Officia earum beatae natus deserunt? Blanditiis minima nesciunt esse. Neque aspernatur voluptate quisquam qui pariatur ut autem laborum temporibus eius eos quae, reiciendis impedit esse dignissimos corporis atque molestias laboriosam alias libero nemo repudiandae. Mollitia facilis dolorum quasi quos fugiat perferendis, dolore repudiandae illum laudantium ipsam reiciendis aperiam! Modi cum similique in quam quisquam voluptatum, ab neque autem veritatis aliquam facere enim unde. Dolores quis obcaecati modi eligendi autem repellat aperiam adipisci repellendus sunt nulla pariatur, quibusdam porro! Placeat illo repellat ratione cupiditate quibusdam repudiandae fugiat accusamus, ex laborum, quas eligendi vero deleniti? A cumque ipsa odio magnam, impedit exercitationem provident ducimus distinctio atque nisi fugit corporis assumenda ab mollitia illum in esse maxime dolor. Hic placeat fuga aspernatur recusandae distinctio consequuntur, explicabo sit asperiores reiciendis ea obcaecati necessitatibus quos autem a cum, molestias dolore laboriosam nam, veniam sapiente. Iusto, maxime animi nesciunt obcaecati inventore magnam quod qui, consequuntur sint placeat eius quasi, fuga eligendi sunt nihil eveniet sed harum excepturi temporibus error hic possimus illo molestiae. Quae voluptas facilis, ratione quod natus consectetur ad delectus velit culpa possimus repudiandae consequuntur error voluptatum dignissimos dolore unde. Eum, recusandae aliquam minima consequatur velit optio quae dolor expedita delectus explicabo voluptas consequuntur commodi distinctio animi quo tempora officiis architecto nobis nisi cum tenetur perspiciatis vitae? Laborum magnam earum expedita autem. Illum at porro vel commodi temporibus quos ipsa fugit suscipit similique.
      </p>
      <Footers></Footers>
    </div>
  );
}

export default App;
