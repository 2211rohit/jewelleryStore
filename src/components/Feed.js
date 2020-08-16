import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FeedCard from './Feedcard';
import Navbar from './Navbar';
import Data from '../tanishq.json';
import Footer from './Footer'

export default function Feed() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [categoryFilter, setCategoryFilter] = useState(0);

  const filteredData = Data.filter(feed => feed.avlble === 1)

  const category = [ 'All'
  , 'tq-mia-collections'
  , 'tq-mia-category'
  , 'Mia'
  , 'Collections'
  , 'Silver'
  , 'Jewellery'
  , 'Jeweller'
  , 'Jewellery Type'
  , 'tq-occasion'
  , 'Gifting']

  return (
    <>
      {Data.length > 0 && (
        <Navbar
        />
      )}
      <Container style={{ marginTop: '100px' }}>
        <label style={{color: 'white'}}>Filter by Category:&nbsp;</label>
        <select name='cars' id='cars' onChange={(e) => (setCategoryFilter(e.target.value))}>
          {category.map((item, index) => <option key={index} value={index}>{item}</option>)}
        </select>
        <br />
        <h3 style={{color: 'white'}}>Category: {category[categoryFilter]}</h3>
        {category[categoryFilter] === 'All'
          ? filteredData.map(feed => {
              return (
                <FeedCard
                  feed={feed}
                  key={feed._id}
                />
              );
            }).slice(start,end)
          : filteredData.filter(feed => feed.category === category[categoryFilter]).map(feed => {
            return (
              <FeedCard
                feed={feed}
                key={feed._id}
              />
            );
          }).slice(start,end)
          }
          <div style={{marginBottom: '100px'}}>
            <i className='fa fa-arrow-left' style={{cursor: 'pointer'}} onClick={() => (start !== 0 ? setStart(start - 10) : null, start !== 0 ? setEnd(end - 10) : null)}/>
            &nbsp;&nbsp;Change Page&nbsp;&nbsp;
            <i className='fa fa-arrow-right' style={{cursor: 'pointer'}} onClick={() => (end < Data.length ? setStart(start + 10) : null, end < Data.length ? setEnd(end + 10) : null)}/>
        </div>
      </Container>
      {Data.length > 0 && (
        <Footer/>
      )}
    </>
  );
}
