import React from 'react';

const Menu = () => {
  const data = [
    {
      id: 1,
      title: 'Grilled Chicken Shawarma',
      price: 250,
      image:
        'https://hips.hearstapps.com/vidthumb/images/190130-chicken-shwarma-horizontal-1551285400.png',
    },
    {
      id: 2,
      title: 'Pizza',
      price: 450,
      image:
        'https://mahatmarice.com/wp-content/uploads/2020/04/Rice-Pizza-Crust.jpg',
    },
    {
      id: 3,
      title: 'Zinger Burger',
      price: 200,
      image:
        'https://mir-s3-cdn-cf.behance.net/projects/original/75cabb95034859.Y3JvcCw3NTgsNTkzLDI3NCwxNTU.jpg',
    },
    {
      id: 4,
      title: 'Chicken Biryani',
      price: 200,
      image: 'https://hamariweb.com/recipes/images/recipeimages/3.jpg',
    },
    {
      id: 5,
      title: 'Tandoori Chicken Wrap',
      price: 350,
      image:
        'https://static.toiimg.com/thumb/62194857.cms?width=1200&height=900',
    },
    {
      id: 6,
      title: 'Grilled Fish',
      price: 550,
      image: 'https://hamariweb.com/recipes/images/recipeimages/70962.jpg',
    },
  ];
  return (
    <div className='container d-flex justify-content-center'>
      <div style={{ marginBottom: '100px' }} className='row '>
        {data.map((d) => (
          <div
            style={{ maxWidth: '350px', minWidth: '350px' }}
            key={d.id}
            className='col col-lg-6 col-xl-4 col-md-12 mt-4'
          >
            <img
              className='card-img-top'
              height={230}
              src={d.image}
              alt='Card image cap'
            />
            <div style={{ backgroundColor: 'white' }} className='card-body'>
              <span
                className='d-flex'
                style={{ justifyContent: 'space-between' }}
              >
                <h5>{d.title}</h5>
                <h5 style={{ color: 'green' }}>Rs.{d.price}</h5>
              </span>
              <button className='btn btn-success' onClick={() => {}}>
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
