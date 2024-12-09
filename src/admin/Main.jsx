import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import PageTitle from './components/PageTitle';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import PrivateRoute from './pages/Authentication/PrivateRoute';
import SalatTime from './components/SalatTime';
import CreateSalatTime from './components/CreateSalatTime';
import InvoiceCategory from './components/InvoiceCategory';
import CreateInvoiceCategory from './components/CreateInvoiceCategory/Index';
import Invoice from './components/Invoice';
import CreateInvoice from './components/CreateInvoice';
import Announcement from './components/Announcement';
import CreateAnnouncement from './components/CreateAnnouncement';

function Main() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        {/* Public routes */}
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin " />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup " />
              <SignUp />
            </>
          }
        />

        {/* Private routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Masjid Dashboard " />
                <ECommerce />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/announcement"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Announcement" />
                <Announcement />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/create-announcement"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Create Announcement" />
                <CreateAnnouncement />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/salat-time"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Salat Time " />
                <SalatTime />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/create-salat-time"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Create Salat Time " />
                <CreateSalatTime />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/all-invoice"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Invoice " />
                <Invoice />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/create-invoice"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Create Invoice " />
                <CreateInvoice />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/invoice-category"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Invoice Category " />
                <InvoiceCategory />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/create-invoice-category"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Create Invoice Category " />
                <CreateInvoiceCategory />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Calendar " />
                <Calendar />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Profile " />
                <Profile />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Form Elements " />
                <FormElements />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Form Layout " />
                <FormLayout />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/tables"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Tables " />
                <Tables />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Settings " />
                <Settings />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/chart"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Basic Chart " />
                <Chart />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Alerts " />
                <Alerts />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <PrivateRoute>
              <>
                <PageTitle title="Buttons " />
                <Buttons />
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default Main;
