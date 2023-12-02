import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AccountPage from '@/pages/account/AccountPage';
import { BankCardPage } from '@/pages/bankCard/BankCardPage';
import ContactsPage from '@/pages/contacts/ContactsPage';
import { HomePage } from '@/pages/home/HomePage';
import LoginPage from '@/pages/login/LoginPage';
import { NotFound } from '@/pages/notFound/NotFound';
import RegistrationPage from '@/pages/restration/RegistrationPage';
import { TimeLinePage } from '@/pages/timeline/TimelinePage';

export const Router = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='timeline' element={<TimeLinePage />} />
    <Route path='bank-card' element={<BankCardPage />} />
    <Route path='contacts' element={<ContactsPage />} />
    <Route path='login' element={<LoginPage />} />
    <Route path='registration' element={<RegistrationPage />} />
    <Route path='account' element={<AccountPage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);
