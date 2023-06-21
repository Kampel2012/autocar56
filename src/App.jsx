import AboutUs from './components/AboutUs';
import Advantages from './components/Advantages';
import Comments from './components/Comments';
import Contacts from './components/Contacts';
import DtpTodos from './components/DtpTodos';
import Header from './components/Header';
import Helpfulness from './components/Helpfulness';
import OurServices from './components/OurServices';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {
  const advantagesRef = useRef();
  const helpfulnessRef = useRef();
  const commentsRef = useRef();
  const contactsRef = useRef();

  const myRef = [advantagesRef, helpfulnessRef, commentsRef, contactsRef];

  function scrollToRef(myRef) {
    myRef.current.scrollIntoView();
  }

  return (
    <div className="">
      <Header scrollToRef={scrollToRef} myRef={myRef} />
      <div className='pt-20 flex bg-center bg-no-repeat bg-cover text-white min-h-screen bg-[url("https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/bg_screen_1.jpg")]'>
        <AboutUs />
      </div>
      <div className=' flex bg-center bg-no-repeat bg-cover text-white min-h-screen bg-[url("https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/bg_screen_2.jpg")]'>
        <DtpTodos />
      </div>
      <div
        ref={advantagesRef}
        className='pt-14 flex bg-center bg-no-repeat bg-cover text-white min-h-screen bg-[url("https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/bg_screen_3.jpg")]'
      >
        <Advantages />
      </div>
      <div className='flex bg-center bg-no-repeat bg-cover text-white min-h-screen bg-[url("https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/bg_screen_4.jpg")]'>
        <OurServices />
      </div>
      <div
        ref={helpfulnessRef}
        className='flex bg-center bg-no-repeat bg-cover text-white min-h-screen bg-[url("https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/bg_screen_5.jpg")]'
      >
        <Helpfulness />
      </div>
      <div
        ref={commentsRef}
        className="flex text-white min-h-screen border-b py-10"
      >
        <Comments />
      </div>
      <div ref={contactsRef} className="flex text-white px-2">
        <Contacts />
      </div>
      <div className="mt-20 bg-gray-400 ">
        <Footer scrollToRef={scrollToRef} myRef={myRef} />
      </div>
    </div>
  );
}

export default App;
