import React from 'react';

const Menu = () => {
  const data = [
    {
      id: 1,
      title: 'Grilled Chicken Shawarma',
      image:
        'https://hips.hearstapps.com/vidthumb/images/190130-chicken-shwarma-horizontal-1551285400.png',
    },
    {
      id: 2,
      title: 'Pizza',
      image:
        'https://mahatmarice.com/wp-content/uploads/2020/04/Rice-Pizza-Crust.jpg',
    },
    {
      id: 3,
      title: 'Zinger Burger',
      image:
        'https://mir-s3-cdn-cf.behance.net/projects/original/75cabb95034859.Y3JvcCw3NTgsNTkzLDI3NCwxNTU.jpg',
    },
    {
      id: 4,
      title: 'Chicken Biryani',
      image: 'https://hamariweb.com/recipes/images/recipeimages/3.jpg',
    },
    {
      id: 5,
      title: 'Tandoori Chicken Wrap',
      image:
        'https://static.toiimg.com/thumb/62194857.cms?width=1200&height=900',
    },
    {
      id: 6,
      title: 'Grilled Fish',
      image: 'https://hamariweb.com/recipes/images/recipeimages/70962.jpg',
    },
    {
      id: 7,
      title: 'Grilled Chicken Shawarma',
      image:
        'https://hips.hearstapps.com/vidthumb/images/190130-chicken-shwarma-horizontal-1551285400.png',
    },
    {
      id: 8,
      title: 'Pizza',
      image:
        'https://mahatmarice.com/wp-content/uploads/2020/04/Rice-Pizza-Crust.jpg',
    },
    {
      id: 9,
      title: 'Zinger Burger',
      image:
        'https://mir-s3-cdn-cf.behance.net/projects/original/75cabb95034859.Y3JvcCw3NTgsNTkzLDI3NCwxNTU.jpg',
    },
    {
      id: 10,
      title: 'Chicken Biryani',
      image: 'https://hamariweb.com/recipes/images/recipeimages/3.jpg',
    },
    {
      id: 11,
      title: 'Tandoori Chicken Wrap',
      image:
        'https://static.toiimg.com/thumb/62194857.cms?width=1200&height=900',
    },
    {
      id: 12,
      title: 'Grilled Fish',
      image: 'https://hamariweb.com/recipes/images/recipeimages/70962.jpg',
    },
  ];
  return (
    <div className='container'>
      <div style={{ marginBottom: '100px' }} className='row card-group'>
        {data.map((d) => (
          <div key={d.id} className='col col-4 mt-4'>
            <img
              className='card-img-top'
              height='200px'
              src={d.image}
              alt='Card image cap'
            />
            <div style={{ backgroundColor: 'white' }} className='card-body'>
              <h5 className='card-title'>{d.title}</h5>
              <button className='btn btn-success' onclick={() => {}}>
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
