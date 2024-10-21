
import  ImageOne  from "../src/assets/chris.jpg";
import ImageTwo from "../src/assets/beyonce.jpg";
import ImageThree from "../src/assets/bill.jpg";
import ImageFour from "../src/assets/elon.jpg";
import ImageFive from "../src/assets/kamala.jpg";
import ImageSix from "../src/assets/tom.jpg";
import ImageSeven from "../src/assets/zendaya.jpg";
import ImageEight from "../src/assets/mark.jpg"; 
import ProfileCard from './Profilecard.jsx';

function App() {
  const users = [
    {
      Name: 'Chris Hemsworth', 
      Position: 'Producer',
      Age: '28',
      Place:  'England, UK',
      ProfileImage: ImageOne,
      Theme: 'dark'
    },
    
    {
      Name: 'Beyonce Knowles', 
      Position: 'CEO Beyhive',
      Age: '40',
      Place:  'Texas, USA',
      ProfileImage: ImageTwo,
      Theme: 'light'

    },

    {
      Name: 'Bill Gates', 
      Position: 'Co-Founder, Microsoft',
      Age: '69',
      Place:  'California, USA',
      ProfileImage: ImageThree,
      Theme: 'dark'
    },
    
    {
      Name: 'Elon Musk', 
      Position: 'Founder, SpaceX',
      Age: '53',
      Place:  'Pretoria, South Africa',
      ProfileImage: ImageFour,
      Theme: 'light'

    }, 

    {
      Name: 'Kamala Harris', 
      Position: 'Vice President, USA',
      Age: '60',
      Place:  'California, USA',
      ProfileImage: ImageFive,
      Theme: 'dark'
    },
    
    {
      Name: 'Tom Holland', 
      Position: 'Actor',
      Age: '28',
      Place:  'England, UK',
      ProfileImage: ImageSix,
      Theme: 'light'

    }, 

    {
      Name: 'Zendaya Coleman', 
      Position: 'Actor',
      Age: '28',
      Place:  'California, USA',
      ProfileImage: ImageSeven,
      Theme: 'light'
    },
    
    {
      Name: 'Mark Zuckerberg', 
      Position: 'Founder, Meta',
      Age: '40',
      Place:  'Newyork, USA',
      ProfileImage: ImageEight,
      Theme: 'dark'

    }
  ]
  return (
    <div className="App">
      {users.map((user, index) => (
        <ProfileCard
        key={index}
        Name = {user.Name}
        Position={user.Place}
        Age = {user.Age}
        Location = {user.Place}
        ProfileImage={user.ProfileImage}
        Theme={user.Theme}
        />
      ))}
    </div>
  );
}

export default App;
