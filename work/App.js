import React,{useState,useEffect} from 'react';
import './App.css'; 
function App() {
  const initialImages = [
    {
      imageURL: 'https://image.made-in-china.com/202f0j00kTGqrgucqzpJ/Cute-Elastic-Hair-Bands-Girls-Artificial-Faux-Fur-Fluffy-Ring-Rope-Tie-Hair-Accessories.jpg',
      name: 'Hair-Bands',
    },
    {
      imageURL: 'https://5.imimg.com/data5/SELLER/Default/2021/12/XN/RW/PT/4320526/colorful-ear-muffs-500x500.jpg',
      name: 'Hair-clip',
    },
    {
      imageURL:'https://assets.vogue.in/photos/5d4c124760869300083bf6bc/2:3/w_2560%2Cc_limit/Rose%2520Gold%2520jewellery.jpg',
      name:'Rings',  
    },
    {
      imageURL:'https://wp.missmalini.com/wp-content/uploads/2019/09/BeFunky-collage-27-4.jpg',
      name:'Bag',
    },
    {
      imageURL:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F55%2F09%2F5509550d19e24becd7de465700657f84ab8942eb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
      name:'Backpack',
    },
    {
      imageURL:'https://offshootbooks.com/cdn/shop/products/9128YbO9MyL.jpg?v=1652864659',
      name:'sleepingbeauty',
    },
    {
      imageURL:'https://5.imimg.com/data5/SELLER/Default/2021/10/VD/DN/TP/3726307/bedtime-stories-box-set-collection-of-world-famous-fairy-tales.jpg',
      name:'Bedtimestories',
    },
    {
      imageURL:'https://cdn.kobo.com/book-images/0b106caf-8761-4e86-8739-1f51be9e03ea/353/569/90/False/a-treasury-of-fairy-tales-17-of-the-best-loved-classic-stories.jpg',
      name:'Fairytales',
    },
    {
      imageURL:'https://cdn.kobo.com/book-images/375d8872-9e4b-4edf-a128-26fda32f20a9/1200/1200/False/bilingual-fairy-tales-cinderella-grades-1-3.jpg',
      name:'cindrella',
    },
    {
      imageURL:'https://5.imimg.com/data5/SELLER/Default/2021/6/OA/FB/WD/49559104/121-bed-time-stories-500x500.jpg',
      name:'Tenali-rama',
    },
  ];
  const [images, setImages] = useState([...initialImages]);

  const loadMoreImages = () => {
    setImages([...images, ...initialImages]);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
    ) {
      loadMoreImages();
    }
  };
  return (
    <div className="App">
      <h1>Page with infinite scroll</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.imageURL} alt={image.name} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;



