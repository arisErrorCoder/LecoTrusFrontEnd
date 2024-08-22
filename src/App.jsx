import React, { useState } from 'react';
import Home from './Components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewInPage from './Components/NewInPage/NewIn';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import MenPage from './Components/MenPage/MenPage';
import WomenPage from './Components/WomenPage/WomenPage';
import KidsPage from "./Components/Kids/KidsPage";
import Header from './Components/Header/Header';
import CartPage from './Components/Cart/CartPage';
import CheckoutPage from './Components/Checkout/CheckoutPage';
import LogIn from './Components/LoginIn/Login';
import PaymentPage from './Components/Payment/PaymentPage';
import OrderConfirmation from './Components/OrderConfirm/OrderConfirmation';
// import OrdersPage from './Components/OrderPage/OrdersPage';
import Footer from './Components/Footer/Footer';
import MyOrders from './Components/OrderPage/MyOrders';
import PrivacyPolicy from './pages/PrivacyCookies';
import FeesPayment from './pages/FeesPayment';  
import TermsConditions from './pages/TermsConditions';
import Empty from './pages/EmptyPage';

import AboutUs from './pages/AboutUs';
import ClientOrderProcess from './pages/ClientOrderProcess';
// import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import BookAppointment from './pages/BookAppointment';
import BookVideoCall from './pages/BookVideoCall';
import WriteToUs from './pages/WriteToUs';
// import FAQs from './pages/FAQs';
// import PrivacyCookies from './pages/PrivacyCookies';
// import FeesPayment from './pages/FeesPayment';
// import TermsConditions from './pages/TermsConditions';
import Invoice from './pages/Invoice';
import DropdownSection from './Components/DropdownSection/DropdownSection';
import MultiImageSlider from './Components/RecentlyViewed/MultiImageSlider';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        {showLogin ? <LogIn setShowLogin={setShowLogin} /> : null}
        <Header setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/newin" element={<NewInPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/products/:id" element={
            <>
              <ProductsPage />
              <DropdownSection />
              <MultiImageSlider />
            </>
          } />

          {/* Footer Router */}
          <Route path="/client-order-process" element={<ClientOrderProcess />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/book-video-call" element={<BookVideoCall />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/write-to-us" element={<WriteToUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/measurement" element={<Invoice />} />
          <Route path="/privacy-cookies" element={<PrivacyPolicy />} />
          <Route path="/fees-payment" element={<FeesPayment />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/empty-page" element={<Empty />} />
        
          {/* 
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-cookies" element={<PrivacyCookies />} />
          <Route path="/fees-payment" element={<FeesPayment />} />
          <Route path="/terms-conditions" element={<TermsConditions />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
